const header = document.querySelector(`.header`);
const btn = header.querySelector(`.nav__toggle`);

header.classList.remove(`header--no-js`);
header.classList.add(`header--closed`);

const onMenuClick = () => {
  if(header.classList.contains(`header--closed`)){
    header.classList.remove(`header--closed`);
    header.classList.add(`header--open`);
  }else{
    header.classList.remove(`header--open`);
    header.classList.add(`header--closed`);
  }

}

btn.addEventListener(`click`, onMenuClick)

