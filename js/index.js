const humbererMenu = document.getElementById("humberger-menu");
const navbarMenu = document.querySelector(".nav-links");

humbererMenu.addEventListener("click", function () {
  console.log("clicked");
  navbarMenu.classList.toggle("active");
});
