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


const grabShabbatPage = document.querySelector(".shabbatpage");
const showShabbatButton = document.querySelector(".showShabbat");
showShabbatButton.addEventListener("click", showShabbatPage)

function showShabbatPage () {
  if (grabShabbatPage.style.display !== "block") {
    grabShabbatPage.style.display = "block";
  } else {
    grabShabbatPage.style.display = "none";
  }
};


const grabFatherMotherPage = document.querySelector(".fathermotherpage");
const showFatherMotherButton = document.querySelector(".showFatherMother");
showFatherMotherButton.addEventListener("click", showFatherMotherPage)

function showFatherMotherPage () {
  if (grabFatherMotherPage.style.display !== "block") {
    grabFatherMotherPage.style.display = "block";
  } else {
    grabFatherMotherPage.style.display = "none";
  }
};














//PG2---------------------------

function showCard() {
  const card = document.getElementById('card9');
  card.style.display = 'block';
}

function hideCard() {
  const card = document.getElementById('card9');
  card.style.display = 'none';
}