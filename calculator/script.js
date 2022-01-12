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

// Bugs
// Keys listener
// Double operator = NaN
// Refactor

function record(value) {
    // Where expression has been calculated
    if (result != null) {
        currentValue = '';
        currentValue += value;
        display.textContent = currentValue;
        result = null;
    }
    else {
        currentValue += value;
        display.textContent = currentValue;
    }
}

// Operator listener 
function recordOperator(operator) {
        // On new expression or old result
        if (a == null || result == currentValue) {
            operatorSwitch(operator);
            a = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);
            currentValue = '';
        }
        else {
            // Make calculation
            b = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);
            result = operate(a, b, o);
            display.textContent = result;
            currentValue = result;
            operatorSwitch(operator); 
            a = result;                   
        }
}

// Equal listener
function evaluate() {
    b = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);

    // Check all vars present and equation not already worked out
    if (a == null || b == null || o == null || a == result) {
        console.log("Caught a null")
        return;
    }
    // Check for NaN
    else if (a != a || b != b) {
        console.log("Caught a NaN")
        return;
    }
    else {
        result = operate(a, b, o);
        
        // If result is a float
        if (!Number.isInteger(result)) {
            result = roundFloat(result)
        }
        // If result is too long
        if (result.toString().length >= 15) {
            result = bigNum(result)
        }
        
        // Record result as A
        a = (Number.isInteger(result)) ? parseInt(result) : parseFloat(result);
        console.log(result);
        display.textContent = ''
        currentValue = result;
        display.textContent = result;
        b = null;
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
    else {
        return;
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

    // If result doesn't fit the screen
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

function operatorSwitch(operator) {
    let classes = operator.classList;
    switch(true) {
        case classes.contains('add'): o = '+';
            break;
        case classes.contains('subtract'): o = '-';
            break;
        case classes.contains('multiply'): o = '*';
            break;
        case classes.contains('divide'): o = '/';
            break;
    }
}

function operate(a, b, o) {
    // Check
    if (a == null || b == null || o == null) {
        console.log('Caught a null')
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

