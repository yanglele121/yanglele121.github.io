var posts=["posts/c3280a6.html","posts/4a17b156.html","posts/4488a44e.html","posts/7adfc239.html","posts/5d2c3619.html","posts/0.html","posts/b048d48.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Youtube","link":"https://www.youtube.com/","avatar":"https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png","descr":"视频网站"},{"name":"Bilibili","link":"https://www.bilibili.com/","avatar":"https://files.codelife.cc/website/bilibili2.svg","descr":"全国最大同性交友网站"},{"name":"Weibo","link":"https://weibo.com/","avatar":"https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png","descr":"中国最大社交分享平台","siteshot":"https://bu.dusays.com/2023/10/29/653e4b10c1af5.png"},{"name":"抖音","link":"https://www.douyin.com/","avatar":"https://files.codelife.cc/icons/douyin.svg","descr":"记录美好生活"},{"name":"网易云音乐","link":"https://music.163.com/","avatar":"https://files.codelife.cc/icons/music163.svg","descr":"发现与分享音乐"},{"name":"奈菲影视","link":"https://www.nfmovies.com/","avatar":"https://files.codelife.cc/icons/nfmovies.svg","descr":"免费无广告的超清画质在线视频站","siteshot":"https://bu.dusays.com/2023/10/29/653e4b10c1af5.png"},{"name":"电影推荐","link":"https://www.mvcat.com/","avatar":"https://files.codelife.cc/icons/mvcat.svg","descr":"“电影树状图”","siteshot":"https://bu.dusays.com/2023/10/29/653e537d2ecd7.png"},{"name":"虎牙直博","link":"https://www.huya.com/","avatar":"https://files.codelife.cc/icons/huya.svg","descr":"技术驱动娱乐-弹幕式互动直播平台","siteshot":"https://bu.dusays.com/2023/10/29/653e53810d78f.png"},{"name":"米游社-原神","link":"https://www.miyoushe.com/ys/","avatar":"https://files.codelife.cc/icons/bbs.mihoyo.com.svg","descr":"米哈游miHoYo旗下游戏玩家社区","siteshot":"https://bu.dusays.com/2023/10/29/653e537f012f3.png"},{"name":"原神","link":"https://ys.mihoyo.com/?utm_source=adbdpz&from_channel=adbdpz#/","avatar":"https://files.codelife.cc/icons/5f7185c1aa121b0c2ac6a05e.png?x-oss-process=image/resize,limit_0,m_fill,w_50,h_50/quality,q_92/format,webp","descr":"原神，启动！","siteshot":"https://bu.dusays.com/2023/10/29/653e53814ee80.png"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Github","link":"https://github.com/","avatar":"https://bu.dusays.com/2023/10/29/653e580668a75.png","descr":"全球最大代码托管平台"},{"name":"MDN","link":"https://developer.mozilla.org/zh-CN/docs/Learn","avatar":"https://bu.dusays.com/2023/10/29/653e5859c3866.png","descr":"学习 Web 开发"},{"name":"React","link":"https://zh-hans.reactjs.org/","avatar":"https://files.codelife.cc/website/react.svg","descr":"用于构建 Web 和原生交互界面的库"},{"name":"Java学习","link":"https://mrjokersince1997.github.io/My-Notes/#/","avatar":"https://files.codelife.cc/website/mrjokersince-java.svg","descr":"Java学习笔记"},{"name":"JavaGuide","link":"https://javaguide.cn/","avatar":"https://javaguide.cn/logo.svg","descr":"涵盖大部分 Java 程序员所需要掌握的核心知识"},{"name":"小林Coding","link":"https://xiaolincoding.com/","avatar":"https://xiaolincoding.com/logo.png","descr":"小林 x 图解计算机基础"},{"name":"力扣","link":"https://leetcode.cn/","avatar":"https://files.codelife.cc/icons/leetcode.svg","descr":"全球极客挚爱的技术成长平台"},{"name":"七牛云","link":"https://s.qiniu.com/naaI7f","avatar":"https://files.codelife.cc/website/qiniu.svg","descr":"云存储平台"},{"name":"AcWing","link":"https://acwing.cn/","avatar":"https://bu.dusays.com/2023/10/29/653e58a95e1e0.png","descr":"Y总出品"},{"name":"Vue2","link":"https://cn.vuejs.org/","avatar":"https://files.codelife.cc/website/vuejs.svg","descr":"Vue2中文文档"}];
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