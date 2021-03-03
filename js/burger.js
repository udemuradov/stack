const burger = document.getElementById("burger");
const leftSidebar = document.getElementById("leftSidebar");

burger.addEventListener("click", () => {
  leftSidebar.classList.toggle("show");
});


const navbarSearchBtn = document.getElementById("navbarSearchBtn");
const navbarSearchDiv = document.getElementById("navbarSearchDiv");

navbarSearchBtn.addEventListener("click", () => {
  navbarSearchDiv.classList.toggle("show");
});
