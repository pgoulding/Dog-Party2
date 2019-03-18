/*---------- Query Selectors -----------*/
var displayDogName = document.querySelector('.main-doggo-name');
var inputDogName = document.querySelector('.doggo-name-input');
var btnDogName = document.querySelector('#doggo-name');
var allColumnButtons = document.querySelector('.doggo-section-button');
var btnColummn1 = document.querySelector('#column-1-button');
var btnColummn2 = document.querySelector('#column-2-button');
var btnColummn3 = document.querySelector('#column-3-button');
var textColumn1 = document.querySelector('#column-1-text');
var textColumn2 = document.querySelector('#column-2-text');
var textColumn3 = document.querySelector('#column-3-text');

/*---------- Global Variables ----------*/

/*---------- Event Listeners -----------*/

btnDogName.addEventListener('click', changeName);
// btnColummn1.addEventListener('click', hideColumn1);
// btnColummn2.addEventListener('click', hideColumn2);
// btnColummn3.addEventListener('click', hideColumn3);
inputDogName.addEventListener('click', changeStyle);
inputDogName.addEventListener('blur', addPlaceholder);


/*---------- Functions -----------------*/
function changeName(e){
  e.preventDefault()
  if (inputDogName.value === ''){
    inputDogName.style.outline = '2px solid red';
    inputDogName.setAttribute('placeholder', 'You gotta name me first!');
  }else{
    inputDogName.style.outline = 'none';
    displayDogName.style.color = '#fff';
    displayDogName.innerText = inputDogName.value;
    inputDogName.value = '';
  }
}

function addPlaceholder(){
  inputDogName.setAttribute('placeholder', 'Please Name Me')
}

// function hideColumn1(e){
//   e.preventDefault()
//   if(textColumn1.getAttribute('visibility')===('visibility'))
//   textColumn1.setElement.
// }

function changeStyle(e){
  e.preventDefault()
  inputDogName.style.outline = 'none';
  inputDogName.removeAttribute('placeholder');
}
