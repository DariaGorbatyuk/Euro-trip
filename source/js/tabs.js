const tabsLink = document.querySelectorAll(`.tabs__link`);
const tabsList = document.querySelector(`.tabs__list`);
const cards = document.querySelectorAll(`.card`);
let current = 0;

tabsLink.forEach((link, i) => {
  link.dataset.id = i;
})

const onClick = (evt) => {
  evt.preventDefault();
  console.log(evt.target);
  if(!evt.target.matches(`.link`) || evt.target.dataset.id === current){
    return;
  }
  let newCard = evt.target.dataset.id;
  cards[current].classList.remove(`card--active`)
  cards[newCard].classList.add(`card--active`);
  current = newCard;
}

tabsList.addEventListener(`click`, onClick)

