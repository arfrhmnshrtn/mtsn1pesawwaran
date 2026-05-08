const humbererMenu = document.getElementById("humberger-menu");
const navbarMenu = document.querySelector(".nav-links");

const navbarContainer = document.querySelector(".navbar-container");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbarContainer.classList.add("sticky");
  } else {
    navbarContainer.classList.remove("sticky");
  }
});

humbererMenu.addEventListener("click", function () {
  console.log("clicked");
  navbarMenu.classList.toggle("active");
});
