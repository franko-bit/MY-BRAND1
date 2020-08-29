const menu = document.querySelector(".menu");
const menuLink = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menu.addEventListener("click", () => {
  menuLink.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
