const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

// prevButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         slideToCard(currentIndex);
//     }
});

// nextButton.addEventListener('click', () => {
//     if (currentIndex < cards.length - 1) {
//         currentIndex++;
//         slideToCard(currentIndex);
//     }
// });



// cardsContainer.addEventListener('click', () => {
//     if (currentIndex < cards.length - 1) {
//         currentIndex++;
//         slideToCard(currentIndex);
//     }
// });


// function slideToCard(index) {
//     const cardWidth = cards[0].offsetWidth;
//     cardsContainer.style.transform = `translateX(-${cardWidth * index}px)`;
// }

let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.card-slider');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();
