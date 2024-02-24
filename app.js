let body = document.querySelector("body");
let mouseFollower = document.querySelector("#mouse-follower");
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
        mouseFollower.innerText = ""
    })
})

allBtns.forEach(function(btn){
    btn.addEventListener("mouseover", function(){
        mouseFollower.innerHTML = "Click"
    })
})

allBtns.forEach(function(btn){
    btn.addEventListener("mouseleave", function(){
        mouseFollower.innerHTML = ""
    })
})