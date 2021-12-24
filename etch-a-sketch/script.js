let slider = document.getElementById('gridsize');
let size = slider.defaultValue;
let colorInput = document.getElementById('color');

let mode = 0;

const frame = document.querySelector('.frame');
const reset = document.querySelector('.reset');

makegrid();

// Events

//Grid slider
slider.addEventListener('click', () => {
    size = slider.value;
    makegrid();
})

// Clean function
reset.addEventListener('click', clean)

// Colour picker mode change
colorInput.addEventListener('click', () => {
    mode = 0;
})

// Hover listener
frame.onmouseover = function(event) {
    let target = event.target.closest('div');
    if (mode == 1) {
        drawrdn(target);
    }
    else if (mode == 0) {
        draw(target);
    }
}

function clean() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = null;
    })
}

function set() {
    mode = 0;
}

function setrandom() {
    mode = 1;
}

function draw(a) {
    color = colorInput.value;
    a.style.backgroundColor = color;
}

function drawrdn(a) {
    let h = Math.floor(Math.random() * 360);
    let s = Math.floor(Math.random() * 60);
    let l = Math.floor(Math.random() * (100-30) + 30);
    let alpha = 1;
    a.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
}

function makegrid() {
    frame.replaceChildren();

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        frame.appendChild(row);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }
}