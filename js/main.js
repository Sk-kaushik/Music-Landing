let burger = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");
let link = document.querySelector(".acc_link");

burger.addEventListener("click", () => {
  burger.classList.toggle("rotate");
  navLinks.classList.toggle("open");
  link.classList.toggle("open");
});
