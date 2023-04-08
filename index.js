//import {data} from './test.js';

let galleryList = document.getElementsByClassName("gallery-item");

for(const e of galleryList){

    e.addEventListener('mouseover', () => {
        e.style.backgroundColor = 'red'
    })
    e.addEventListener('mouseout', () => {
        e.style.backgroundColor = 'gray'
    })

}

let navBar = document.querySelector("nav");
let navItems = document.getElementsByClassName("nav-item");
let darkModeBtn = document.getElementById("color-mode-btn");
let isDarkMode = false;


darkModeBtn.addEventListener("click", () => {

    if(isDarkMode){
        darkModeBtn.src = "images/icon_moon.png";
        navBar.style.backgroundColor = "var(--main-accent)";
        isDarkMode = false;

    }

    else{
        darkModeBtn.src = "images/icon_sun.png";
        navBar.style.backgroundColor = "black";
        isDarkMode = true;
    }

    for(let i = 0; i < navItems.length; i++){
        if(isDarkMode){
            navItems[i].style.color = "white";
        }
        else{
            navItems[i].style.color = "white";
        }
    }
})


// REMOVES DRAGGABLE FROM ALL IMAGES
const imgArray = document.querySelectorAll('img');

for(const e of imgArray){
    e.setAttribute('draggable', false);
    e.style.userSelect = "none";
}


//UTIL

function print(toPrint){
    console.log(toPrint);
}

