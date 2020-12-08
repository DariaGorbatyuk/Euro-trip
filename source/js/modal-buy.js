const btnBuy = document.querySelectorAll(`.buy`);
const body = document.querySelector(`body`);
const modalBuyTemplate = document.querySelector(`#purchase`).content.querySelector(`.purchase`);
const newModalBuy = modalBuyTemplate.cloneNode(true);

const onBtnBuyClick = () => {
  debugger
  const onClose = (evt) => {

    if (evt.target !== close && evt.key!==`Escape`&& !evt.target.matches(`.purchase`)) {
      return;
    }
    console.log(evt);
    newModalBuy.remove();
    document.removeEventListener(`keydown`, onClose);
    document.removeEventListener(`click`, onClose);
  }

  body.insertAdjacentElement(`afterbegin`, newModalBuy);
  const close = document.querySelector(`.purchase__btn`);
  close.addEventListener(`click`, onClose);
  document.addEventListener(`keydown`, onClose);
  document.addEventListener(`click`, onClose);
}

btnBuy.forEach(btn => btn.addEventListener(`click`, onBtnBuyClick));
