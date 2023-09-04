import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCX2x-sEwhNuKnJGA741KWOpx44iWIqKKQ",
  authDomain: "the-torah-app.firebaseapp.com",
  projectId: "the-torah-app",
  storageBucket: "the-torah-app.appspot.com",
  messagingSenderId: "1058897003287",
  appId: "1:1058897003287:web:83117ddf19ffe852c5ad52"
};

const app = initializeApp(firebaseConfig);


let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.card-slider');
const end = () => {
  isDown = false;
  slider.classList.remove('active');
};
const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
const move = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
};
(() => {
  slider.addEventListener('mousedown', start);
  slider.addEventListener('touchstart', start);
  slider.addEventListener('mousemove', move);
  slider.addEventListener('touchmove', move);
  slider.addEventListener('mouseleave', end);
  slider.addEventListener('mouseup', end);
  slider.addEventListener('touchend', end);
})();
const cardData = [
  {
    title: "You have no other gods before Me",
    imageSrc: "../images/Knesset_Menorah_Shema_Inscription.jpg",
    text: "<b>Category</b>: <br>You shall love your God with all your heart",
    link: "./PG1_NoOthergods.html"
  },
  {
    title: "You do not make an idol for yourself",
    imageSrc: "/images/the-2-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (3).jpg",
    text: "<b>Category</b>: <br>You shall love your God with all your heart",
    link: "./PG2_NoIdols.html"
  },
  {
    title: "You do not take the Name of יהוה your Elohim in vain",
    imageSrc: "../images/Tetragrammaton11Q5-1.jpg",
    text: "<b>Category</b>: <br>You shall love your God with all your heart",
    link: "./PG3_NoNameVain.html"
  },
  {
    title: "Remember the Sabbath day, to sanctify it.",
    imageSrc: "/images/the-4-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (5).jpg",
    text: "<b>Category</b>: <br>You shall love your God with all your heart",
    link: "./PG4_Shabbat.html"
  },
  {
    title: "Respect your father and your mother",
    imageSrc: "/images/the-5-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (6).jpg",
    text: "<b>Category</b>: <br>You shall love your neighbour as yourself",
    link: "./PG5_FatherMother.html"
  },
  {
    title: "You do not murder.",
    imageSrc: "/images/the-6-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (7).jpg",
    text: "<b>Category</b>: <br>You shall love your neighbour as yourself",
    link: "./PG6_NoMurder.html"
  },
  {
    title: "You do not commit adultery.",
    imageSrc: "/images/the-7-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (8).jpg",
    text: "<b>Category</b>: <br>You shall love your neighbour as yourself",
    link: "./PG7_NoAdultery.html"
  },
  {
    title: "You do not steal.",
    imageSrc: "/images/the-8-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (9).jpg",
    text: "<b>Category</b>: <br>You shall love your neighbour as yourself",
    link: "./PG8_DontSteal.html"
  },
  {
    title: "You do not bear false witness against your neighbour.",
    imageSrc: "/images/the-9-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (10).jpg",
    text: "<b>Category</b>: <br>You shall love your neighbour as yourself",
    link: "./PG9_NoFalseWitness.html"
  },
  {
    title: "You shall not covet",
    imageSrc: "/images/the-10-commandment-icons-and-pictogram-illustration-depict-ten-commandments-teaching-beliefs-and-moral-value-by-christian-god-religion-2C3RN5A (11).jpg",
    text: "<b>Category</b>: <br>You shall love your neighbour as yourself",
    link: "./PG10_DontCovet.html"
  },
];
const cardsContainer = document.querySelector('.cards-container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;
function createCard(card) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  const cardContent = `
    <div class="card-2">
      <div class="title">${card.title}</div>
      <img src="${card.imageSrc}">
      <div class="text">${card.text}</div>
      <div class="button-container">
        <a href="${card.link}">See More</a>
      </div>
    </div>
  `;
  cardElement.innerHTML = cardContent;
  cardsContainer.appendChild(cardElement);
}
for (let i = 0; i < cardData.length; i++) {
  createCard(cardData[i]);
}
const cards = document.querySelectorAll('.card'); // Fixed
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slideToCard(currentIndex);
  }
});
nextButton.addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    slideToCard(currentIndex);
  }
});
function slideToCard(index) {
  const cardWidth = cards[0].offsetWidth;
  const slideAmount = cardWidth * index;
  cardsContainer.style.transform = `translateX(-${slideAmount}px)`;
}