const display = document.querySelector('.display');

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
    return ['+', '-', '*', '/', '%', '.'].includes(char);
}

const operator = (operator) => {
    const lastChar = display.innerText.slice(-1);

    if (!isOperator(lastChar)) {
        display.innerText += operator;
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

const point = () => {
    const displayValue = display.innerText;
    
    // Get the last part of the expression (after the last operator)
    const parts = displayValue.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    
    // If the last part already contains a decimal point, don't add another
    if (!lastPart.includes('.')) {
        // If display shows only 0, add "0."
        if (displayValue === "0") {
            display.innerText += ".";
        } else {
            // Add decimal point only if last character isn't already an operator
            const lastChar = displayValue.slice(-1);
            if (!isOperator(lastChar)) {
                display.innerText += '.';
            } else {
                // If last character is an operator, add "0."
                display.innerText += "0.";
            }
        }
    }
}

const percentOp = () => {
    const currentValue = display.innerText;

    if (currentValue !== "0") {
        const parts = currentValue.split(/[\+\-\*\/]/);
        const lastNumber = parts[parts.length - 1];
        if (lastNumber) {
            const percentValue = parseFloat(lastNumber) / 100;
            display.innerText = currentValue.substring(0, currentValue.length - lastNumber.length) + percentValue;
        }
    }
}

const calc = (num) => {
    if (display.innerText == "0") {
        display.innerText = num;
    } else {
        display.innerText += num;
    }
}

const reset = () => {
    display.innerText = "0";
}

const res = () => {
    let expression = display.innerText.replace(/%/g, "/100");

    try {
        display.innerText = eval(expression);
    } catch (error) {
        display.innerText = "Error";
        setTimeout(() => {
            display.innerText = "0";
        }, 1000);
    }
}