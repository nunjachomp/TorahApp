var dropdownToggle = document.querySelector(".dropdown-toggle");
var dropdownMenu = document.querySelector(".dropdown-menu");
var sideButtonToggle = document.querySelector(".side-button");
var sideButtonMenu = document.querySelector(".side-menu");

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
