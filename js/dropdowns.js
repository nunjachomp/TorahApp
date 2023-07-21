 class GetVersesAndDisplayThem {
  constructor(containerId, address, photoAPI, wikiAPI, wikiTitle, wikiSummary) {
    this.containerId = containerId;
    this.address = address;
    this.photoAPI = photoAPI;
    this.wikiAPI = wikiAPI;
    this.wikiTitle = wikiTitle;
    this.wikiSummary = wikiSummary;
    this.data = null;
  }

  async getVerses() {
    try {
      const response = await fetch("https://649e6352245f077f3e9c56d0.mockapi.io/api/v1/calculation");
      const data = await response.json();
      this.data = data;
      this.getSpecificVerse();
    } catch (error) {
      console.error(error);
    }
  }

  async getSpecificVerse() {
    let container = document.querySelector(`.${this.containerId}`);
    try {
      container.innerHTML = eval(`this.data${this.address}`);
    } catch (error) {
      console.error(error);
    }
  }

  async getAndPostWikiImage() {
    try {
      document.querySelector(".display-API-Image").innerHTML = "";
      const response = await fetch(this.photoAPI);
      const imgElement = document.createElement("img");
      imgElement.src = response.url;
      if (this.photoAPI) {
      document.querySelector(".display-API-Image").appendChild(imgElement);
      }
    } catch (error) {
      console.error(error);
    }
  }

   async getWikiTitleAndSummary() {
    try {
      document.querySelector(".API-Display-Title").innerHTML = "";
      document.querySelector(".API-Display").innerHTML = "";
      let response = await fetch(this.wikiAPI);
      let data = await response.json();
      displayApiTitle.innerHTML = eval(`data${this.wikiTitle}`);
      displayAPI.innerHTML = eval(`data${this.wikiSummary}`);
    } catch (error) {
      console.error(error);
    }
  }

  removeAPIElements() {
    const imageElement = document.querySelector(".display-API-Image img");
    const titleElement = document.querySelector(".API-Display-Title");
    const summaryElement = document.querySelector(".API-Display");
    const displayElement = document.querySelector(`.${this.containerId}`);

    if (imageElement) {
      imageElement.remove();
    }
    if (titleElement) {
      titleElement.innerHTML = "";
    }
    if (summaryElement) {
      summaryElement.innerHTML = "";
    }
    if (displayElement) {
      displayElement.innerHTML = "";
    }
  }
}

const displayResults = document.querySelector(".displayResults");
const displayApiImage = document.querySelector(".display-API-Image");
const displayApiTitle = document.querySelector(".API-Display-Title");
const displayAPI = document.querySelector(".API-Display");

async function Clicker(button, page) {
  let wikiClickCount = 0;
  button.addEventListener("click", () => {
    wikiClickCount++;
    if (wikiClickCount === 1) {
      page.getVerses();
      page.getAndPostWikiImage();
      page.getWikiTitleAndSummary();
    } else if (wikiClickCount === 2) {
      page.removeAPIElements();
      wikiClickCount = 0;
    }
  });
}

async function ClickerDropdowns(button, page) {
  button.addEventListener("click", () => {
      if (
      page.getVerses(),
      page.getAndPostWikiImage(),
      page.getWikiTitleAndSummary())
    {
      page.removeAPIElements()}
    })
  };


//----------------INSTANCE-T0------------------------
const loveGodButton = document.querySelector(".section1");
const loveGodPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[0]['LoveGod-MAIN'][1]['loveGodText']",
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tel_Rehov_Exhibition_090316_06.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929",
  "['query']['pages']['2180929']['title']",
  "['query']['pages']['2180929']['extract']"
);

Clicker(loveGodButton, loveGodPage);

//----------------INSTANCE-T1------------------------
const loveNeighborButton = document.querySelector(".section2");
const loveNeighborPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[1]['LoveNeighbor-MAIN'][0]['loveNeighborText']",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shabbat_Candles.jpg/300px-Shabbat_Candles.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=600&pageids=28809",
  "['query']['pages']['28809']['title']",
  "['query']['pages']['28809']['extract']"
);

Clicker(loveNeighborButton, loveNeighborPage);

//----------------INSTANCE-1------------------------
const noOthergodsButton = document.querySelector(".btnNoOthergodsButton");
const noOthergodsPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[2]['NoOthergods'][0]['noOthergodsText']",
);

ClickerDropdowns(noOthergodsButton, noOthergodsPage);

//----------------INSTANCE-1.1------------------------
const tabernacleButton = document.querySelector(".btnTabernacle");
const tabernaclePage = new GetVersesAndDisplayThem(
  null,
  null,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Stiftshuette_Modell_Timnapark.jpg/300px-Stiftshuette_Modell_Timnapark.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=565&pageids=82935",
  "['query']['pages']['82935']['title']", 
  "['query']['pages']['82935']['extract']"
);

Clicker(tabernacleButton, tabernaclePage);

//----------------INSTANCE-2------------------------
const noAsherimButton = document.querySelector(".btnNoAsherim");
const noAsherimPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[3]['NoIdols'][2]['noIdolsText']",
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tel_Rehov_Exhibition_090316_06.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929",
  "['query']['pages']['2180929']['title']", 
  "['query']['pages']['2180929']['extract']"
);

Clicker(noAsherimButton, noAsherimPage);

//----------------INSTANCE-2.1------------------------
const noIdolsButton = document.querySelector(".btnNoIdols");
const noIdolsPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[3]['NoIdols'][1]['noIdolsText']",
);

ClickerDropdowns(noIdolsButton, noIdolsPage);


//----------------INSTANCE-3------------------------
const noNameVainButton = document.querySelector(".btnNoNameVain");
const noNameVainPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[4]['NoNameVain'][1]['noVainText']",
);

ClickerDropdowns(noNameVainButton, noNameVainPage);

//----------------INSTANCE-4------------------------
const shabbatButton = document.querySelector(".btnShabbat");
const shabbatPage = new GetVersesAndDisplayThem(
  null,
  "",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shabbat_Candles.jpg/300px-Shabbat_Candles.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=600&pageids=28809",
  "['query']['pages']['28809']['title']",
  "['query']['pages']['28809']['extract']"
);

Clicker(shabbatButton, shabbatPage);

//----------------INSTANCE-4.0------------------------
const roshHaShanahButton = document.querySelector(".btnRoshHaShanah");
const roshHaShanahPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[6]['Shabbat-Calendar'][0]['calendarText']",
);

ClickerDropdowns(roshHaShanahButton, roshHaShanahPage);

//----------------INSTANCE-4.1------------------------
const pesachButton = document.querySelector(".btnPesach");
const pesachPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[9]['Shabbat-Holydays-Pesach'][0]['pesachText']",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pessach_Pesach_Pascha_Judentum_Ungesaeuert_Seder_datafox.jpg/200px-Pessach_Pesach_Pascha_Judentum_Ungesaeuert_Seder_datafox.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=350&pageids=23059",
  "['query']['pages']['23059']['title']", 
  "['query']['pages']['23059']['extract']"
);

ClickerDropdowns(pesachButton, pesachPage);

//----------------INSTANCE-4.2------------------------
const matzotButton = document.querySelector(".btnMatzot");
const matzotPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[10]['Shabbat-Holydays-Matzot'][0]['matzotText']",
);

ClickerDropdowns(matzotButton, matzotPage);

//----------------INSTANCE-4.3------------------------
const bikurimButton = document.querySelector(".btnBikurim");
const bikurimPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[11]['Shabbat-Holydays-BikurimHarvest'][0]['bikurimHarvestText']",
);

ClickerDropdowns(bikurimButton, bikurimPage);

//----------------INSTANCE-4.4------------------------
const shavuotButton = document.querySelector(".btnShavuot");
const shavuotPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[12]['Shabbat-Holydays-Shavuot'][0]['shavuotText']",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Moritz_Daniel_Oppenheim_-_Shavuot_%28Pentecost%29_%28Das_Wochen-_oder_Pfingst-Fest%29_-_Google_Art_Project.jpg/300px-Moritz_Daniel_Oppenheim_-_Shavuot_%28Pentecost%29_%28Das_Wochen-_oder_Pfingst-Fest%29_-_Google_Art_Project.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=565&pageids=228264",
  "['query']['pages']['228264']['title']", 
  "['query']['pages']['228264']['extract']"
);

ClickerDropdowns(shavuotButton, shavuotPage);

//----------------INSTANCE-4.5------------------------
const yomtruahButton = document.querySelector(".btnYomTruah");
const yomtruahPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[13]['Shabbat-Holydays-YomTruah'][0]['yomTruahText']",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Rosh_Hashana.jpeg/200px-Rosh_Hashana.jpeg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=615&pageids=19596764",
  "['query']['pages']['19596764']['title']", 
  "['query']['pages']['19596764']['extract']"
);

ClickerDropdowns(yomtruahButton, yomtruahPage);

//----------------INSTANCE-4.6------------------------
const yomKippurButton = document.querySelector(".btnYomKippur");
const yomKippurPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[14]['Shabbat-Holydays-YomKippur'][0]['yomKippurText']",
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Maurycy_Gottlieb_-_Jews_Praying_in_the_Synagogue_on_Yom_Kippur.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=440&pageids=34382",
  "['query']['pages']['34382']['title']", 
  "['query']['pages']['34382']['extract']"
);

ClickerDropdowns(yomKippurButton, yomKippurPage);

//----------------INSTANCE-4.7------------------------
const sukkotButton = document.querySelector(".btnSukkot");
const sukkotPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[15]['Shabbat-Holydays-Sukkot'][0]['sukkotText']",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Sukkoth_-_IZE10160.jpg/300px-Sukkoth_-_IZE10160.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=467&pageids=28622",
  "['query']['pages']['28622']['title']", 
  "['query']['pages']['28622']['extract']"
);

ClickerDropdowns(sukkotButton, sukkotPage);

//----------------INSTANCE-4.7-T1------------------------
const noOthersWorkButton = document.querySelector(".btnNoOthersWork");
const noOthersWorkPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[5]['Shabbat'][2]['shabbatText']",
);

ClickerDropdowns(noOthersWorkButton, noOthersWorkPage);

//----------------INSTANCE-4.7-T2------------------------
const noCookingButton = document.querySelector(".btnNoCooking");
const noCookingPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[5]['Shabbat'][4]['shabbatText']",
);

ClickerDropdowns(noCookingButton, noCookingPage);

//----------------INSTANCE-4.7-T3------------------------
const noFireButton = document.querySelector(".btnNoFire");
const noFirePage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[5]['Shabbat'][6]['shabbatText']",
);

ClickerDropdowns(noFireButton, noFirePage);

//----------------INSTANCE-5------------------------
const fatherMotherButton = document.querySelector(".btnFatherMother");
const fatherMotherPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[16]['FatherMother'][1]['fatherMotherText']",
);

ClickerDropdowns(fatherMotherButton, fatherMotherPage);

//----------------INSTANCE-5.1------------------------
const oldManButton = document.querySelector(".btnOldMan");
const oldManPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[16]['FatherMother'][2]['fatherMotherText']",
);

ClickerDropdowns(oldManButton, oldManPage);

//----------------INSTANCE-5.2------------------------
const cursedButton = document.querySelector(".btnCursed");
const cursedPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[16]['FatherMother'][3]['fatherMotherText']",
);

ClickerDropdowns(cursedButton, cursedPage);

//----------------INSTANCE-6------------------------
const locateCitiesOfRefugeButton = document.querySelector(".btnLocateCitiesOfRefuge");
const locateCitiesOfRefugePage = new GetVersesAndDisplayThem(
  null,
  "",
  "",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=210&pageids=2575978",
  "['query']['pages']['2575978']['title']",
  "['query']['pages']['2575978']['extract']"
);

Clicker(locateCitiesOfRefugeButton, locateCitiesOfRefugePage);

//---Map---Toggle-------
let toggle = () => {
  // document.querySelector(".mapResults").innerHTML = "";
  let element = document.querySelector(".mapResults");
  let hidden = element.getAttribute("hidden");
  
  if (hidden) {
     element.removeAttribute("hidden");
  } else {
     element.setAttribute("hidden", "hidden");
  }
}

//----------------INSTANCE-6.1------------------------
const citiesOfRefugeButton = document.querySelector(".btnCitiesOfRefuge");
const citiesOfRefugePage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[18]['DontMurder-CitiesOfRefuge'][0]['citiesOfRefugeText']",
);

Clicker(citiesOfRefugeButton, citiesOfRefugePage);

//----------------INSTANCE-6.2------------------------
const warfareButton = document.querySelector(".btnWarfare");
const warfarePage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[19]['DontMurder-Warfare'][0]['warText']",
);

Clicker(warfareButton, warfarePage);

//----------------INSTANCE-7------------------------
const noAdulteryButton = document.querySelector(".btnNoAdultery");
const noAdulteryPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[20]['NoAdultery'][1]['noAdulteryText']",
);

ClickerDropdowns(noAdulteryButton, noAdulteryPage);

//----------------INSTANCE-8------------------------
const dontStealButton = document.querySelector(".btnDontSteal");
const dontStealPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[21]['DontSteal'][1]['dontStealText']"
);

ClickerDropdowns(dontStealButton, dontStealPage);

//----------------INSTANCE-8.1------------------------
const shmitaButton = document.querySelector(".btnShmitah");
const shmitaPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[22]['DontSteal-PropertyRules-Shmitah'][0]['shmitahText']"
);

ClickerDropdowns(shmitaButton, shmitaPage);

//----------------INSTANCE-8.2------------------------
const landBoundariesButton = document.querySelector(".btnLandBoundaries");
const landBoundariesPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[23]['DontSteal-LandBoundaries'][0]['boundaryStoneText']"
);

ClickerDropdowns(landBoundariesButton, landBoundariesPage);

//----------------INSTANCE-8.3------------------------
const yearOfReleaseButton = document.querySelector(".btnYearOfRelease");
const yearOfReleasePage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[24]['DontSteal-YearOfRelease'][0]['yearOfReleaseText']"
);

ClickerDropdowns(yearOfReleaseButton, yearOfReleasePage);

//----------------INSTANCE-8.4------------------------
const yovelButton = document.querySelector(".btnYovel");
const yovelPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[25]['DontSteal-Yovelim'][0]['yovelText']"
);

ClickerDropdowns(yovelButton, yovelPage);

//----------------INSTANCE-8.5------------------------
const landLeasesButton = document.querySelector(".btnLandLeases");
const landLeasesPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[26]['DontSteal-LandLeases'][0]['landLeaseText']"
);

ClickerDropdowns(landLeasesButton, landLeasesPage);

//----------------INSTANCE-9------------------------
const noFalseWitnessButton = document.querySelector(".btnNoFalseWitness");
const noFalseWitnessPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[27]['NoFalseWitness'][1]['dontFalselyWitnessText']"
);

ClickerDropdowns(noFalseWitnessButton, noFalseWitnessPage);

//----------------INSTANCE-10------------------------
const doNotCovetButton = document.querySelector(".btnDoNotCovet");
const doNotCovetPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[28]['DoNotCovet'][0]['doNotCovetText']"
);

ClickerDropdowns(doNotCovetButton, doNotCovetPage);


//Primary Buttons Functionality
//--------Button-1---------------------------------------------

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".section1")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//--------Button-2------------------------------------------
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".section2")) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show2")) {
        openDropdown.classList.remove("show2");
      }
    }
  }
};
//----------------------------------------------------------


