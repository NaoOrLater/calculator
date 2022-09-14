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
const equal = numbers.querySelector('.equal');

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
                currentValueInputDisplay = answerDisplay.textContent += `${button.textContent}`;
                inputDisplay.textContent += currentValueInputDisplay;
                answerDisplay.textContent = '';
            };
        });
    });
};
operatorToDisplay();

<<<<<<< HEAD
// Next function to make is for the equal sign and for having the input display show the full equation

// Maybe this function can be used to check if the displays already contains an equal and decimal and alert if it does
// function alertDuplicateSigns () {
//     equal.addEventListener('click', () => {
//         if (inputDisplay.textContent.includes('=') === true || 
//             inputDisplay.textContent.includes('.') === true || 
//             answerDisplay.textContent.includes('=') === true|| 
//             answerDisplay.textContent.includes('.') === true) {
//                 inputDisplay.textContent += answerDisplay.textContent;
//                 answerDisplay.textContent = '';
//                 inputDisplay.textContent.replace('=', '');
//         }
//     })
// };

numberToDisplay();
operatorToDisplay();
equalButton();
=======
function resetButton () {
    const reset = document.querySelector('.reset-button');
    reset.addEventListener('click', () => {
        answerDisplay.textContent = '';
        inputDisplay.textContent = '';
    });
};
resetButton();
>>>>>>> 236a43e7dc6a44e53a3c5913c9ffb535501c7f57
