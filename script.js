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
    
    function locoMotive(){
        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main-content'),
            smooth: true
        });
    }
    locoMotive();