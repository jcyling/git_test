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
// Delete button
// Plus and minus
// Keys listener
// Big num
// Refactor

function record(value) {
    if (result == null) {
        currentValue += value;
        display.textContent = currentValue;
    }
    // On press when result is already on screen
    else {
        currentValue = '';
        display.textContent = '';
        result = null;
        currentValue += value;
        display.textContent = currentValue;
    }
}

// Operator listener 
function recordOperator(operator) {
        // On new expression or old result
        if (a == null || a == currentValue) {
            let classes = operator.classList;
            operatorSwitch(classes);
            a = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);
            currentValue = '';
        }
        else {
            // Make calculation
            b = (Number.isInteger(currentValue)) ? parseInt(currentValue) : parseFloat(currentValue);
            result = evaluate(a, b, o);
            if (result == null) {
                return;
            }
            else {
                a = result;
                display.textContent = result;
                currentValue = '';
    
                // Record new operator
                let classes = operator.classList;
                operatorSwitch(classes);                    
            }
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
    // remove last character from current value
    // update display
}

function positiveNegative() {
    // if larger than 0, multiply by negative 1
    // if smaller than 0, multiply by negative 1 to get positive
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

function operatorSwitch(classes) {
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
        console.log('Caught a nulls')
        return;
    }
    else {
        console.log('operating')
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

