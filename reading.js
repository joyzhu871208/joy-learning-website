const menuButton=document.querySelector(".menu-button");const nav=document.querySelector(".site-nav");const resourceMenu=document.querySelector(".resource-menu");const resourceTrigger=document.querySelector(".resource-trigger");
menuButton?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open))});resourceTrigger?.addEventListener("click",event=>{event.stopPropagation();const open=resourceMenu.classList.toggle("open");resourceTrigger.setAttribute("aria-expanded",String(open))});document.addEventListener("click",event=>{if(!resourceMenu?.contains(event.target)){resourceMenu?.classList.remove("open");resourceTrigger?.setAttribute("aria-expanded","false")}});

const books=[
  {title:"《基层女性》",question:"如何理解那些离我们很近，却常被忽略的人生？",theme:"理解自己",image:"assets/reading/grassroots-women.jpg",link:"https://www.bilibili.com/video/BV1pQ4y1j7v3/"},
  {title:"女性传记书单",question:"当人生不被定义，我们还能成为怎样的人？",theme:"理解自己",image:"assets/reading/women-biographies.jpg",link:"https://www.bilibili.com/video/BV1EK421i7a1/"},
  {title:"《醒来的女性》",question:"真正的醒来，是从哪一刻开始的？",theme:"理解自己",image:"assets/reading/awakening-woman.jpg",link:"https://www.bilibili.com/video/BV1Hx4y187No/"},
  {title:"《我一生的故事》",question:"人生怎样从仅仅活着，变成真正活过？",theme:"理解自己",image:"assets/reading/eleanor.jpg",link:"https://www.bilibili.com/video/BV1yT421i7Je/"},
  {title:"《如果你生而为女人》",question:"我们如何认识自己的身份，也理解他人的选择？",theme:"理解自己",image:"assets/reading/born-woman.jpg",link:"https://www.bilibili.com/video/BV1PriTe1EnK/"},
  {title:"《小春日和》",question:"慢一点生活，会让我们重新看见什么？",theme:"理解生活",image:"assets/reading/little-spring.jpg",link:"https://www.bilibili.com/video/BV1uV41197pV/"},
  {title:"《东京八平米》",question:"当拥有得很少，我们还能如何认真生活？",theme:"理解生活",image:"assets/reading/tokyo-eight.jpg",link:"https://www.bilibili.com/video/BV1Ai421k7iU/"},
  {title:"松浦弥太郎书单",question:"平凡日子里，藏着多少未被看见的美好？",theme:"理解生活",image:"assets/reading/matsuura.jpg",link:"https://www.bilibili.com/video/BV1C6421Z71N/"},
  {title:"《奇特的一生》",question:"记录时间，真的能让我们更自由吗？",theme:"建立行动",image:"assets/reading/strange-life.jpg",link:"https://www.bilibili.com/video/BV1Xk4y1U7R5/"},
  {title:"《掌控习惯》",question:"改变人生，是否可以从一个微小动作开始？",theme:"建立行动",image:"assets/reading/atomic-habits.jpg",link:"https://www.bilibili.com/video/BV1aU411o7mT/"},
  {title:"《战争中没有女性》",question:"宏大的历史，遗漏了多少普通人的声音？",theme:"看见世界",image:"assets/reading/war-woman.jpg",link:"https://www.bilibili.com/video/BV141421t7uN/"},
  {title:"《爱丽丝梦游仙境》立体书",question:"长大以后，我们还需不需要想象力？",theme:"看见世界",image:"assets/reading/alice.jpg",link:"https://www.bilibili.com/video/BV1Gc411k7Ru/"}
];
const themes=["理解自己","理解生活","建立行动","看见世界"];let activeTheme=0;let page=0;
const tabs=document.querySelector(".reading-tabs"),shelf=document.querySelector(".book-shelf"),list=document.querySelector(".reading-list");
const renderTabs=()=>{tabs.innerHTML=themes.map((theme,index)=>`<button class="reading-tab ${index===activeTheme?"active":""}" type="button" role="tab" aria-selected="${index===activeTheme}">${theme}</button>`).join("");[...tabs.children].forEach((button,index)=>button.addEventListener("click",()=>{activeTheme=index;page=0;renderTabs();renderShelf()}))};
const renderShelf=()=>{const selected=books.filter(book=>book.theme===themes[activeTheme]);const visible=[...selected.slice(page),...selected.slice(0,page)].slice(0,3);shelf.innerHTML=visible.map(book=>`<a class="shelf-book" href="${book.link}" target="_blank" rel="noreferrer"><div class="shelf-cover"><img src="${book.image}" alt="${book.title}视频封面" /></div><div class="shelf-copy"><span>${book.theme}</span><h3>${book.title}</h3><p>${book.question}</p><strong>观看阅读分享</strong></div></a>`).join("")};
const move=direction=>{const length=books.filter(book=>book.theme===themes[activeTheme]).length;page=(page+direction+length)%length;renderShelf()};
document.querySelector(".shelf-prev").addEventListener("click",()=>move(-1));document.querySelector(".shelf-next").addEventListener("click",()=>move(1));
list.innerHTML=books.map((book,index)=>`<article class="reading-row"><span class="reading-index">${String(index+1).padStart(2,"0")}</span><div><h3>${book.title}</h3><p>${book.question}</p></div><span class="reading-theme">${book.theme}</span><a class="reading-link" href="${book.link}" target="_blank" rel="noreferrer" aria-label="观看：${book.title}"><i data-lucide="arrow-up-right"></i></a></article>`).join("");
renderTabs();renderShelf();lucide.createIcons();
