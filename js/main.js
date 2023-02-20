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

//Navbar scroll
const navbarMenu = document.querySelector(".navbar__menu");
const getID = (link) => link.getAttribute("href").replace("#", "");

navbarMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("navbar__link")) {
    e.preventDefault();

    window.scrollTo({
      top: document.getElementById(getID(e.target)).offsetTop,
      behavior: "smooth",
    });
  }
});

//Gmail copy
const gmail = document.querySelector("#gmail");

gmail.addEventListener("click", () => {
  const text = gmail.textContent;

  gmail.classList.add("contact__link--copy");
  setTimeout(() => {
    gmail.classList.remove("contact__link--copy");
  }, 2000);

  navigator.clipboard.writeText(text);
});

//Modals
document.querySelector("#portfolio").addEventListener("click", () => {
  showModal(document.querySelector(".portfolio"));
});

document.querySelector(".about__img").addEventListener("click", () => {
  showModal(document.querySelector(".fullscreen-my-img"));
});

document.querySelector(".restaurant").addEventListener("click", (e) => {
  if (e.target.classList.contains("projects__card-img")) {
    showModal(document.querySelector(".project1"));
  }

  if (e.target.classList.contains("button")) {
    showModal(document.querySelector(".project1"));
  }
});

document.querySelector(".school").addEventListener("click", (e) => {
  if (e.target.classList.contains("projects__card-img")) {
    showModal(document.querySelector(".project2"));
  }

  if (e.target.classList.contains("button")) {
    showModal(document.querySelector(".project2"));
  }
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

//Modal function
function showModal(modal) {
  const modalWrap = modal.querySelector(".modal__wrap");
  const closeBtn = modal.querySelector(".modal__close");

  modal.classList.add("show");
  document.querySelector("body").classList.add("disable");

  modalWrap.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("show");
    document.querySelector("body").classList.remove("disable");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.querySelector("body").classList.remove("disable");
  });
}
