const btnBuy = document.querySelectorAll(`.buy`);
const body = document.querySelector(`body`);
const modalBuyTemplate = document.querySelector(`#purchase`).content.querySelector(`.purchase`);
const newModalBuy = modalBuyTemplate.cloneNode(true);
const successMessage = document.querySelector(`#success`).content.querySelector(`.success`);
let close;

const onBtnBuyClick = () => {

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
    debugger;
    removeModal(newModalBuy);
    body.insertAdjacentElement(`afterbegin`, successMessage);
    close = document.querySelector(`.close`);
    close.addEventListener(`click`, onClose);
    document.addEventListener(`keydown`, onClose);
    document.addEventListener(`click`, onClose);
  }


  body.insertAdjacentElement(`afterbegin`, newModalBuy);
  const formPurchase = document.querySelector(`.purchase__form`);
  close = document.querySelector(`.close`);
  close.addEventListener(`click`, onClose);
  document.addEventListener(`keydown`, onClose);
  document.addEventListener(`click`, onClose);
  formPurchase.addEventListener(`submit`, onSubmit)
}

btnBuy.forEach(btn => btn.addEventListener(`click`, onBtnBuyClick));
