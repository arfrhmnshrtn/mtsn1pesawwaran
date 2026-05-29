const humbergerMenu = document.getElementById("humberger-menu");
const navbarMenu = document.querySelector(".nav-links");


const navbarContainer = document.querySelector(".navbar-container");


window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbarContainer.classList.add("sticky");
  } else {
    navbarContainer.classList.remove("sticky");
  }
});

humbergerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  const icon = humbererMenu.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-times");
});

// Dropdown toggle logic for mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const li = dropdown.querySelector("li");
  
  // Create toggle button
  const toggleBtn = document.createElement("span");
  toggleBtn.classList.add("dropdown-toggle");
  toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
  
  if (li) {
    li.appendChild(toggleBtn);
  }

  // Add click event
  toggleBtn.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });
});
