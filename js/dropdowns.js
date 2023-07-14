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
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      document.querySelector(".display-API-Image").appendChild(imgElement);
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

    if (imageElement) {
      imageElement.remove();
    }
    if (titleElement) {
      titleElement.innerHTML = "";
    }
    if (summaryElement) {
      summaryElement.innerHTML = "";
    }
  }
}

const displayResults = document.querySelector(".displayResults");
const displayApiImage = document.querySelector(".display-API-Image");
const displayApiTitle = document.querySelector(".API-Display-Title");
const displayAPI = document.querySelector(".API-Display");

//----------------INSTANCE-1------------------------
const loveGodButton = document.querySelector(".section1");
const loveGodPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[0]['LoveGod-MAIN'][1]['loveGodText']",
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tel_Rehov_Exhibition_090316_06.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929",
  "['query']['pages']['2180929']['title']",
  "['query']['pages']['2180929']['extract']"
);

async function Clicker1() {
  let wikiClickCount = 0;
  loveGodButton.addEventListener("click", () => {
    wikiClickCount++;
    if (wikiClickCount === 1) {
      loveGodPage.getVerses();
      loveGodPage.getAndPostWikiImage();
      loveGodPage.getWikiTitleAndSummary();
    } else if (wikiClickCount === 2) {
      loveGodPage.removeAPIElements();
      wikiClickCount = 0;
    }
  });
}
Clicker1();

//----------------INSTANCE-2------------------------
const loveNeighborButton = document.querySelector(".section2");
const loveNeighborPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[1]['LoveNeighbor-MAIN'][0]['loveNeighborText']",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shabbat_Candles.jpg/300px-Shabbat_Candles.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=600&pageids=28809",
  "['query']['pages']['28809']['title']",
  "['query']['pages']['28809']['extract']"
);

async function Clicker2() {
  let wikiClickCount = 0;

  loveNeighborButton.addEventListener("click", () => {
    wikiClickCount++;
    if (wikiClickCount === 1) {
      loveNeighborPage.getVerses();
      loveNeighborPage.getAndPostWikiImage();
      loveNeighborPage.getWikiTitleAndSummary();
    } else if (wikiClickCount === 2) {
      loveNeighborPage.removeAPIElements();
      wikiClickCount = 0;
    }
  });
}
Clicker2();

//----------------INSTANCE-3------------------------
const NoOthergodsButton = document.querySelector(".btn");
const NoOthergodsPage = new GetVersesAndDisplayThem(
  "displayResults",
  "[2]['NoOthergods'][1]['noOthergodsText']",
  "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tel_Rehov_Exhibition_090316_06.jpg",
  "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929",
  "['query']['pages']['2180929']['title']",
  "['query']['pages']['2180929']['extract']"
);

async function Clicker1() {
  let wikiClickCount = 0;
  NoOthergodsButton.addEventListener("click", () => {
    wikiClickCount++;
    if (wikiClickCount === 1) {
      NoOthergodsPage.getVerses();
      NoOthergodsPage.getAndPostWikiImage();
      NoOthergodsPage.getWikiTitleAndSummary();
    } else if (wikiClickCount === 2) {
      NoOthergodsPage.removeAPIElements();
      wikiClickCount = 0;
    }
  });
}
Clicker1();







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

