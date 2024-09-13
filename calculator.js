const form = document.querySelector('.container-calculator form');
const button1 = document.querySelector('.container-calculator .button1');
const input = document.querySelector('.container-calculator input');
const answer = document.querySelector('.container-calculator .answer');


function cmToInch() {

  let number = input.value;
  let change = number * 0.393700787;
  let transform = change.toFixed(2);
  if (number === 0) {
    answer.innerText = (`Podałeś/aś wartość 0`);
  } else if (number < 0){
    answer.innerText = (`Podana przez Ciebie jednostka miary w centymetrach stanowi ${transform} cala`);
  } else {
    answer.innerText = (`Podana przez Ciebie jednostka miary w centymetrach stanowi ${transform} cala`);
  }
}

button1.addEventListener('click', cmToInch);

function checkKeyEvent(event){
  if(event.key === 'Enter'){
    cmToInch();
  }
}

const button2 = document.querySelector('.container-calculator .button2');
const incount = document.querySelector('.container-calculator .incount');
const answer2 = document.querySelector('.container-calculator .answer2');


function inchToCm(){
  let number = incount.value;
  if (number === 0) {
    answer2.InnerText = (`Podałeś/aś wartość 0`);
  } else {
    answer2.innerText = (`Podana przez Ciebie jednostka miary stanowi ${number*2.54} cm`);
  }
}


button2.addEventListener('click', inchToCm);

function checkKey2Event(event){
  if(event.key === 'Enter'){
    inchToCm();
  }
}




