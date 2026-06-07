const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const resourceMenu = document.querySelector(".resource-menu");
const resourceTrigger = document.querySelector(".resource-trigger");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
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

const workshops = [
  {
    title: "课堂游戏工坊",
    description: "把知识练习变成学生愿意参与的挑战。",
    projects: [
      ["历史盲盒游戏模板", "五分钟做出课堂盲盒游戏", "入门", "历史", "https://www.bilibili.com/video/BV1WHJ3ziEPM/"],
      ["数学口算对战游戏", "让口算练习变成即时对战", "入门", "数学", "https://www.bilibili.com/video/BV1vcj4zsEY5/"],
      ["历史对战答题游戏", "用闯关机制完成知识复习", "进阶", "历史", "https://www.bilibili.com/video/BV1KGT9z8EX5/"],
      ["一键自制点名系统", "制作属于自己班级的点名工具", "入门", "全学科", "https://www.xiaohongshu.com/explore/68c4d197000000001c03e2b2"],
    ],
  },
  {
    title: "互动课件工坊",
    description: "让课件不只是展示，还能回应课堂中的每一次点击。",
    projects: [
      ["互动 PPT 解读文件", "把静态文件变成可探索的互动内容", "进阶", "全学科", "https://www.bilibili.com/video/BV1UWzFB5EQi/"],
      ["Gemini 三年级英语互动课件", "跟着案例制作低年级英语课件", "入门", "英语", "https://www.xiaohongshu.com/explore/694bebe4000000001e035da3"],
      ["WPS + PhET 插入 PPT", "把互动实验自然放进课堂演示", "进阶", "科学", "https://www.xiaohongshu.com/explore/68cfa25c000000001301dec1"],
    ],
  },
  {
    title: "试卷与学情分析",
    description: "从生成试题到读懂结果，让 AI 帮你完成重复但重要的工作。",
    projects: [
      ["班级考情分析神器", "快速整理班级成绩与薄弱点", "进阶", "全学科", "https://www.bilibili.com/video/BV1MMT9zAE1Z/"],
      ["Gemini 和 DeepSeek 生试卷", "对比两种工具的出题流程", "入门", "全学科", "https://www.bilibili.com/video/BV1k5BiBAEDx/"],
      ["Gemini 多学科试卷案例", "语文、历史、政治、数学案例", "案例", "多学科", "https://www.bilibili.com/video/BV1k5BiBAEDx/"],
      ["STEAM 公式乱码解决教程", "解决复杂公式生成中的常见问题", "技巧", "STEAM", "https://www.bilibili.com/video/BV1xMBiBMEKo/"],
    ],
  },
  {
    title: "技巧与工具",
    description: "解决制作过程中的具体问题，也找到更适合自己的 AI 工具。",
    projects: [
      ["图生代码提示词", "让 AI 更准确地理解参考画面", "技巧", "通用", "https://www.bilibili.com/video/BV1xWvqBNEHt/"],
      ["互动网页工具横向测评", "豆包、可画、DeepSeek、Gemini 对比", "测评", "通用", "https://www.bilibili.com/video/BV1t8vCBsE98/"],
      ["如何修改已有游戏代码", "把现成作品改成自己的版本", "入门", "通用", "https://www.bilibili.com/video/BV1jqHZzfEPo/"],
      ["豆包 Vibe Coding 手把手教程", "从想法开始完成第一个应用", "入门", "通用", "https://www.bilibili.com/video/BV1sEQPB7EzX/"],
    ],
  }
];

const workshopTabs = [...document.querySelectorAll(".workshop-tab")];
const projectList = document.querySelector(".project-list");
const workshopNumber = document.querySelector(".project-panel-heading span");
const workshopTitle = document.querySelector(".project-panel-heading h3");
const workshopDescription = document.querySelector(".project-panel-heading p");

const renderWorkshop = (index) => {
  const workshop = workshops[index];
  workshopTabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  workshopNumber.textContent = `WORKSHOP ${String(index + 1).padStart(2, "0")}`;
  workshopTitle.textContent = workshop.title;
  workshopDescription.textContent = workshop.description;
  projectList.innerHTML = workshop.projects.map(([title, description, level, subject, url], projectIndex) => `
    <article class="project-row">
      <span class="project-index">${String(projectIndex + 1).padStart(2, "0")}</span>
      <div class="project-copy"><h4>${title}</h4><p>${description}</p></div>
      <span class="project-meta">${level}</span>
      <span class="project-meta subject">${subject}</span>
      <a class="project-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="查看教程：${title}"><i data-lucide="arrow-up-right"></i></a>
    </article>
  `).join("");
  lucide.createIcons();
};

workshopTabs.forEach((tab, index) => tab.addEventListener("click", () => renderWorkshop(index)));
renderWorkshop(0);
