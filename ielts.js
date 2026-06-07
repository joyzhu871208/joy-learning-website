const menuButton=document.querySelector(".menu-button");const nav=document.querySelector(".site-nav");const resourceMenu=document.querySelector(".resource-menu");const resourceTrigger=document.querySelector(".resource-trigger");
menuButton?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});resourceTrigger?.addEventListener("click",event=>{event.stopPropagation();const open=resourceMenu.classList.toggle("open");resourceTrigger.setAttribute("aria-expanded",String(open))});document.addEventListener("click",event=>{if(!resourceMenu?.contains(event.target)){resourceMenu?.classList.remove("open");resourceTrigger?.setAttribute("aria-expanded","false")}});

const paths=[
  {number:"01",title:"理解学习方法",label:"先找到方向",description:"理解输入与输出、规划与复盘，让努力不再只是反复开始。",items:["英语输入与输出","制定可执行计划","建立稳定日课"]},
  {number:"02",title:"建立 Notion 系统",label:"让积累可见",description:"用一个清楚的学习桌面，连接计划、词汇、笔记与练习记录。",items:["规划每周任务","积累个人词库","跟踪练习进度"]},
  {number:"03",title:"进入专项训练",label:"带着系统练习",description:"从雅思写作开始，把每一次练习变成下一次提升的依据。",items:["写作图表范文","听读错题复盘","专项能力训练"]}
];let activePath=0;
const pathSwitcher=document.querySelector(".path-switcher"),pathPanel=document.querySelector(".path-panel");
const renderPath=()=>{pathSwitcher.innerHTML=paths.map((path,index)=>`<button class="path-button ${index===activePath?"active":""}" type="button" role="tab" aria-selected="${index===activePath}"><b>${path.number}</b><span>${path.title}</span><i data-lucide="arrow-right"></i></button>`).join("");const path=paths[activePath];pathPanel.innerHTML=`<div class="path-number">${path.number}</div><div class="path-copy"><span>${path.label}</span><h3>${path.title}</h3><p>${path.description}</p></div><div class="path-items">${path.items.map((item,index)=>`<span><b>${String(index+1).padStart(2,"0")}</b>${item}</span>`).join("")}</div>`;[...pathSwitcher.children].forEach((button,index)=>button.addEventListener("click",()=>{activePath=index;renderPath()}));lucide.createIcons()};

const notionModules=[
  {title:"月度学习计划",english:"Monthly Plan",short:"MONTH",description:"把目标拆成每周与每天真正能完成的任务。",image:"assets/ielts/monthly-plan.png",link:"https://www.bilibili.com/video/BV1wW4y1j7Vt/"},
  {title:"每周学习计划",english:"Weekly Plan",short:"WEEK",description:"保存每周计划，回看自己如何一点点向前走。",image:"assets/ielts/practice.png",link:"https://www.bilibili.com/video/BV1iM411k7CA/"},
  {title:"雅思课程笔记",english:"IELTS Course Notes",short:"NOTES",description:"让课程内容、重点与复习任务留在同一个地方。",image:"assets/ielts/writing.png",link:"https://www.bilibili.com/video/BV1kD4y1b7Jr/"},
  {title:"个人词汇库",english:"Vocabulary Bank",short:"WORDS",description:"把真正遇到的词，慢慢变成自己的表达。",image:"assets/ielts/vocabulary.png",link:"https://www.bilibili.com/video/BV1ZG4y1Q7eq/"},
  {title:"输入输出记录",english:"Input & Output Log",short:"INPUT",description:"连接阅读、听力输入与口语、写作输出。",image:"assets/ielts/reading.png",link:"https://www.bilibili.com/video/BV13D4y147eF/"},
  {title:"听说读写进度",english:"Skills Progress",short:"TRACK",description:"看见薄弱环节，让每一次练习都有下一步。",image:"assets/ielts/listening.png",link:"https://www.bilibili.com/video/BV1wW4y1j7Vt/"}
];let activeModule=0;const board=document.querySelector(".notion-board"),detail=document.querySelector(".notion-detail");
const renderNotion=()=>{board.innerHTML=notionModules.map((item,index)=>`<button class="notion-card ${index===activeModule?"active":""}" type="button" aria-pressed="${index===activeModule}"><span class="mini-notion">N</span><em>${item.short}</em><strong>${item.title}</strong><small>${item.description}</small></button>`).join("");const item=notionModules[activeModule];detail.innerHTML=`<img src="${item.image}" alt="${item.title}封面" /><h3>${item.english}</h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">观看方法教程 <i data-lucide="play"></i></a>`;[...board.children].forEach((button,index)=>button.addEventListener("click",()=>{activeModule=index;renderNotion()}));lucide.createIcons()};

const charts=[
  ["折线图","趋势如何变化","assets/ielts/writing-covers/line-chart.png","assets/ielts/resources/line_graph_sample.pdf","https://www.youtube.com/watch?v=W-KR7UouKxA"],
  ["柱状图","数据如何比较","assets/ielts/writing-covers/bar-chart.png","assets/ielts/resources/bar_sample.pdf","https://www.youtube.com/watch?v=St_azh6lm5k"],
  ["饼图","比例如何分布","assets/ielts/writing-covers/pie-chart.png","assets/ielts/resources/pie_chart_sample.pdf","https://www.youtube.com/watch?v=-UhDcPRGbRA"],
  ["地图题","地点如何改变","assets/ielts/writing-covers/map-diagram.png","assets/ielts/resources/map_sample.pdf","https://www.youtube.com/watch?v=EipEvH8Ch0I"],
  ["流程图：糖","过程如何发生","assets/ielts/writing-covers/sugar-process.png","assets/ielts/resources/sugar_sample.pdf","https://www.youtube.com/watch?v=of1tdGi0E3I"],
  ["流程图：乙醇","步骤如何连接","assets/ielts/writing-covers/ethanol-process.png","assets/ielts/resources/ethanol_sample.pdf","https://www.youtube.com/watch?v=JylGS3RxgIE"]
];
document.querySelector(".chart-grid").innerHTML=charts.map(([title,question,cover,pdf,video],index)=>`<article class="chart-card"><div class="chart-visual chart-cover"><img src="${cover}" alt="${title}雅思写作封面" loading="lazy"></div><div class="chart-copy"><span>TASK 1 · 0${index+1}</span><h3>${title}</h3><p>${question}</p><div><a href="${pdf}" target="_blank" rel="noopener noreferrer">查看范文</a><a href="${video}" target="_blank" rel="noopener noreferrer">观看讲解</a></div></div></article>`).join("");
renderPath();renderNotion();lucide.createIcons();
