/* Slider JavaScript */
var sliderIndex = 0;
sliderFn();

function sliderFn() {
    var i;
    var slider = document.getElementsByClassName("js-slider");
    for(i = 0; i < slider.length; i++) {
        slider[i].style.transform = `translateX(-${sliderIndex * 100}%)`;
    }
    sliderIndex = (sliderIndex + 1) % slider.length;
    setTimeout(sliderFn, 5000);
}

/* Modal JavaScript */
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

function showBuyTickets() {
    modal.classList.add('open');
}

function hideBuyTickets() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
} );