const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const dataFile = path.join(dataDir, "submissions.json");
const configFile = path.join(rootDir, "config.json");

fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, "[]", "utf8");
}

let config = {};
if (fs.existsSync(configFile)) {
  config = JSON.parse(fs.readFileSync(configFile, "utf8"));
}
config = {
  ...config,
  dingtalkWebhook: process.env.DINGTALK_WEBHOOK || config.dingtalkWebhook || "",
  dingtalkSecret: process.env.DINGTALK_SECRET || config.dingtalkSecret || ""
};

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function readSubmissions() {
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}

function writeSubmissions(items) {
  fs.writeFileSync(dataFile, JSON.stringify(items, null, 2), "utf8");
}

async function saveRemoteSubmission(submission) {
  const response = await fetch(`${supabaseUrl}/rest/v1/submissions`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(submission)
  });
  if (!response.ok) throw new Error(await response.text());
}

async function loadRemoteSubmissions() {
  const response = await fetch(
    `${supabaseUrl}/rest/v1/submissions?select=*&order=timestamp.asc`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`
      }
    }
  );
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

function sendDingTalk(submission) {
  const webhook = config.dingtalkWebhook;
  if (!webhook) return;

  const text = [
    "### 新的产品配色提交",
    `- 部门：${submission.department}`,
    `- 提交人：${submission.submitter}`,
    `- 品类：${submission.category || "未填写"}`,
    `- 产品：${submission.product || "未填写"}`,
    `- 颜色：${submission.color || "未填写"}`,
    `- 潘通：${submission.pantone || "未填写"}`,
    `- HEX：${submission.hex || "未填写"}`
  ].join("\n");

  let url = webhook;
  if (config.dingtalkSecret) {
    const timestamp = Date.now();
    const stringToSign = `${timestamp}\n${config.dingtalkSecret}`;
    const sign = crypto
      .createHmac("sha256", config.dingtalkSecret)
      .update(stringToSign)
      .digest("base64");
    url += `${url.includes("?") ? "&" : "?"}timestamp=${timestamp}&sign=${encodeURIComponent(sign)}`;
  }

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msgtype: "markdown",
      markdown: { title: "新的产品配色提交", text }
    })
  }).catch((error) => {
    console.error("DingTalk notify failed:", error.message);
  });
}

function sendJson(response, status, data) {
  const body = JSON.stringify(data);
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  response.end(body);
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  const pathname = decodeURIComponent(url.pathname);

  if (request.method === "POST" && pathname === "/api/submit") {
    try {
      const body = JSON.parse((await readBody(request)) || "{}");
      const department = String(body.department || "").trim();
      const submitter = String(body.submitter || "").trim();
      if (!department || !submitter) {
        sendJson(response, 400, { ok: false, error: "部门和提交人不能为空" });
        return;
      }
      const submission = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        department,
        submitter,
        category: String(body.category || ""),
        product: String(body.product || ""),
        color: String(body.color || ""),
        pantone: String(body.pantone || ""),
        hex: String(body.hex || ""),
        timestamp: body.timestamp || new Date().toISOString()
      };
      const items = readSubmissions();
      items.push(submission);
      writeSubmissions(items);
      if (supabaseUrl && supabaseKey) {
        try {
          await saveRemoteSubmission(submission);
        } catch (error) {
          console.error("Supabase save failed:", error.message);
        }
      }
      sendDingTalk(submission);
      sendJson(response, 200, { ok: true, id: submission.id });
    } catch (error) {
      sendJson(response, 400, { ok: false, error: error.message });
    }
    return;
  }

  if (request.method === "GET" && pathname === "/api/submissions") {
    if (supabaseUrl && supabaseKey) {
      try {
        sendJson(response, 200, await loadRemoteSubmissions());
        return;
      } catch (error) {
        console.error("Supabase load failed:", error.message);
      }
    }
    sendJson(response, 200, readSubmissions());
    return;
  }

  const filePath = pathname === "/" || pathname === "/index.html"
    ? path.join(rootDir, "index.html")
    : path.join(rootDir, pathname);
  if (!filePath.startsWith(rootDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  response.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream" });
  response.end(fs.readFileSync(filePath));
});

const port = Number(process.env.PORT || 3000);
server.listen(port, "0.0.0.0", () => {
  console.log(`Product showcase server running on 0.0.0.0:${port}`);
  console.log(`Local: http://127.0.0.1:${port}`);
});
