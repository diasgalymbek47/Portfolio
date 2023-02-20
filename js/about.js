//Init AOS Animate library
document.addEventListener("DOMContentLoaded", (event) => {
  AOS.init({
    once: true,
  });
});

//BtnScroll UP
const scrollUpBtn = document.querySelector(".up");

window.addEventListener("scroll", () => {
  scrollUpBtn.classList.toggle("show", window.pageYOffset > 400);
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//NavbarLinks
const navbarBtn = document.querySelector(".navbar__burger");
const navbarLinks = document.querySelector(".navbar__links");

navbarBtn.addEventListener("click", () => {
  navbarBtn.classList.toggle("navbar__burger--active");
  navbarLinks.classList.toggle("navbar__links--active");

  navbarLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("navbar__link")) {
      navbarBtn.classList.remove("navbar__burger--active");
      navbarLinks.classList.remove("navbar__links--active");
    }
  });
});
