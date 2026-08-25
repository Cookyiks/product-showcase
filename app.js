const PRODUCTS = [
  {
    id: "curler",
    name: "自动卷发棒",
    model: "Air Curl 3.0",
    eyebrow: "自动旋转 · 恒温护发",
    description: "32mm 自动旋转卷发棒，陶瓷恒温结合负离子，让卷度更柔亮顺滑。",
    price: 399,
    templateId: "svg-curler",
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <g transform="rotate(45 24 24)">
          <rect x="6" y="17" width="25" height="14" rx="7"></rect>
          <rect x="30" y="19.5" width="10" height="9" rx="4.5"></rect>
          <circle cx="12" cy="24" r="2.5" fill="currentColor" stroke="none"></circle>
        </g>
      </svg>`,
    specs: [
      { label: "卷筒直径", value: "32mm" },
      { label: "温度范围", value: "160–200°C" },
      { label: "预热时间", value: "约 30 秒" },
      { label: "护发科技", value: "负离子" }
    ],
    colors: [
      {
        name: "雾粉",
        body: "#E7BAC3",
        light: "#F3D9DD",
        deep: "#C48A98",
        accent: "#F6E4E8",
        metal: "#E8E9EB",
        tint: "#F7EDEF",
        chip: "#E7BAC3"
      },
      {
        name: "曜石黑",
        body: "#24262B",
        light: "#3A3D43",
        deep: "#101114",
        accent: "#9AA0A7",
        metal: "#D9DBDD",
        tint: "#EBECEE",
        chip: "#24262B"
      },
      {
        name: "月牙白",
        body: "#F1EDE2",
        light: "#FAF8F2",
        deep: "#D7CDBA",
        accent: "#FFFFFF",
        metal: "#E7E4DD",
        tint: "#F7F5EF",
        chip: "#F1EDE2"
      },
      {
        name: "雾蓝",
        body: "#ABC5D9",
        light: "#D2E1EB",
        deep: "#86A5BE",
        accent: "#E5EDF3",
        metal: "#E3E7EA",
        tint: "#EFF4F7",
        chip: "#ABC5D9"
      }
    ]
  },
  {
    id: "flat",
    name: "直发板",
    model: "Sleek Plate X1",
    eyebrow: "陶瓷釉面板 · 精准控温",
    description: "浮动陶瓷釉面板贴合发丝，负离子顺滑科技与宽域控温，一板完成直发造型。",
    price: 329,
    templateId: "svg-flat",
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="5" y="12" width="38" height="10" rx="5"></rect>
        <rect x="5" y="26" width="38" height="10" rx="5"></rect>
        <circle cx="43" cy="24" r="2.5" fill="currentColor" stroke="none"></circle>
        <path d="M 12 8 v 4 M 36 8 v 4"></path>
      </svg>`,
    specs: [
      { label: "面板材质", value: "陶瓷釉" },
      { label: "温度范围", value: "150–230°C" },
      { label: "预热时间", value: "约 60 秒" },
      { label: "护发科技", value: "负离子" }
    ],
    colors: [
      {
        name: "FAEEC1",
        body: "#FAEEC1",
        light: "#FCF6DD",
        deep: "#CDC39E",
        accent: "#FBF3D2",
        metal: "#E6E4DD",
        tint: "#FBF1CC",
        chip: "#FAEEC1",
        image: "images/flat-FAEEC1.png",
        pantone: "PANTONE 7499 U",
        rgb: "RGB(250, 238, 193)",
        hexCode: "#FAEEC1"
      },
      {
        name: "FFB577",
        body: "#FFB577",
        light: "#FFD6B4",
        deep: "#D19462",
        accent: "#FFCA9D",
        metal: "#E6E4DD",
        tint: "#FFC28F",
        chip: "#FFB577",
        image: "images/flat-FFB577.png",
        pantone: "PANTONE 149 U",
        rgb: "RGB(255, 181, 119)",
        hexCode: "#FFB577"
      },
      {
        name: "FFC9DA",
        body: "#FFC9DA",
        light: "#FFE1EB",
        deep: "#D1A5B3",
        accent: "#FFD8E4",
        metal: "#E6E4DD",
        tint: "#FFD3E1",
        chip: "#FFC9DA",
        image: "images/flat-FFC9DA.png",
        pantone: "PANTONE 706 U",
        rgb: "RGB(255, 201, 218)",
        hexCode: "#FFC9DA"
      },
      {
        name: "EFC2E4",
        body: "#EFC2E4",
        light: "#F6DDF0",
        deep: "#C49FBB",
        accent: "#F3D3EC",
        metal: "#E6E4DD",
        tint: "#F2CDE9",
        chip: "#EFC2E4",
        image: "images/flat-EFC2E4.png",
        pantone: "PANTONE 671 U",
        rgb: "RGB(239, 194, 228)",
        hexCode: "#EFC2E4"
      },
      {
        name: "D5E1FA",
        body: "#D5E1FA",
        light: "#E8EEFC",
        deep: "#AFB8CD",
        accent: "#E1E9FB",
        metal: "#E6E4DD",
        tint: "#DDE6FB",
        chip: "#D5E1FA",
        image: "images/flat-D5E1FA.png",
        pantone: "PANTONE 657 U",
        rgb: "RGB(213, 225, 250)",
        hexCode: "#D5E1FA"
      },
      {
        name: "C6D9FB",
        body: "#C6D9FB",
        light: "#E0EAFD",
        deep: "#A2B2CE",
        accent: "#D6E4FC",
        metal: "#E6E4DD",
        tint: "#D0E0FC",
        chip: "#C6D9FB",
        image: "images/flat-C6D9FB.png",
        pantone: "PANTONE 2707 U",
        rgb: "RGB(198, 217, 251)",
        hexCode: "#C6D9FB"
      }
    ]
  },
  {
    id: "razor",
    name: "双头剃毛刀",
    model: "双头剃毛刀",
    eyebrow: "",
    description: "",
    price: 0,
    templateId: "svg-comb",
    icon: "",
    specs: [],
    colors: []
  },
  {
    id: "cleaner",
    name: "洁牙器",
    model: "洁牙器",
    eyebrow: "",
    description: "",
    price: 0,
    templateId: "svg-comb",
    icon: "",
    specs: [],
    colors: []
  },
  {
    id: "irrigator",
    name: "冲牙器",
    model: "冲牙器",
    eyebrow: "",
    description: "",
    price: 0,
    templateId: "svg-comb",
    icon: "",
    specs: [],
    colors: []
  },
  {
    id: "comb",
    name: "电动气垫梳",
    model: "Air Cushion Pro",
    eyebrow: "气垫按摩 · 无线充电",
    description: "气垫缓冲搭配恒温柔发，边梳边养，负离子减少毛躁，无线设计随身轻松。",
    price: 269,
    templateId: "svg-comb",
    icon: `
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <ellipse cx="24" cy="14" rx="17" ry="13"></ellipse>
        <rect x="18" y="20" width="12" height="18" rx="6"></rect>
        <path d="M 13 10 h 4 M 13 18 h 4 M 13 26 h 4 M 31 10 h 4 M 31 18 h 4 M 31 26 h 4"></path>
      </svg>`,
    specs: [
      { label: "恒温范围", value: "120–160°C" },
      { label: "续航时间", value: "约 90 分钟" },
      { label: "充电方式", value: "无线充电" },
      { label: "护发科技", value: "负离子" }
    ],
    colors: [
      {
        name: "珊瑚粉",
        body: "#EF9B98",
        light: "#F8C2BF",
        deep: "#D17471",
        accent: "#FBE1DD",
        metal: "#EAE3E2",
        tint: "#FCF0EE",
        chip: "#EF9B98"
      },
      {
        name: "暖杏",
        body: "#D7B98C",
        light: "#EAD9BE",
        deep: "#B28F60",
        accent: "#F2E5D2",
        metal: "#E6DFD3",
        tint: "#F8F2E8",
        chip: "#D7B98C"
      },
      {
        name: "橄榄绿",
        body: "#8A9B6D",
        light: "#B3C09B",
        deep: "#68784F",
        accent: "#E3E9D6",
        metal: "#E0E3DA",
        tint: "#F0F3E9",
        chip: "#8A9B6D"
      },
      {
        name: "烟灰",
        body: "#ADB2B9",
        light: "#CED2D6",
        deep: "#7E838B",
        accent: "#E5E7E9",
        metal: "#DFE1E3",
        tint: "#F1F2F4",
        chip: "#ADB2B9"
      }
    ]
  }
];

if (window.FLAT_IRON_COLORS) {
  const flatProduct = PRODUCTS.find((product) => product.id === "flat");
  if (flatProduct) flatProduct.colors = window.FLAT_IRON_COLORS;
}

if (window.RAZOR_COLORS) {
  const razorProduct = PRODUCTS.find((product) => product.id === "razor");
  if (razorProduct) razorProduct.colors = window.RAZOR_COLORS;
}

if (window.CLEANER_COLORS) {
  const cleanerProduct = PRODUCTS.find((product) => product.id === "cleaner");
  if (cleanerProduct) cleanerProduct.colors = window.CLEANER_COLORS;
}

if (window.IRRIGATOR_COLORS) {
  const irrigatorProduct = PRODUCTS.find((product) => product.id === "irrigator");
  if (irrigatorProduct) irrigatorProduct.colors = window.IRRIGATOR_COLORS;
}

const CATEGORIES = window.PRODUCT_CATEGORIES || [];

const state = {
  productId: "curler",
  colorIndex: 0,
  openCategory: 0,
  selectedSub: "卷发棒",
  placeholder: null,
  selectedColors: []
};

const els = {
  productList: document.getElementById("productList"),
  swatches: document.getElementById("swatches"),
  selectColorBtn: document.getElementById("selectColorBtn"),
  selectedColors: document.getElementById("selectedColors"),
  stageSwatches: document.querySelector(".stage-swatches"),
  stage: document.getElementById("stage"),
  stageVisual: document.getElementById("stageVisual"),
  stageModel: document.getElementById("stageModel"),
  stageColorName: document.getElementById("stageColorName"),
  stageRgb: document.getElementById("stageRgb"),
  stageHex: document.getElementById("stageHex"),
  stageChip: document.getElementById("stageChip"),
  zoomHint: document.getElementById("zoomHint"),
  zoomModal: document.getElementById("zoomModal"),
  zoomContent: document.getElementById("zoomContent"),
  zoomClose: document.getElementById("zoomClose"),
  submitForm: document.getElementById("submitForm"),
  department: document.getElementById("department"),
  submitter: document.getElementById("submitter"),
  submitBtn: document.getElementById("submitBtn"),
  submitStatus: document.getElementById("submitStatus")
};

const FLAT_IRON_BODY_MATERIALS = [5, 6];

const flatModelViewer = {
  THREE: null,
  ready: false,
  loading: false,
  mount: null,
  renderer: null,
  scene: null,
  camera: null,
  controls: null,
  model: null,
  bodyMaterials: [],
  pendingColor: null,
  animationId: null,
  running: false,
  resizeHandler: null,

  setBodyColor(hex) {
    if (!hex) return;
    this.pendingColor = hex;
    if (!this.ready || !this.THREE) return;
    const color = new this.THREE.Color(hex);
    this.bodyMaterials.forEach((material) => {
      material.color.copy(color);
      material.needsUpdate = true;
    });
  },

  resize() {
    if (!this.mount || !this.renderer || !this.camera) return;
    const rect = this.mount.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  },

  start() {
    if (this.running || !this.ready) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      this.animationId = requestAnimationFrame(loop);
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    };
    loop();
  },

  stop() {
    this.running = false;
    if (this.animationId !== null) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  },

  attach(mount, color) {
    this.mount = mount;
    if (color) this.pendingColor = color.body;
    if (!this.ready) return;
    mount.innerHTML = "";
    mount.appendChild(this.renderer.domElement);
    this.resize();
    this.setBodyColor(this.pendingColor || (color && color.body));
    this.start();
  }
};

let stageProduct = null;
let stageColor = null;
let zoomScale = 1;

function openZoom() {
  if (!stageProduct) return;
  const product = stageProduct;
  const color = stageColor;
  if (color && color.image) {
    els.zoomContent.innerHTML = `
      <img src="${color.image}" alt="${product.name} ${color.name}">
    `;
  } else {
    const currentSvg = els.stageVisual.querySelector(".product-svg");
    if (!currentSvg) return;
    const clone = currentSvg.cloneNode(true);
    clone.classList.add("zoom-svg");
    els.zoomContent.innerHTML = "";
    els.zoomContent.appendChild(clone);
  }
  zoomScale = 1;
  const zoomMedia = els.zoomContent.querySelector("img, .zoom-svg");
  if (zoomMedia) zoomMedia.style.transform = "scale(1)";
  els.zoomModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeZoom() {
  els.zoomModal.hidden = true;
  els.zoomContent.innerHTML = "";
  document.body.style.overflow = "";
}

async function initFlatModelViewer() {
  if (flatModelViewer.ready || flatModelViewer.loading) return;
  if (!window.FLAT_IRON_MODEL_JSON) {
    renderSvgStage(stageProduct, stageColor);
    return;
  }

  flatModelViewer.loading = true;
  try {
    const THREE = await import("three");
    const { OrbitControls } = await import("three/addons/controls/OrbitControls.js");
    const { GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js");
    flatModelViewer.THREE = THREE;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    flatModelViewer.renderer = renderer;

    const scene = new THREE.Scene();
    flatModelViewer.scene = scene;

    const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 10);
    flatModelViewer.camera = camera;

    scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 1.6));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    keyLight.position.set(1.2, 1.8, 1.4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1.0);
    fillLight.position.set(-1.4, 0.4, 0.8);
    scene.add(fillLight);

    const loader = new GLTFLoader();
    loader.parse(
      JSON.stringify(window.FLAT_IRON_MODEL_JSON),
      "",
      (gltf) => {
        const model = gltf.scene;
        flatModelViewer.model = model;
        scene.add(model);

        const materialByName = new Map();
        model.traverse((object) => {
          if (!object.isMesh) return;
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material && !materialByName.has(material.name)) {
              materialByName.set(material.name, material);
            }
          });
        });

        materialByName.forEach((material) => {
          if (material.name === "mat_5") {
            material.metalness = 0.85;
            material.roughness = 0.35;
          } else if (material.name === "mat_1" || material.name === "mat_2") {
            material.metalness = 0.45;
            material.roughness = 0.55;
          } else {
            material.metalness = 0.2;
            material.roughness = 0.5;
          }
          material.needsUpdate = true;
        });

        flatModelViewer.bodyMaterials = FLAT_IRON_BODY_MATERIALS
          .map((index) => materialByName.get(`mat_${index}`))
          .filter(Boolean);
        flatModelViewer.bodyMaterials.forEach((material) => {
          material.metalness = 0.2;
          material.roughness = 0.5;
          material.needsUpdate = true;
        });

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);

        const shadow = new THREE.Mesh(
          new THREE.CircleGeometry(maxDim * 0.72, 64),
          new THREE.MeshBasicMaterial({
            color: 0x0d0e10,
            transparent: true,
            opacity: 0.1,
            depthWrite: false
          })
        );
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.set(center.x, box.min.y - maxDim * 0.012, center.z);
        scene.add(shadow);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0;
        controls.target.copy(center);
        controls.minDistance = maxDim * 1.1;
        controls.maxDistance = maxDim * 6;
        flatModelViewer.controls = controls;

        const distance = maxDim * 2.25;
        camera.position.set(
          center.x + distance * 0.72,
          center.y + distance * 0.55,
          center.z + distance
        );
        camera.near = maxDim / 200;
        camera.far = maxDim * 30;
        camera.updateProjectionMatrix();
        controls.update();

        flatModelViewer.ready = true;
        flatModelViewer.loading = false;
        if (flatModelViewer.mount) {
          flatModelViewer.attach(flatModelViewer.mount, stageColor);
        }
      },
      undefined,
      (error) => {
        flatModelViewer.loading = false;
        console.error(error);
        renderSvgStage(stageProduct, stageColor);
      }
    );

    flatModelViewer.resizeHandler = () => flatModelViewer.resize();
    window.addEventListener("resize", flatModelViewer.resizeHandler);
  } catch (error) {
    flatModelViewer.loading = false;
    console.error(error);
    renderSvgStage(stageProduct, stageColor);
  }
}

function getProduct() {
  return PRODUCTS.find((product) => product.id === state.productId);
}

function getColor() {
  const product = getProduct();
  return product.colors[state.colorIndex];
}

function rgbFromHex(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `RGB(${r}, ${g}, ${b})`;
}

function productIdForSub(name) {
  if (name.includes("卷发")) return "curler";
  if (name.includes("直夹") || name.includes("直发板")) return "flat";
  if (name.includes("剃毛")) return "razor";
  if (name.includes("洁牙")) return "cleaner";
  if (name.includes("冲牙")) return "irrigator";
  if (name.includes("蓬松") || name.includes("气垫") || name.includes("按摩梳")) return "comb";
  return null;
}

function renderNav() {
  const activeSub = state.selectedSub || "";
  els.productList.innerHTML = CATEGORIES.map((category, categoryIndex) => {
    const open = state.openCategory === categoryIndex;
    return `
      <div class="category-group${open ? " open" : ""}">
        <button class="category-header" type="button" data-category-index="${categoryIndex}" aria-expanded="${open}">
          <span class="category-name">${category.name}</span>
          <svg class="category-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 6l4 4 4-4"></path>
          </svg>
        </button>
        <div class="category-subs">
          ${category.subs.map((sub) => `
            <button class="category-sub${sub === activeSub ? " active" : ""}" type="button" data-sub="${sub}">
              <span>${sub}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");

  els.productList.querySelectorAll(".category-header").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.categoryIndex);
      state.openCategory = state.openCategory === index ? -1 : index;
      renderNav();
    });
  });

  els.productList.querySelectorAll(".category-sub").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.sub;
      const productId = productIdForSub(name);
      state.selectedSub = name;
      state.selectedColors = [];
      if (productId) {
        state.productId = productId;
        state.colorIndex = 0;
        state.placeholder = null;
      } else {
        state.placeholder = name;
      }
      render();
    });
  });
}

function renderSwatches(product) {
  els.swatches.innerHTML = product.colors.map((color, index) => `
    <button
      class="swatch${index === state.colorIndex ? " active" : ""}"
      type="button"
      style="--swatch: ${color.chip}"
      data-index="${index}"
      aria-label="${color.name}"
      title="${color.name}"
    ></button>
  `).join("");

  els.swatches.querySelectorAll(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      state.colorIndex = Number(button.dataset.index);
      render();
    });
  });
}

function textColorFor(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 170 ? "#17181c" : "#ffffff";
}

function renderSelectedColors() {
  els.selectedColors.innerHTML = state.selectedColors.map((item, index) => {
    return `
      <span
        class="selected-chip"
        style="background: ${item.hex}"
        title="${item.name}"
        aria-label="${item.name}"
      >
        <button
          class="chip-remove"
          type="button"
          data-color-index="${index}"
          aria-label="移除${item.name}"
          title="移除${item.name}"
        >&times;</button>
      </span>
    `;
  }).join("");

  els.selectedColors.querySelectorAll(".chip-remove").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedColors.splice(Number(button.dataset.colorIndex), 1);
      renderSelectedColors();
    });
  });
}

function renderStage(product, color) {
  stageProduct = product;
  stageColor = color;
  els.stage.style.background = "";
  els.stageChip.style.background = color.chip;
  els.stageModel.textContent = color.pantone || product.model;
  els.stageColorName.textContent = color.name;
  els.stageRgb.textContent = color.rgb || rgbFromHex(color.body);
  els.stageHex.textContent = color.hexCode || color.body.toUpperCase();

  const hasImageColors = product.colors && product.colors.length > 0 && product.colors[0].image;
  if (product.id === "flat" || hasImageColors) {
    flatModelViewer.stop();
    renderImageStage(product, color);
    return;
  }

  flatModelViewer.stop();
  renderSvgStage(product, color);
}

function renderImageStage(product, color) {
  els.stageVisual.innerHTML = `
    <img
      class="product-image"
      src="${color.image}"
      alt="${product.name} ${color.name}"
      draggable="false"
    >
  `;
  const image = els.stageVisual.querySelector(".product-image");
  image.addEventListener("click", openZoom);
  ensureZoomHint();
}

function renderSvgStage(product, color) {
  if (!product || !color) return;
  const template = document.getElementById(product.templateId);
  const markup = template.innerHTML.replaceAll("ID-", `${product.id}-`);
  els.stageVisual.innerHTML = markup;
  ensureZoomHint();

  const svg = els.stageVisual.querySelector("svg");
  svg.style.setProperty("--body", color.body);
  svg.style.setProperty("--body-light", color.light);
  svg.style.setProperty("--body-deep", color.deep);
  svg.style.setProperty("--accent", color.accent);
  svg.style.setProperty("--metal", color.metal);
  svg.style.setProperty("--tint", color.tint);
}

function ensureZoomHint() {
  if (els.zoomHint && !els.stageVisual.contains(els.zoomHint)) {
    els.stageVisual.appendChild(els.zoomHint);
  }
}

function renderPlaceholderStage(name) {
  stageProduct = null;
  stageColor = null;
  els.stage.style.background = "";
  els.stageChip.style.background = "#e6e8ec";
  els.stageModel.textContent = name;
  els.stageColorName.textContent = "待补充";
  els.stageRgb.textContent = "—";
  els.stageHex.textContent = "—";
  els.stageVisual.innerHTML = `
    <div class="placeholder-visual" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="14" y="14" width="92" height="92" rx="12"></rect>
        <circle cx="46" cy="48" r="9"></circle>
        <path d="M26 86l18-18 14 14 12-12 24 24"></path>
      </svg>
    </div>
  `;
  ensureZoomHint();
  els.zoomHint.style.display = "none";
  els.stageSwatches.style.display = "none";
}

function render() {
  renderNav();
  if (state.placeholder) {
    renderPlaceholderStage(state.placeholder);
    return;
  }
  els.zoomHint.style.display = "";
  els.stageSwatches.style.display = "";
  const product = getProduct();
  const color = getColor();
  renderSwatches(product);
  renderSelectedColors();
  renderStage(product, color);
}

els.zoomHint.addEventListener("click", openZoom);
els.zoomClose.addEventListener("click", closeZoom);
els.zoomModal.addEventListener("click", (event) => {
  if (event.target === els.zoomModal) closeZoom();
});
els.zoomContent.addEventListener(
  "wheel",
  (event) => {
    if (els.zoomModal.hidden) return;
    event.preventDefault();
    const zoomMedia = els.zoomContent.querySelector("img, .zoom-svg");
    if (!zoomMedia) return;
    const step = event.deltaY > 0 ? -0.1 : 0.1;
    zoomScale = Math.min(4, Math.max(0.5, zoomScale + step));
    zoomMedia.style.transform = `scale(${zoomScale})`;
  },
  { passive: false }
);
els.zoomContent.addEventListener("click", (event) => {
  if (event.target.closest("img, .zoom-svg")) closeZoom();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.zoomModal.hidden) closeZoom();
});

els.submitForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const department = els.department.value.trim();
  const submitter = els.submitter.value.trim();
  if (!department || !submitter) return;

  const product = getProduct();
  const color = getColor();
  const selected = state.selectedColors.length
    ? state.selectedColors
    : (color ? [{ name: color.name, hex: color.hexCode || color.body, pantone: color.pantone || "" }] : []);
  const payload = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    department,
    submitter,
    category: state.selectedSub || (product && product.name) || "",
    product: product ? product.name : state.selectedSub || "",
    color: selected.map((item) => item.name).join("、"),
    pantone: selected.map((item) => item.pantone).join("、"),
    hex: selected.map((item) => item.hex).join("、"),
    timestamp: new Date().toISOString()
  };

  els.submitBtn.disabled = true;
  els.submitStatus.textContent = "提交中...";
  try {
    const supabase = window.SUPABASE_CONFIG || {
      url: "https://fwbqimtkdbthhtmtmjfn.supabase.co",
      anonKey: "sb_publishable_djicWMs8Pcd48_mktiXAFg_o-ARbihw"
    };
    const response = await fetch(`${supabase.url}/rest/v1/submissions`, {
      method: "POST",
      headers: {
        apikey: supabase.anonKey,
        Authorization: `Bearer ${supabase.anonKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(await response.text());
    try {
      await fetch(
        "https://fwbqimtkdbthhtmtmjfn.supabase.co/functions/v1/dingtalk-notify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: supabase.anonKey,
            Authorization: `Bearer ${supabase.anonKey}`
          },
          body: JSON.stringify(payload)
        }
      );
    } catch (notifyError) {
      console.error("DingTalk notify failed:", notifyError);
    }
    els.submitStatus.textContent = "提交成功";
    els.department.value = "";
    els.submitter.value = "";
  } catch (error) {
    els.submitStatus.textContent = `提交失败：${error.message || "未知错误"}`;
    console.error(error);
  } finally {
    els.submitBtn.disabled = false;
  }
});

els.selectColorBtn.addEventListener("click", () => {
  const product = getProduct();
  const color = getColor();
  if (!product || !color) return;
  const existing = state.selectedColors.findIndex((item) => item.name === color.name);
  if (existing >= 0) return;
  state.selectedColors.push({
    name: color.name,
    hex: color.hexCode || color.body,
    pantone: color.pantone || ""
  });
  renderSelectedColors();
});

render();

window.__flatModelViewer = flatModelViewer;
