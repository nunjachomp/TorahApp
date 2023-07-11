const loveGodButton = document.querySelector(".section1");
const displayResults = document.querySelector(".displayResults");
loveGodButton.addEventListener("click", main);
const loveNeighborButton = document.querySelector(".section2");
loveNeighborButton.addEventListener("click", main2);

const displayApiImage = document.querySelector(".display-API-Image");
const displayApiTitle = document.querySelector(".API-Display-Title");
const displayAPI = document.querySelector(".API-Display");
const noIdols = document.querySelector(".mitz2");

//Fetch All Verses

async function getVerses(){
    let response = await fetch("https://649e6352245f077f3e9c56d0.mockapi.io/api/v1/calculation");
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
   }

//Fetch Catergory Love God Verse

   async function main() {
    try {
      let abc = await getVerses();
    //   console.log(abc);
      displayResults.innerHTML = `${abc[14].text}`;

      fetch('https://upload.wikimedia.org/wikipedia/commons/b/b4/Tel_Rehov_Exhibition_090316_06.jpg')
      .then(response => response.blob())
      .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.querySelector(".display-API-Image").appendChild(imgElement);
      })
      .catch(error => {
        console.log('Error:', error);
      });

      let response = await fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929");
      let data = await response.json();
      data = JSON.stringify(data);
      data = JSON.parse(data);
      displayApiTitle.innerHTML = (data['query']['pages']['2180929']['title']);
      displayAPI.innerHTML = (data['query']['pages']['2180929']['extract']);
    } catch (error) {
      console.error(error);
    }
  }

//Fetch Category Love Neighbor Verse

async function main2() {
    try {
      let abc = await getVerses();
      displayResults.innerHTML = `${abc[2].text}`;

    } catch (error) {
      console.error(error);
    }
  }

  async function mitzvahTwo() {
    try {
      let abc = await getVerses();
      noIdols.appendChild = `<li>${abc[4].text}<li>`;
      console.log(abc[4].text)
    } catch (error) {
      console.error(error);
    }
  }

//Primary Buttons Functionality
//--------Button-1---------------------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.section1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  //--------Button-2------------------------------------------

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.section2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
          openDropdown.classList.remove('show2');
        }
      }
    }
  }
  
  //----------------------------------------------------------

 //Working Wikipedia API Template//
  //
  // async function getVerses(){
  //   let response = await fetch("https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&exchars=114&pageids=2180929");
  //   let data = await response.json();
  //   data = JSON.stringify(data);
  //   data = JSON.parse(data);
  //   console.log(data['query']['pages']['2180929']['title']);
  //   console.log(data['query']['pages']['2180929']['extract']);
  //  }
  //
  // images format 
  //
  //  let wikiImage = await fetch("https://en.wikipedia.org/w/api.php?action=query&origin=*&titles=Asherah_pole&prop=pageimages&format=json&pithumbsize=700");
  // let imgData = await wikiImage.json();
  // imgData = JSON.stringify(imgData);
  // imgData = JSON.parse(imgData);
  // displayApiImage.innerHTML = (imgData['query']['pages']['2180929']['pageimage']);
  //
  //---------------------------------------------------------
 