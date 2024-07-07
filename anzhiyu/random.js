var posts=["2024/07/07/hello-world/","2024/07/07/startup/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };