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
        let progressBar = document.querySelector("#landing-page h2 .line");
        let count = 0;
        let interval = setInterval(function(){
            if(count == 100){
                clearInterval(interval);
                loadingPageAnimeEnd();
            }
            else{
            count++;
            counter.innerText = count;
            progressBar.style.width = `${count}%`
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

    function aboutContentTextAnime(){
        let h3 = document.querySelectorAll("#about-content h3");
        let h3Content = "";      
        h3.forEach(function(h3){
            let allCharsArr = h3.innerText.split("")  
            allCharsArr.forEach(function(el){
                h3Content += `<span>${el}</span>`
            })
            h3.innerHTML = h3Content
        })
        

        gsap.from("#about-content h3 span",{
            // color:"#222127",
            opacity:0.3,
            stagger:0.2,
            scrollTrigger:{
                trigger:"#about-content",
                scroller:"#main-content",
                // markers:true,
                start:"top 30%",
                end:"bottom 60%",
                // pin:true,
                scrub:2,
            }
        })
    }

    function skillsCardsAnime(){
        gsap.from("#skills-content #skills-cards-container .card",{
            x:"-100%",
            scrollTrigger:{
                trigger:"#skills-content #skills-cards-container",
                scroller:"#main-content",
                // markers:true,
                start:"top 80%",
                end:"top 35%",
                scrub:1,
            }
        })
    }

    document.addEventListener("mousemove", function(e) {
        gsap.to("#mouse-follower", { 
            x: e.x,
            y: e.y,
        });
    });
    

    // locoMotive();
    gsapLoadingPageH1Anime()
    loadingPageAnime();
    // gsapBannerAnime();
    aboutContentTextAnime();
    projectsCardAnime();
    skillsCardsAnime();