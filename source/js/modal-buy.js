`use strict`
const btnBuy = document.querySelectorAll(`.buy`);
const body = document.querySelector(`body`);
const modalBuyTemplate = document.querySelector(`#purchase`).content.querySelector(`.purchase`);
const newModalBuy = modalBuyTemplate.cloneNode(true);
const successMessage = document.querySelector(`#success`).content.querySelector(`.success`);
const questionForm = document.querySelector(`.question__form`);
let close;

const removeModal = (modal) => {
  modal.remove();
  document.removeEventListener(`keydown`, onClose);
  document.removeEventListener(`click`, onClose);
}

const onClose = (evt) => {
  if (evt.target !== close && evt.key !== `Escape` && !evt.target.matches(`.purchase`)) {
    return;
  }
  removeModal(newModalBuy);
  removeModal(successMessage)
}
const onSubmit = (evt) => {
  evt.preventDefault();
  if(newModalBuy){
    removeModal(newModalBuy);
  }
  body.insertAdjacentElement(`afterbegin`, successMessage);
  close = successMessage.querySelector(`.close`);
  close.addEventListener(`click`, onClose);
  document.addEventListener(`keydown`, onClose);
  document.addEventListener(`click`, onClose);
}

const onBtnBuyClick = () => {
  body.insertAdjacentElement(`afterbegin`, newModalBuy);
  close = newModalBuy.querySelector(`.close`);
  close.addEventListener(`click`, onClose);
  document.addEventListener(`keydown`, onClose);
  document.addEventListener(`click`, onClose);
  const formPurchase = document.querySelector(`.purchase__form`);
  formPurchase.addEventListener(`submit`, onSubmit)
}

questionForm.addEventListener(`submit`, onSubmit)
btnBuy.forEach(btn => btn.addEventListener(`click`, onBtnBuyClick));
