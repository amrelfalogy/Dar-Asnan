'use strict';
//  add Event on elements
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}
// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);
//  header & back top btn show when scroll down to 100px

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);


// pop up 
// const viewBtn = document.querySelector("#view-modal"),
// popup = document.querySelector(".popup"),
// close = popup.querySelector(".close"),
// field = popup.querySelector(".field"),
// input = field.querySelector("input"),
// copy = field.querySelector("button");
// viewBtn.onclick = ()=>{
//   popup.classList.toggle("show");
// }
// close.onclick = ()=>{
//   viewBtn.click();
// }
// copy.onclick = ()=>{
//   input.select(); //select input value
//   if(document.execCommand("copy")){ //if the selected text copy
//     field.classList.add("active");
//     copy.innerText = "Copied";
//     setTimeout(()=>{
//       window.getSelection().removeAllRanges(); //remove selection from document
//       field.classList.remove("active");
//       copy.innerText = "Copy";
//     }, 3000);
//   }
// }

// ========================================
//  how to add media queries in JS
// ========================================
function myFunction(widthSize) {
  if (widthSize.matches) {
      // If media query matches
      const swiper = new Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },

          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  } else {
      const swiper = new Swiper(".swiper", {
          slidesPerView: 2,
          spaceBetween: 30,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
      });
  }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);

//accordion 
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");
        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})
function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}