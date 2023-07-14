const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

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
    // Slide to the corresponding card
    const cardWidth = cards[0].offsetWidth;
    cardsContainer.style.transform = `translateX(-${cardWidth * index}px)`;
}
  