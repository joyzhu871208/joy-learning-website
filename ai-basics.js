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

const chapters = [
  {
    title: "先学会正确思考",
    description: "先建立正确的判断方式，少走弯路，也不轻易被 AI 的答案带着跑。",
    lessons: [
      ["01", "如何制定正确的任务目标", "先想清楚要解决什么，再让 AI 开始工作。", "核心必看", "core", "https://www.bilibili.com/video/BV1iYPWzXEg7/"],
      ["02", "AI 幻觉三步对策", "识别错误、验证信息，并得到更可靠的答案。", "核心必看", "core", "https://www.bilibili.com/video/BV14XzWBkEak/"],
      ["03", "高级定制", "理解更深层的定制方法，部分内容具有时效性。", "选看", "optional", "https://www.bilibili.com/video/BV1PNkLBWEBW/"],
    ],
  },
  {
    title: "学会表达需求",
    description: "不追求复杂提示词，先学会把目标、条件和期待说清楚。",
    lessons: [
      ["04", "提示词避坑指南", "避开常见表达误区，让 AI 更懂你的意思。", "核心必看", "core", "https://www.bilibili.com/video/BV1fHBfBdEuY/"],
      ["05", "提示词公式 TCREI", "用一套清晰结构组织需求与背景信息。", "核心必看", "core", "https://www.bilibili.com/video/BV1k6Z6B8E99/"],
      ["06", "懒惰提示词", "用更省力的方式，让 AI 帮你完善提示词。", "实用技巧", "practice", "https://www.bilibili.com/video/BV1CBAzz6E25/"],
    ],
  },
  {
    title: "认识你的第一个网页",
    description: "不要求你成为程序员，只需要学会看懂、修改和发布 AI 为你生成的网页。",
    lessons: [
      ["07", "HTML 是什么", "认识网页的基本结构，理解自己正在创作什么。", "核心必看", "core", "https://www.bilibili.com/video/BV1VG5N66ESg/"],
      ["08", "HTML 怎么学、怎么修改代码", "学会找到代码中的内容，并做出自己的修改。", "跟着练习", "practice", "https://www.bilibili.com/video/BV1QA5k63E5W/"],
      ["09", "HTML 网页怎么上线", "把电脑里的网页发布出去，让别人也能打开。", "跟着练习", "practice", "https://www.bilibili.com/video/BV1TaG76bEx5/"],
    ],
  },
];

const routeStops = [...document.querySelectorAll(".route-stop")];
const lessonList = document.querySelector(".lesson-list");
const chapterNumber = document.querySelector(".chapter-number");
const chapterTitle = document.querySelector(".chapter-summary h3");
const chapterDescription = document.querySelector(".chapter-summary p");
const routeLine = document.querySelector(".route-line");
const chapterCount = document.querySelector(".chapter-controls span b");
const previousButton = document.querySelector(".chapter-prev");
const nextButton = document.querySelector(".chapter-next");
let activeChapter = 0;

const renderChapter = (index) => {
  activeChapter = Math.max(0, Math.min(index, chapters.length - 1));
  const chapter = chapters[activeChapter];

  routeStops.forEach((stop, stopIndex) => {
    const isActive = stopIndex === activeChapter;
    stop.classList.toggle("active", isActive);
    stop.setAttribute("aria-selected", String(isActive));
  });

  routeLine.style.setProperty("--route-progress", `${activeChapter * 50}%`);
  chapterNumber.textContent = `CHAPTER ${String(activeChapter + 1).padStart(2, "0")}`;
  chapterTitle.textContent = chapter.title;
  chapterDescription.textContent = chapter.description;
  chapterCount.textContent = String(activeChapter + 1).padStart(2, "0");
  previousButton.disabled = activeChapter === 0;
  nextButton.disabled = activeChapter === chapters.length - 1;

  lessonList.innerHTML = chapter.lessons.map(([number, title, description, tag, type, link]) => `
    <article class="lesson-row">
      <span class="lesson-index">${number}</span>
      <div class="lesson-copy">
        <h4>${title}</h4>
        <p>${description}</p>
      </div>
      <span class="lesson-tag ${type}">${tag}</span>
      <a class="lesson-link" href="${link}" target="_blank" rel="noreferrer" aria-label="在哔哩哔哩观看：${title}">
        <i data-lucide="arrow-up-right"></i>
      </a>
    </article>
  `).join("");

  lucide.createIcons();
};

routeStops.forEach((stop, index) => stop.addEventListener("click", () => renderChapter(index)));
previousButton?.addEventListener("click", () => renderChapter(activeChapter - 1));
nextButton?.addEventListener("click", () => renderChapter(activeChapter + 1));

renderChapter(0);
