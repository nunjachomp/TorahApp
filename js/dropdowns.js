const loveGodButton = document.querySelector(".section1");
const displayResults = document.querySelector(".displayResults");
loveGodButton.addEventListener("click", displayResults.innerHTML(versesArray[0][text]));


function Func() {
    fetch("/verses.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}