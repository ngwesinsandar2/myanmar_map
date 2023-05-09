let currentPlace = document.querySelector(".current");
let allPath = document.querySelectorAll(".map path");

allPath.forEach(x => {
    x.addEventListener("mouseover",_=>{
        currentPlace.innerText = x.getAttribute("title");
    });
    
    x.addEventListener("mouseout",_=>{
        currentPlace.innerText = "";
    });
});