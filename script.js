    function gsapBannerAnime(){
        let tl = gsap.timeline();
        tl.from(".profile-image",{
            scale: 0,
            opacity:0,
            duration:1,
        })
        
        tl.from(".profile-about h2",{
            // scale: 0,
            opacity:0,
            x:1000,
            duration: 0.5,
        })
        
        tl.from(".profile-about h3",{
            // scale: 0,
            opacity:0,
            duration: 0.5,
        })
    }
    
    function locoMotive(){
        gsap.registerPlugin(ScrollTrigger);

        const locoScroll = new LocomotiveScroll({
          el: document.querySelector("#main-content"),
          smooth: true,
        
          // for tablet smooth
          tablet: { smooth: true },
        
          // for mobile
          smartphone: { smooth: true }
        });
        locoScroll.on("scroll", ScrollTrigger.update);
        
        ScrollTrigger.scrollerProxy("#main-content", {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          }
        
          // follwoing line is not required to work pinning on touch screen
        
          /* pinType: document.querySelector("#main-content").style.transform
            ? "transform"
            : "fixed"*/
        });
        
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        
        ScrollTrigger.refresh();
        

        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main-content'),
            smooth: true
        });
    }

    function loadingPageAnimeEnd(){
        let loadingPage = document.querySelector("#loading-page")
        gsap.to("#landing-page",{
            y:"-100%",
            duration:1,  
        })
    }

    function loadingPageAnime(){
        let counter = document.querySelector("#landing-page h2 .counter");
        let count = 0;
        let interval = setInterval(function(){
            if(count == 100){
                clearInterval(interval);
                loadingPageAnimeEnd();
            }
            else{
            count++;
            counter.innerText = count;
            }
        },30)
    }

    function gsapLoadingPageH1Anime(){
        let tl = gsap.timeline();

        tl.from("#landing-page .line h1",{
            y:"100%",
            duration:2,
            stagger:0.2
        })
    }

    function projectsCardAnime(){
        gsap.from("#projects-container .card",{
            scale:0,
            scrollTrigger:{
                trigger:"#projects-container .card",
                scroller:"#main-content",
                // markers:true,
                // start:"top 70%",
                end:"end 30%",
                scrub:1
            }
        })
    }

    // locoMotive();
    gsapLoadingPageH1Anime()
    loadingPageAnime();
    // gsapBannerAnime();
    projectsCardAnime();