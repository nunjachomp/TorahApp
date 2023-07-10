const loveGodButton = document.querySelector(".section1");
const displayResults = document.querySelector(".displayResults");
loveGodButton.addEventListener("click", main);
const loveNeighborButton = document.querySelector(".section2");
loveNeighborButton.addEventListener("click", main2);

const mitzvah1 = document.querySelector(".mitzvah1");

async function getVerses(){
    let response = await fetch("https://649e6352245f077f3e9c56d0.mockapi.io/api/v1/calculation");
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
   }
   
   async function main() {
    try {
      let abc = await getVerses();
    //   console.log(abc);
      displayResults.innerHTML = `${abc[1].text}`;
    } catch (error) {
      console.error(error);
    }
  }
    //main();

async function main2() {
    try {
      let abc = await getVerses();
      displayResults.innerHTML = `${abc[2].text}`;
    } catch (error) {
      console.error(error);
    }
  }

  async function mitzvahOne() {
    try {
      let abc = await getVerses();
      mitzvah1.innerHTML = `${abc[4].text}`;
      console.log(abc[4].text)
    } catch (error) {
      console.error(error);
    }
  }


//-------------------------------------------------------------
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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
  //------------------------------------------------------------

  