const calendarDropdownToggle = document.querySelector(".calendar-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

calendarDropdownToggle.addEventListener("click", function () {
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});


const doNotWorkDropdownToggle = document.querySelector(".do-not-work-button");
const sideButtonMenu = document.querySelector(".side-menu");

doNotWorkDropdownToggle.addEventListener("click", function () {
  if (sideButtonMenu.style.display === "block") {
    sideButtonMenu.style.display = "none";
  } else {
    sideButtonMenu.style.display = "block";
  }
});


// const grabShabbatPage = document.querySelector(".shabbatpage");
// const showShabbatButton = document.querySelector(".showShabbat");
// showShabbatButton.addEventListener("click", showShabbatPage)

// function showShabbatPage () {
//   if (grabShabbatPage.style.display !== "block") {
//     grabShabbatPage.style.display = "block";
//   } else {
//     grabShabbatPage.style.display = "none";
//   }
// };


// const grabFatherMotherPage = document.querySelector(".fathermotherpage");
// const showFatherMotherButton = document.querySelector(".showFatherMother");
// showFatherMotherButton.addEventListener("click", showFatherMotherPage)

// function showFatherMotherPage () {
//   if (grabFatherMotherPage.style.display !== "block") {
//     grabFatherMotherPage.style.display = "block";
//   } else {
//     grabFatherMotherPage.style.display = "none";
//   }
// };

// const grabMapsPage = document.querySelector(".mapResults");
// const showMapsButton = document.querySelector(".btnLocateCitiesOfRefuge");
// showMapsButton.addEventListener("click", showMapsPage)

// function showMapsPage () {
//   if (grabMapsPage.style.display !== "block") {
//     grabMapsPage.style.display = "block";
//   } else {
//     grabMapsPage.style.display = "none";
//   }
// };
