const loveGodButton = document.querySelector(".section1");
const displayResults = document.querySelector(".displayResults");
loveGodButton.addEventListener("click", []);

// function getVerses() {
//     fetch("https://649e6352245f077f3e9c56d0.mockapi.io/api/v1/calculation")
//         .then((res) => {
//         return res.json();
//     })
//     .then((versesJSON) => console.log(versesJSON[1].text))
  
// }

// getVerses();

// function displayMessage() {
//     console.log(versesJSON[1].text);
// }

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
      console.log(abc);
      displayResults.innerHTML = `${abc[1].text}`;
    } catch (error) {
      console.error(error);
    }
  }
  
  main();



