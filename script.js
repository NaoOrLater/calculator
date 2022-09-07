function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiple(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1/num2;
};

//May want to find a way to accept operator argument as a character rather as a string
function operate (operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiple(num1, num2);
    } else if (operator == '/') {
        return divide(num1,num2);
    }
};

const inputDisplay = document.querySelector(".input-display");
const buttons = document.querySelector('.buttons');
const calcButtons = Array.from(buttons.querySelectorAll('button'));

calcButtons.forEach((button) => {
    button.addEventListener('click', () => {
        inputDisplay.textContent = `${button.textContent}`;
    });
});