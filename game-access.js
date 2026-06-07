const ACCESS_CODE="JOYAI2026";
const accessFrame=document.querySelector(".game-frame[data-src],.player-frame[data-src]");
const accessContainer=document.querySelector(".game-frame-shell,.player-stage");
const accessFullscreen=document.querySelector(".fullscreen-button,.player-fullscreen");
const accessKey="joyzhu-game-access";

const unlockGame=()=>{
  if(!accessFrame)return;
  accessFrame.src=accessFrame.dataset.src;
  accessFrame.removeAttribute("data-src");
  accessContainer?.classList.add("access-granted");
  accessContainer?.querySelector(".game-access-gate")?.remove();
  if(accessFullscreen)accessFullscreen.disabled=false;
};

if(accessFrame&&accessContainer){
  if(accessFullscreen)accessFullscreen.disabled=true;
  if(sessionStorage.getItem(accessKey)==="granted"){
    unlockGame();
  }else{
    const gate=document.createElement("div");
    gate.className="game-access-gate";
    gate.innerHTML=`
      <div class="game-access-card">
        <span class="access-lock"><i data-lucide="key-round"></i></span>
        <p>关注后领取试玩码</p>
        <h3>先在小红书找到 Joyzhu</h3>
        <span class="access-description">关注“小红书教师AI小助手joyzhu”，在任意视频评论区留言，即可领取试玩码。</span>
        <a href="https://www.xiaohongshu.com/user/profile/67f36760000000000d008455" target="_blank" rel="noreferrer">前往小红书领取 <i data-lucide="arrow-up-right"></i></a>
        <form class="access-form">
          <label for="access-code">输入试玩码</label>
          <div><input id="access-code" type="text" autocomplete="off" placeholder="请输入领取到的试玩码" /><button type="submit">开始试玩</button></div>
          <small aria-live="polite"></small>
        </form>
      </div>`;
    accessContainer.appendChild(gate);
    gate.querySelector(".access-form")?.addEventListener("submit",event=>{
      event.preventDefault();
      const input=gate.querySelector("input");
      const message=gate.querySelector("small");
      if(input.value.trim().toUpperCase()===ACCESS_CODE){
        sessionStorage.setItem(accessKey,"granted");
        unlockGame();
      }else{
        message.textContent="试玩码不正确，请检查后重新输入。";
        input.focus();
      }
    });
    lucide.createIcons();
  }
}
