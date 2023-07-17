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
      let response = await fetch(this.wikiAPI);
      let data = await response.json();
      data = JSON.stringify(data);
      data = JSON.parse(data);
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
  "displayResults",
  "[2]['NoOthergods'][1]['noOthergodsText']",
);

Clicker(noOthergodsButton, noOthergodsPage);

//----------------INSTANCE-2------------------------
const noIdolsButton = document.querySelector(".btnNoIdols");
const noIdolsPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[3]['NoIdols'][0]['noIdolsText']",
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tel_Rehov_Exhibition_090316_06.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929",
  "['query']['pages']['2180929']['title']", 
  "['query']['pages']['2180929']['extract']"
);

Clicker(noIdolsButton, noIdolsPage);


//----------------INSTANCE-3------------------------
const noNameVainButton = document.querySelector(".btnNoNameVain");
const noNameVainPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[4]['NoNameVain'][0]['noVainText']",
);

Clicker(noNameVainButton, noNameVainPage);

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

Clicker(roshHaShanahButton, roshHaShanahPage);

//----------------INSTANCE-4.1------------------------
const pesachButton = document.querySelector(".btnPesach");
const pesachPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[9]['Shabbat-Holydays-Pesach'][0]['pesachText']",
);

Clicker(pesachButton, pesachPage);

//----------------INSTANCE-4.2------------------------
const matzotButton = document.querySelector(".btnMatzot");
const matzotPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[10]['Shabbat-Holydays-Matzot'][0]['matzotText']",
);

Clicker(matzotButton, matzotPage);

//----------------INSTANCE-4.3------------------------
const bikurimButton = document.querySelector(".btnBikurim");
const bikurimPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[11]['Shabbat-Holydays-BikurimHarvest'][0]['bikurimHarvestText']",
);

Clicker(bikurimButton, bikurimPage);

//----------------INSTANCE-4.4------------------------
const shavuotButton = document.querySelector(".btnShavuot");
const shavuotPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[12]['Shabbat-Holydays-Shavuot'][0]['shavuotText']",
);

Clicker(shavuotButton, shavuotPage);

//----------------INSTANCE-4.5------------------------
const yomtruahButton = document.querySelector(".btnYomTruah");
const yomtruahPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[13]['Shabbat-Holydays-YomTruah'][0]['yomTruahText']",
);

Clicker(yomtruahButton, yomtruahPage);

//----------------INSTANCE-4.6------------------------
const yomKippurButton = document.querySelector(".btnYomKippur");
const yomKippurPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[14]['Shabbat-Holydays-YomKippur'][0]['yomKippurText']",
);

Clicker(yomKippurButton, yomKippurPage);

//----------------INSTANCE-4.7------------------------
const sukkotButton = document.querySelector(".btnSukkot");
const sukkotPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[15]['Shabbat-Holydays-Sukkot'][0]['sukkotText']",
);

Clicker(sukkotButton, sukkotPage);

//----------------INSTANCE-4.7-T1------------------------
const noOthersWorkButton = document.querySelector(".btnNoOthersWork");
const noOthersWorkPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[5]['Shabbat'][2]['shabbatText']",
);

Clicker(noOthersWorkButton, noOthersWorkPage);

//----------------INSTANCE-4.7-T2------------------------
const noCookingButton = document.querySelector(".btnNoCooking");
const noCookingPage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[5]['Shabbat'][4]['shabbatText']",
);

Clicker(noCookingButton, noCookingPage);

//----------------INSTANCE-4.7-T3------------------------
const noFireButton = document.querySelector(".btnNoFire");
const noFirePage = new GetVersesAndDisplayThem(
  "headingShabbat",
  "[5]['Shabbat'][6]['shabbatText']",
);

Clicker(noFireButton, noFirePage);

//----------------INSTANCE-5------------------------
const fatherMotherButton = document.querySelector(".btnFatherMother");
const fatherMotherPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[16]['FatherMother'][0]['fatherMotherText']",
);

Clicker(fatherMotherButton, fatherMotherPage);

//----------------INSTANCE-6------------------------
const dontMurderButton = document.querySelector(".btnDontMurder");
const dontMurderPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[17]['DontMurder'][0]['dontMurderText']",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Mediterranean_Sea_East_location_map.svg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=210&pageids=2575978",
  "['query']['pages']['2575978']['title']",
  "['query']['pages']['2575978']['extract']"
);

Clicker(dontMurderButton, dontMurderPage);

//----------------INSTANCE-7------------------------
const noAdulteryButton = document.querySelector(".btnNoAdultery");
const noAdulteryPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[20]['NoAdultery'][0]['noAdulteryText']",
);

Clicker(noAdulteryButton, noAdulteryPage);

//----------------INSTANCE-8------------------------
const dontStealButton = document.querySelector(".btnDontSteal");
const dontStealPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[21]['DontSteal'][0]['dontStealText']"
);

Clicker(dontStealButton, dontStealPage);

//----------------INSTANCE-9------------------------
const noFalseWitnessButton = document.querySelector(".btnNoFalseWitness");
const noFalseWitnessPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[27]['NoFalseWitness'][0]['dontFalselyWitnessText']"
);

Clicker(noFalseWitnessButton, noFalseWitnessPage);

//----------------INSTANCE-10------------------------
const doNotCovetButton = document.querySelector(".btnDoNotCovet");
const doNotCovetPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[28]['DoNotCovet'][0]['doNotCovetText']"
);

Clicker(doNotCovetButton, doNotCovetPage);


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

