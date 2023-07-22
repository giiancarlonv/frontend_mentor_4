document.querySelector('.js-hamburger').addEventListener('click', () =>{
  dropDownF();
});
document.querySelector('.js-close-burger').addEventListener('click', () =>{
  dropDownClose();
} )

const dropDownF = () => {
  let dropDown = document.querySelector('.drop-down');
  dropDown.style.display = '';
}
const dropDownClose = () => {
  let dropDown = document.querySelector('.drop-down');
  dropDown.style.display = 'none';
}