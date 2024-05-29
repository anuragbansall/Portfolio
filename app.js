function mouseFollower(){
let body = document.querySelector("body");
let mouseFollower = document.querySelector("#mouse-follower");
let mouseFollowerDefText = mouseFollower.innerText;
let allAnchor = document.querySelectorAll("a");
let allBtns = document.querySelectorAll("button");

body.addEventListener("mousemove", function(e){
    mouseFollower.style.left = `${e.clientX}px`
    mouseFollower.style.top = `${e.clientY}px`
})

allAnchor.forEach(function(a){
    a.addEventListener("mouseover", function(){
        mouseFollower.innerText = "Click";
    })
})


allAnchor.forEach(function(a){
    a.addEventListener("mouseleave", function(){
        mouseFollower.innerText = mouseFollowerDefText;
    })
})

allBtns.forEach(function(btn){
    btn.addEventListener("mouseover", function(){
        mouseFollower.innerHTML = "Click";
    })
})

allBtns.forEach(function(btn){
    btn.addEventListener("mouseleave", function(){
        mouseFollower.innerHTML = mouseFollowerDefText;
    })
})
}

function menuBar(){
    let sideBar = document.querySelector("#sidebar-container");
sideBar.style.transition = "1s";
let menuBtn = document.querySelector("#menu-btn");

let isMenu = false;
menuBtn.classList.add("ri-menu-3-line");

menuBtn.addEventListener("click", function(){
    isMenu = !isMenu;
    if(isMenu){
        sideBar.style.right = "0%";
        sideBar.style.top = "0%";
        menuBtn.classList.remove("ri-menu-3-line");
        menuBtn.classList.add("ri-close-fill");
    } else{
        // sideBar.style.right = "-100%";
        sideBar.style.top = "-100%";
        menuBtn.classList.remove("ri-close-fill");
        menuBtn.classList.add("ri-menu-3-line");
    }
})
}

// mouseFollower();
menuBar();