var posts=["2024/07/07/第一篇博文/","2024/07/07/startup/","2024/07/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };