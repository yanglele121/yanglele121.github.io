var posts=["posts/c3280a6.html","posts/4a17b156.html","posts/4488a44e.html","posts/7adfc239.html","posts/5d2c3619.html","posts/0.html","posts/b048d48.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://cdn.jsdelivr.net/gh/yanglele121/AssetsRepo@main/202311071924004.png","descr":"分享设计与技术生活","siteshot":"https://cdn.jsdelivr.net/gh/yanglele121/AssetsRepo@main/202311071926108.png","color":"vip","tag":"技术"},{"name":"Tianli","link":"https://tianli-blog.club/","avatar":"https://cdn.jsdelivr.net/gh/yanglele121/AssetsRepo@main/202311071933126.png","descr":"自知之明是最可贵的知识！","siteshot":"https://cdn.jsdelivr.net/gh/yanglele121/AssetsRepo@main/202311071935490.png","color":"vip","tag":"技术"},{"name":"杜老师说","link":"https://dusays.com/","avatar":"https://cdn.dusays.com/avatar.png","descr":"师者，传道，授业，解惑！","recommend":true},{"name":"枫叶","link":"https://blog.aqcoder.cn/","avatar":"https://blog.aqcoder.cn/img/avatar.png","descr":"分享知识，认识世界"},{"name":"Rootlex","link":"https://blog.nalex.top/","avatar":"https://blog.nalex.top/avatar.webp","descr":"寒蝉黎明之时，便是重生之日"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };