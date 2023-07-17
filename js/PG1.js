const calendarDropdownToggle = document.querySelector(".calendar-button");

const dropdownMenu = document.querySelector(".dropdown-menu");

const doNotWorkToggle = document.querySelector(".do-not-work-button");
const sideButtonMenu = document.querySelector(".side-menu");

calendarDropdownToggle.addEventListener("click", function () {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

doNotWorkToggle.addEventListener("click", function () {
  if (sideButtonMenu.style.display === "block") {
    sideButtonMenu.style.display = "none";
  } else {
    sideButtonMenu.style.display = "block";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var subMenuItems = document.querySelector('.sub-menu-items');
  subMenuItems.style.display = 'none';
});
//PG2---------------------------


