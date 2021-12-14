let slider = document.getElementById('gridsize');
let size = slider.defaultValue;

let mode = 0;
let color = '#ff4017';

const frame = document.querySelector('.frame');
const reset = document.querySelector('.reset');

makegrid();


//Grid slider
slider.addEventListener('click', () => {
    size = slider.value;
    makegrid();
})

//Colour picker
colorInput = document.getElementById('color');

colorInput.addEventListener('click', () => {
    color = colorInput.value;
})

reset.addEventListener('click', clean)

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