let display = document.querySelector('.display');
let currentValue = '';
let a = null;
let b = null;
let o = '';
let result = null;

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
const posneg = document.querySelector('.posneg');
const delBtn = document.querySelector('.delete');

digits.forEach((digit) => {
    digit.addEventListener('click', () => record(digit.textContent));
})
operators.forEach((operator) => {
    operator.addEventListener('click', () => recordOperator(operator));
})
clearBtn.addEventListener('click', clear);
delBtn.addEventListener('click', backspace);
equal.addEventListener('click', evaluate);
posneg.addEventListener('click', positiveNegative);
window.addEventListener('keydown', keyboardInput);

// Bugs
// Fix enlarging display if more numbers are input
// Refactor

function record(value) {
    // Where expression has been calculated
    if (result != null) {
        currentValue = '';
        result = null;
    }

    if (value == '.') {
        if (currentValue.includes('.')) {
            return;
        }
    }

    // Update value and display
    currentValue += value;
    display.textContent = currentValue;
}

// Operator listener 
function recordOperator(operator) {
    // Handle DOM element input
    if (typeof operator == "object") {
        operator = operator.textContent;
    }

    // On new expression or old result
    if (a == null || result == currentValue) {
        o = operatorSwitch(operator);
        a = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);
        currentValue = '';
    }
    else {
        // Make calculation
        result = evaluate(a, b, o);
        o = operatorSwitch(operator); 
    }
}

// Equal listener
function evaluate() {
    b = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);

    // Check all vars present and equation not already worked out
    if (a == result) {
        console.log("Just did it");
        return;
    }
    else {
        result = operate(a, b, o);
        if (result) {
            // If result is a float
            if (!Number.isInteger(result)) {
                result = roundFloat(result);
            }
            // If result is too long
            if (Number.isInteger(result) && result.toString().length >= 15) {
                result = bigNum(result);
            }
            
            // Update values
            a = (Number.isInteger(result)) ? parseInt(result) : parseFloat(result);
            b = null;
            currentValue = result;

            // Update display
            display.textContent = '';
            display.textContent = result;
            console.log(result);

            return result;
        }
    }
}

function operate(a, b, o) {
    // Check
    if (!a || !b || !o) {
        console.log('Caught a null');
        return;
    }
    else {
        let operator = o;
        console.log(a, o, b)
        switch(operator) {
            case '+': return add(a, b);
            case '-': return subtract(a, b);
            case '*': return multiply(a, b);
            case '/': return divide(a, b);
        }
    }
}

function clear() {
    display.textContent = '';
    a = null;
    b = null;
    result = null;
    currentValue = '';
}

function backspace() {
    if (currentValue != result) {
        currentValue = currentValue.substring(0, currentValue.length -1);
        display.textContent = currentValue;
    }
}

function positiveNegative() {
    currentValue *= (-1);
    display.textContent = currentValue;
    if (a = currentValue) {
        a *= (-1);
    }
}

function bigNum(num) {
    num = num.toExponential(5);
    return num;

}

function roundFloat(result) {
    let resultString = result.toString();
    let resultLength = resultString.length;

    // If float doesn't fit the screen
    if (resultLength >= 15) {
        let index = resultString.indexOf('.');
        let decLength = resultLength - index;
        decLength = 15 - index; 
        floatResult = result.toFixed(decLength);
        return floatResult;
    }
    else {
        let index = resultString.indexOf('.');
        let decLength = resultLength - index;
        floatResult = result.toFixed(decLength);
        return floatResult;
    }
}

function operatorSwitch(opDigit) {
    switch(opDigit) {
        case '+': return '+';
        case '-': return '-';
        case '*': return '*';
        case '/': return '/';
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function keyboardInput(e) {
    let key = e.key || e.keyCode || e.charCode;
    if (parseInt(key) || parseInt(key) == 0) {
        record(key);
    }
    else if (key == '.') {
        record(key);
    }
    else if (key == '+' || key == '-' || key == '/' || key == '*') {
        recordOperator(key);
    }
    else if (key == 'Backspace') {
        backspace();
    }
    else if (key == 'Enter') {
        evaluate();
    }
    else if (key == 'Escape') {
        clear();
    }
}