'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}



/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

  
});

//video section close video
let closebtn=document.querySelector(".fa-times");
closebtn.onclick= () => {
  video.classList.remove("show-video");
  myvideo.pause();
};

//rating
let starContainer = document.querySelectorAll(".star-container");
const submitButton = document.querySelector("#submit");
const message = document.querySelector("#message");
const submitSection = document.querySelector("#submit-section");

//Events For touch and mouse
let events = {
  mouse: {
    over: "click",
  },
  touch: {
    over: "touchstart",
  },
};

let deviceType = "";
//Detect touch device
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent (it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

isTouchDevice();

starContainer.forEach((element, index) => {
  element.addEventListener(events[deviceType].over, () => {
    submitButton.disabled = false;
    if (element.classList.contains("inactive")) {
      //Fill Star
      ratingUpdate(0, index, true);
    } else {
      //Regular stars (remove color)
      ratingUpdate(index, starContainer.length - 1, false);
    }
  });
});

const ratingUpdate = (start, end, active) => {
  for (let i = start; i <= end; i++) {
    if (active) {
      starContainer[i].classList.add("active");
      starContainer[i].classList.remove("inactive");
      starContainer[i].firstElementChild.className = "fa-star fa-solid";
    } else {
      starContainer[i].classList.remove("active");
      starContainer[i].classList.add("inactive");
      starContainer[i].firstElementChild.className = "fa-star fa-regular";
    }
  }
  //Message
  let activeElements = document.getElementsByClassName("active");
  if (activeElements.length > 0) {
    switch (activeElements.length) {
      case 1:
        message.innerText = "Terrible";
        break;
      case 2:
        message.innerText = "Bad";
        break;
      case 3:
        message.innerText = "Satisfied";
        break;
      case 4:
        message.innerText = "Good";
        break;
      case 5:
        message.innerText = "Excellent";
        break;
    }
  } else {
    message.innerText = "";
  }
};

submitButton.addEventListener("click", () => {
  submitSection.classList.remove("hide");
  submitSection.classList.add("show");
  submitButton.disabled = true;
});
window.onload = () => {
  submitButton.disabled = true;
  submitSection.classList.add("hide");
};