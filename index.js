(function(){
    const elevator = document.querySelector(".xtx-elevator")
    const entry = document.querySelector(".xtx_entry")
    window.addEventListener("scroll",function(){
      const n = document.documentElement.scrollTop
      if(n >= entry.offsetTop){
        elevator.style.opacity = 1
      }else {
        elevator.style.opacity = 0
        
      }
    })
  
    const backTop = document.querySelector("#backTop")
    backTop.addEventListener("click", function(){
      document.documentElement.scrollTop = 0
    })})();
    
    (function(){
     const list = document.querySelector(".xtx-elevator-list")
     list.addEventListener("click",function(e){
      if(e.target.tagName === "A" && e.target.dataset.name){
        const old = document.querySelector(".xtx-elevator-list .active")
        if(old) {old.classList.remove("active")}
        e.target.classList.add("active")
      
        const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
        document.documentElement.scrollTop = top
      }
     })
      
     window.addEventListener("scroll",function(){
      const old = document.querySelector(".xtx-elevator-list .active")
        if(old) {old.classList.remove("active")}
        const news = document.querySelector('.xtx_goods_new')
        const popular = document.querySelector('.xtx_goods_popular')
        const brand = document.querySelector('.xtx_goods_brand')
        const topic = document.querySelector('.xtx_goods_topic')
        const n = document.documentElement.scrollTop
        if(n>=news.offsetTop && n < popular.offsetTop){
          document.querySelector("[data-name=new]").classList.add("active")
        }else if (n>=popular.offsetTop && n <brand.offsetTop){
          document.querySelector("[data-name=popular]").classList.add("active")
        }else if (n>=brand.offsetTop && n<topic.offsetTop){
          document.querySelector("[data-name=brand]").classList.add("active")
        }else if (n>=topic.offsetTop){
          document.querySelector("[data-name=topic]").classList.add("active")
        }
     })
  
    })()