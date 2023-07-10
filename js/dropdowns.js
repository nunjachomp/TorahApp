const loveGodButton = document.querySelector(".section1");
const displayResults = document.querySelector(".displayResults");
loveGodButton.addEventListener("click", []);


function Func() {
    fetch("https://649e6352245f077f3e9c56d0.mockapi.io/api/v1/calculation")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}

Func();