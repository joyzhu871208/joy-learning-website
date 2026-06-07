const games={
  witch:{title:"女巫的毒药",src:"assets/games/witch/index.html"},
  flip:{title:"生词翻翻乐",src:"assets/games/word-flip/index.html"},
  missing:{title:"What's Missing",src:"assets/games/whats-missing/index.html"},
  message:{title:"小学生温暖留言板",src:"assets/games/message-board/index.html"},
};
const params=new URLSearchParams(window.location.search);
const game=games[params.get("game")]||games.witch;
const heading=document.querySelector(".player-heading h1");
const frame=document.querySelector(".player-frame");
const stage=document.querySelector(".player-stage");
if(heading) heading.textContent=game.title;
if(frame){frame.dataset.src=game.src;frame.title=`${game.title}免费试玩`}
document.title=`${game.title}免费试玩 | Joyzhu`;
document.querySelector(".player-fullscreen")?.addEventListener("click",()=>stage?.requestFullscreen?.());
lucide.createIcons();
