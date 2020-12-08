const tabsLink = document.querySelectorAll(`.tabs__link`);
const tabsList = document.querySelector(`.tabs__list`);
const placesLink = document.querySelectorAll(`.places__link`);
const cards = document.querySelectorAll(`.card`);
let current = 0;

placesLink.forEach((link, i) => {
  link.dataset.id = i;
});
tabsLink.forEach((link, i) => {
  link.dataset.id = i;
})

const onClick = (evt) => {
  evt.preventDefault();
  if (!evt.target.matches(`a`) || evt.target.dataset.id === current) {
    return;
  }
  let newCard = evt.target.dataset.id;
  cards[current].classList.remove(`card--active`)
  cards[newCard].classList.add(`card--active`);
  current = newCard;
}

tabsList.addEventListener(`click`, onClick)
placesLink.forEach(link => {
  link.addEventListener(`click`, onClick)
})
