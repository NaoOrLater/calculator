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

const answerDisplay = document.querySelector(".answer-display");
const inputDisplay = document.querySelector('.input-display');
const numbers = document.querySelector('.number-buttons');
const numberButtons = Array.from(numbers.querySelectorAll('button'));

const operators = document.querySelector('.operators');
const operatorButtons = Array.from(operators.querySelectorAll('button'));


function numberToDisplay() { 
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            answerDisplay.textContent += `${button.textContent}`;
            value = parseInt(answerDisplay.textContent);
            return value;
        });
    });
};
numberToDisplay();

function operatorToDisplay () {
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (answerDisplay.textContent != '') {
                currentValue = answerDisplay.textContent += `${button.textContent}`;
                inputDisplay.textContent += currentValue;
                answerDisplay.textContent = '';
            };
        });
    });
};
operatorToDisplay();

function resetButton () {
    const reset = document.querySelector('.reset-button');
    reset.addEventListener('click', () => {
        answerDisplay.textContent = '';
        inputDisplay.textContent = '';
    });
};
resetButton();