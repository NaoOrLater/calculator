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
    if (num2 === 0) {
       alert(`You can't divide by zero silly!`)
    } else {
    return num1/num2;
    }
};

//May want to find a way to accept operator argument as a character rather as a string
function operate (operator, num1, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '×') {
        return multiple(num1, num2);
    } else if (operator == '÷') {
        return divide(num1,num2);
    }
};

const answerDisplay = document.querySelector(".answer-display");
const inputDisplay = document.querySelector('.input-display');
const numbers = document.querySelector('.number-buttons');
const numberButtons = Array.from(numbers.querySelectorAll('button'));
const equal = numbers.querySelector('.equal');
const equalsButtons = document.querySelector('.equal');

const operators = document.querySelector('.operators');
const operatorButtons = Array.from(operators.querySelectorAll('button'));
const operatorSigns = operatorButtons.map(operator => operator.textContent).join('');

function numberToDisplay() { 
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent != '=' && button.textContent != '.') {
                answerDisplay.textContent += `${button.textContent}`;
            }
        });
    });
};
numberToDisplay();

function displayInputAfterEval() { 
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent != '=') {
                if (inputDisplay.textContent.split('').includes('=') === true && 
                (inputDisplay.textContent.split('').includes('+') === true ||
                inputDisplay.textContent.split('').includes('-') === true ||
                inputDisplay.textContent.split('').includes('×') === true ||
                inputDisplay.textContent.split('').includes('÷') === true )) {
                inputDisplay.textContent = '';
                answerDisplay.textContent = '';
                answerDisplay.textContent += `${button.textContent}`;
                }
            }
        });
    });
};

displayInputAfterEval();

function resetButton () {
    const reset = document.querySelector('.reset-button');
    reset.addEventListener('click', () => {
        answerDisplay.textContent = '';
        inputDisplay.textContent = '';
    });
};
resetButton();

function equalsTo() {
        const num1 = parseFloat(inputDisplay.textContent.slice(0,-1)); 
        const operator = inputDisplay.textContent.slice(-1);
        const num2 = parseFloat(answerDisplay.textContent);
        const answer = operate(operator, num1, num2);
    if (isNaN(num2) === false) {
        inputDisplay.textContent += `${num2} =`;
        answerDisplay.textContent = answer;
    } else {
        alert('Error');
    }
        };

equalsButtons.addEventListener('click', () => {
    if (inputDisplay.textContent === '') {
        inputDisplay.textContent = answerDisplay.textContent;
    } else {
        equalsTo ();
    }

});

function operatorToDisplay () {
    operatorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (inputDisplay.textContent.split('').includes('=') === true) {
                newTotal = answerDisplay.textContent;
                answerDisplay.textContent = '';
                inputDisplay.textContent = `${newTotal}  ${button.textContent} `;
            } else if (inputDisplay.textContent.split('').includes('=') === false && answerDisplay.textContent != '' && inputDisplay.textContent != '' ) {
                equalsTo();
                inputDisplay.textContent = `${answerDisplay.textContent}  ${button.textContent}`;
                answerDisplay.textContent = '';
            } else {
                currentValueInputDisplay = answerDisplay.textContent += `${button.textContent}`;
                inputDisplay.textContent += currentValueInputDisplay;
                answerDisplay.textContent = '';
            };
        });
    });
};
operatorToDisplay();

function oneDecimal() {
    const decimal = document.querySelector('.decimal');
    decimal.addEventListener('click', () => {
        if (answerDisplay.textContent.split('').includes('.') === false) {
            answerDisplay.textContent += '.';
        }
    })
};
oneDecimal();