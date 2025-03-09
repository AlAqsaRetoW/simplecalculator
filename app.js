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

const isOperator = (char) => {
    return ['+', '-', '*', '/', '%'].includes(char);
}

const operator = (operator) => {
    const lastChar = display.innerText.slice(-1);

    if (!isOperator(lastChar)) {
        display.innerText += operator;
    }
}

const calc = (num) => {
    if (display.innerText == "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}

const add = () => {
    operator("+");
}

const subtract = () => {
    operator("-");
}

const multiply = () => {
    operator("*");
}

const divide = () => {
    operator("/");
}

const percent = () => {
    operator("%");
}

const reset = () => {
    display.innerText = "0";
}

const point = () => {
    display.innerText += "."
}

const res = () => {
    display.innerText = eval(display.innerText)
}