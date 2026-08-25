# 免费公网部署说明（Render + Supabase）

这套方案可以免费部署，提交记录存在 Supabase 免费数据库里，重启不会丢数据。

## 1. 创建 Supabase 数据库

1. 打开 https://supabase.com 注册免费账号
2. 新建一个 Project，随便取名字
3. 进入项目后，左侧菜单选择 `SQL Editor`
4. 新建 Query，粘贴下面 SQL 并运行：

```sql
create table if not exists public.submissions (
  id text primary key,
  department text,
  submitter text,
  category text,
  product text,
  color text,
  pantone text,
  hex text,
  timestamp timestamptz default now()
);

alter table public.submissions enable row level security;

create policy "allow insert" on public.submissions
  for insert with check (true);

create policy "allow select" on public.submissions
  for select using (true);
```

5. 左侧 `Project Settings -> API`，复制：
   - `Project URL`：就是 `SUPABASE_URL`
   - `anon public`：就是 `SUPABASE_ANON_KEY`

## 2. 把项目放到 GitHub

1. 新建一个 GitHub 仓库（私有或公开都行）
2. 把 `outputs/product-showcase` 里的所有文件上传到仓库根目录
3. 必须包含：`server.js`、`index.html`、`app.js`、`styles.css`、`package.json`、`render.yaml`、`images/`

## 3. 部署到 Render

1. 打开 https://render.com 注册免费账号
2. 点 `New -> Blueprint`
3. 选择你的 GitHub 仓库，Render 会识别 `render.yaml`
4. 创建时填写环境变量：

```text
SUPABASE_URL=你的 Supabase Project URL
SUPABASE_ANON_KEY=你的 Supabase anon key
DINGTALK_WEBHOOK=你的钉钉机器人 Webhook（可留空）
DINGTALK_SECRET=钉钉加签密钥（没有可留空）
```

5. 等部署完成，会得到一个公网地址，例如 `https://product-showcase.onrender.com`

## 4. 绑定域名 color.zsmj.com

去 `zsmj.com` 的 DNS 管理后台，添加一条记录：

```text
类型：CNAME
主机记录：color
值：你的 Render 地址（例如 product-showcase.onrender.com）
```

生效后客户访问：

```text
https://color.zsmj.com
```

后台地址：

```text
https://color.zsmj.com/admin.html
```

## 注意

- 本地运行时提交记录保存在 `data/submissions.json`；部署到 Render 后必须配置 `SUPABASE_URL` 和 `SUPABASE_ANON_KEY`，记录才会存到数据库
- 当前后台没有登录密码，任何人知道地址都能查看；需要的话可以再加登录验证
