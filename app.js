const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const resourceMenu = document.querySelector(".resource-menu");
const resourceTrigger = document.querySelector(".resource-trigger");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

resourceTrigger?.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = resourceMenu.classList.toggle("open");
  resourceTrigger.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!resourceMenu?.contains(event.target)) {
    resourceMenu?.classList.remove("open");
    resourceTrigger?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".hub-entrance").forEach((entrance) => {
  entrance.addEventListener("pointermove", (event) => {
    const art = entrance.querySelector(".entrance-art");
    const bounds = entrance.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    art.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg)`;
  });

  entrance.addEventListener("pointerleave", () => {
    const art = entrance.querySelector(".entrance-art");
    art.style.transform = "";
  });
});

const orbitStations = [...document.querySelectorAll(".orbit-station")];
const orbitScene = document.querySelector(".orbit-scene");
const orbitCount = document.querySelector(".orbit-count b");
const orbitLabel = document.querySelector(".orbit-label");
const orbitTitle = document.querySelector(".orbit-detail h3");
const orbitDescription = document.querySelector(".orbit-description");
const orbitAction = document.querySelector(".orbit-action");
const orbitDots = [...document.querySelectorAll(".orbit-controls span i")];
const orbitCourses = [
  ["Joy 最推荐的学习起点", "AI 基础课", "它可能不是最热闹的系列，却能让之后的每一次学习和创作事半功倍。", "静下心，从第一课开始", "ai-basics.html"],
  ["大家最喜欢的实操系列", "互动网页制作", "看完整制作过程，带走真正有用的秘诀，把教学想法变成可玩的网页。", "看 Joy 怎么做", "web-making.html"],
  ["真实测评与横向对比", "Joy 的 AI 工具箱", "新工具很多。我替你认真试用、比较，再告诉你它最适合解决什么问题。", "看看最近测评", "ai-toolbox.html"],
  ["Joy 最喜欢的软件", "Canva 视觉教室", "从课件、海报到教学素材，一起把想法表达得更清楚、更好看。", "进入 Canva 系列", "canva-studio.html"],
];
let activeOrbit = 0;
let orbitWheelLocked = false;

const renderOrbit = (nextIndex) => {
  activeOrbit = (nextIndex + orbitStations.length) % orbitStations.length;
  const positions = [
    { x: 0, y: 185, scale: 1.08, opacity: 1 },
    { x: 245, y: -35, scale: .78, opacity: .66 },
    { x: 0, y: -190, scale: .68, opacity: .46 },
    { x: -245, y: -35, scale: .78, opacity: .66 },
  ];

  orbitStations.forEach((station, index) => {
    const slot = (index - activeOrbit + orbitStations.length) % orbitStations.length;
    const position = positions[slot];
    station.style.setProperty("--station-x", `${position.x}px`);
    station.style.setProperty("--station-y", `${position.y}px`);
    station.style.setProperty("--station-scale", position.scale);
    station.style.setProperty("--station-opacity", position.opacity);
    station.classList.toggle("active", index === activeOrbit);
  });

  const [label, title, description, action, href] = orbitCourses[activeOrbit];
  orbitCount.textContent = String(activeOrbit + 1).padStart(2, "0");
  orbitLabel.textContent = label;
  orbitTitle.textContent = title;
  orbitDescription.textContent = description;
  orbitAction.childNodes[0].textContent = `${action} `;
  orbitAction.href = href;
  orbitDots.forEach((dot, index) => dot.classList.toggle("active", index === activeOrbit));
};

orbitStations.forEach((station, index) => station.addEventListener("click", () => renderOrbit(index)));
document.querySelector(".orbit-prev")?.addEventListener("click", () => renderOrbit(activeOrbit - 1));
document.querySelector(".orbit-next")?.addEventListener("click", () => renderOrbit(activeOrbit + 1));
orbitScene?.addEventListener("wheel", (event) => {
  if (orbitWheelLocked) return;
  orbitWheelLocked = true;
  renderOrbit(activeOrbit + (event.deltaY > 0 ? 1 : -1));
  setTimeout(() => { orbitWheelLocked = false; }, 550);
}, { passive: true });
if (orbitStations.length) renderOrbit(0);

lucide.createIcons();
