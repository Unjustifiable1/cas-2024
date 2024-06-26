'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

// const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
// const navbar = document.querySelector("[data-navbar]");

// navToggleBtn.addEventListener("click", function () {

//   elemToggleFunc(navToggleBtn);
//   elemToggleFunc(navbar);
//   elemToggleFunc(document.body);

// });



/**
 * skills toggle
 */

// const toggleBtnBox = document.querySelector("[data-toggle-box]");
// const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
// const skillsBox = document.querySelector("[data-skills-box]");

// for (let i = 0; i < toggleBtns.length; i++) {
//   toggleBtns[i].addEventListener("click", function () {

//     elemToggleFunc(toggleBtnBox);
//     for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
//     elemToggleFunc(skillsBox);

//   });
// }



/**
 * dark & light theme toggle
 */

// const themeToggleBtn = document.querySelector("[data-theme-btn]");

// themeToggleBtn.addEventListener("click", function () {

//   elemToggleFunc(themeToggleBtn);

//   if (themeToggleBtn.classList.contains("active")) {
//     document.body.classList.remove("dark_theme");
//     document.body.classList.add("light_theme");

//     localStorage.setItem("theme", "light_theme");
//   } else {
//     document.body.classList.add("dark_theme");
//     document.body.classList.remove("light_theme");

//     localStorage.setItem("theme", "dark_theme");
//   }

// });

/**
 * check & apply last time selected theme from localStorage
 */

// if (localStorage.getItem("theme") === "light_theme") {
//   themeToggleBtn.classList.add("active");
//   document.body.classList.remove("dark_theme");
//   document.body.classList.add("light_theme");
// } else {
//   themeToggleBtn.classList.remove("active");
//   document.body.classList.remove("light_theme");
//   document.body.classList.add("dark_theme");
// }



// form submission handler - Home Page Contact Section Form

window.addEventListener("load", function () {
  const form1 = document.getElementById('form-home-cas1');
  form1.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form1);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        alert("Success! I'll contact you soon. Thank you!");
      })
  });
});




// TESTIMONIALS

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("testimonial-slides");
  let dots = document.getElementsByClassName("test-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activated", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activated";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}