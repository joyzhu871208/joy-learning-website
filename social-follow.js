const pageMain=document.querySelector("main");
if(pageMain&&!document.querySelector(".social-follow")){
  const section=document.createElement("section");
  section.className="social-follow";
  section.innerHTML=`
    <div class="social-follow-copy">
      <p><span>✦</span> 保持联系</p>
      <h2>关注 Joy</h2>
      <span>新游戏、新工具和新教程，会持续分享在内容频道。</span>
    </div>
    <div class="social-follow-actions">
      <a class="social-xhs" href="https://www.xiaohongshu.com/user/profile/67f36760000000000d008455" target="_blank" rel="noopener noreferrer">
        <i data-lucide="book-heart"></i><span><small>主要更新平台</small><strong>小红书</strong></span>
      </a>
      <a class="social-douyin" href="https://www.douyin.com/user/MS4wLjABAAAANiU54Bo_3uAA0PgYrjDQscwD1mGQBLiH5W8q7YkwciI?from_tab_name=main" target="_blank" rel="noopener noreferrer">
        <i data-lucide="music-2"></i><span><small>短视频同步更新</small><strong>抖音</strong></span>
      </a>
      <a class="social-bili" href="https://space.bilibili.com/3546894768802257" target="_blank" rel="noopener noreferrer">
        <i data-lucide="tv"></i><span><small>观看完整教程</small><strong>B 站</strong></span>
      </a>
    </div>`;
  pageMain.appendChild(section);
  lucide.createIcons();
}
