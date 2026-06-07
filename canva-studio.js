const menuButton=document.querySelector(".menu-button");const nav=document.querySelector(".site-nav");const resourceMenu=document.querySelector(".resource-menu");const resourceTrigger=document.querySelector(".resource-trigger");
menuButton?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});resourceTrigger?.addEventListener("click",event=>{event.stopPropagation();const open=resourceMenu.classList.toggle("open");resourceTrigger.setAttribute("aria-expanded",String(open))});document.addEventListener("click",event=>{if(!resourceMenu?.contains(event.target)){resourceMenu?.classList.remove("open");resourceTrigger?.setAttribute("aria-expanded","false")}});

const tutorials=[
  ["课件神器：魔法快捷键","用几个快捷键，点燃课堂演示中的小魔法。","课件","https://www.bilibili.com/video/BV17Z8YzmELv/","B站"],
  ["聚光灯效果：公开课必备","让学生的注意力跟着你的课堂重点移动。","课件","https://www.bilibili.com/video/BV1ZNa8zVEYn/","B站"],
  ["静态图片变动态 PPT 目录","把喜欢的 Canva 模板快速变成动态目录页。","课件","https://www.bilibili.com/video/BV1jWb6zcEhK/","B站"],
  ["教师作弊页面","一键直达课件、教案、故事、白板与视频资源。","资源","https://www.bilibili.com/video/BV1iMa8z3E6u/","B站"],
  ["PPT 一键转视频","一分钟把演示文稿变成课堂总结或速览视频。","音视频","https://www.bilibili.com/video/BV1iMa8z3ErZ/","B站"],
  ["自制贴纸自由","把 Canva 模板做成课堂规则与奖励贴纸。","素材","https://www.bilibili.com/video/BV1bAv6BjEKz/","B站"],
  ["利用海量模板制作动态目录","详细演示如何把任意模板变成炫酷 PPT 目录。","课件","https://www.bilibili.com/video/BV1dVvaBiE2m/","B站"],
  ["英语素材一键翻译多种语言","快速翻译 Canva 海量教学素材，只需最后把关。","效率","https://www.bilibili.com/video/BV154iYB6EDk/","B站"],
  ["Canva 官方 Design School","打开官方教程宝库，找到适合教师的课程。","学习","https://www.bilibili.com/video/BV1nEv6BKERm/","B站"],
  ["内置配色秘籍","导入外部色板，一键替换设计中的整体配色。","设计","https://www.bilibili.com/video/BV1EQvaBrEKw/","B站"],
  ["AI 配音","把课本文本一键转成多语言音频并放入课件。","音视频","https://www.bilibili.com/video/BV1L4iYB6ELL/","B站"],
  ["一键制作 HTML 插入 PPT","直接在 Canva 演示文稿中加入互动网页。","进阶","https://www.xiaohongshu.com/explore/6905d91c0000000004011c15","小红书"],
  ["微课录屏的两种方式","让录屏、课件与素材留在一个软件里完成。","音视频","https://www.bilibili.com/video/BV1VMw7zZEyN/","B站"],
  ["一键生成 50 张海报","用批量设计功能快速制作系列海报。","效率","https://www.bilibili.com/video/BV1gDV7zJEPF/","B站"]
];
const list=document.querySelector(".canva-list");
list.innerHTML=tutorials.map(([title,description,tag,link,platform],index)=>`<article class="canva-row"><span class="canva-index">${String(index+1).padStart(2,"0")}</span><div class="canva-tutorial"><h3>${title}</h3><p>${description}</p></div><span class="canva-tag">${tag} · ${platform}</span><a class="canva-link" href="${link}" target="_blank" rel="noreferrer" aria-label="观看教程：${title}"><i data-lucide="arrow-up-right"></i></a></article>`).join("");
lucide.createIcons();
