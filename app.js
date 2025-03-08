const display = document.querySelector(".display");

const btnZero = document.querySelector("#btnZero");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const btnFour = document.querySelector("#btnFour");
const btnFive = document.querySelector("#btnFive");
const btnSix = document.querySelector("#btnSix");
const btnSeven = document.querySelector("#btnSeven");
const btnEight = document.querySelector("#btnEight");
const btnNine = document.querySelector("#btnNine");

const calc = (num) => {
    if (display.innerText == "0") {
      display.innerText = num;
    } else {
      display.innerText += num;
    }
  }

const add = () => {
    display.innerText += "+"
}

const res = () => {
    display.innerText = eval(display.innerText)
}