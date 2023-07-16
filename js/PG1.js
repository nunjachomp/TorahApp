const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const sideButtonToggle = document.querySelector(".side-button");
const sideButtonMenu = document.querySelector(".side-menu");

dropdownToggle.addEventListener("click", function () {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

sideButtonToggle.addEventListener("click", function () {
  if (sideButtonMenu.style.display === "block") {
    sideButtonMenu.style.display = "none";
  } else {
    sideButtonMenu.style.display = "block";
  }
});
//PG2---------------------------