let display = document.querySelector('.display');
let currentValue = '';
let a = 0;
let b = 0;
let o = '';

// Digits listener
const digits = document.querySelectorAll('.digit');
digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        let value = digit.textContent;
        currentValue += value;
        display.textContent = currentValue;
    })
})

// Operantor listener 
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        let classes = operator.classList;
        operatorSwitch(classes);
        a = parseInt(currentValue);
        currentValue = '';
    })
})

// Equal listener
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    display.textContent = ''
    b = parseInt(currentValue);
    let result = operate(a, b, o);
    display.textContent = result;

    a = parseInt(result);
    b = 0;
    currentValue = result;
})

// Clear listener
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    a = 0;
    b = 0;
    currentValue = '';
})

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
    let operator = o;
    console.log(a, o, b)
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
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

