const main = document.querySelector(".main");

// Gameboard module
const gameboard = (function() {
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");

    let boardArray = ["X", "", "", "O", "X", "", "X" ,"O", "X"];

    // Winning combo
    let winArray = [];

    // Cell listener
    function cellListener() {
        board.addEventListener("click", (event) => {
            let cell = event.target;
            updateCells(cell);
        })
    }

    // Show cell status
    function showCellStatus() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = boardArray[i];
        }
    }

    function updateCells(cell) {
        const i = cell.getAttribute("data-value");
        const mark = boardArray[i];

        // If empty, make it the player's mark
        if (!mark) {
            boardArray[i] = player1.mark;
        }
        showCellStatus();
    }
    
    // Game over function
    function gameOver() {
        // if winning combo is achieved in board array
    }

    return {
        cellListener,
        showCellStatus,
        updateCells,
        gameOver,
    }
})();

// Display module
const displayController = (() => {

    // Initialization
    function init() {
        gameboard.showCellStatus();
        gameboard.cellListener();
    }

    return {
        init,
    }
})();

// Player factory
const playerType = (name, turn, mark) => {
    return {name, turn, mark};
};

// Create players
const player1 = playerType("Player One", 0, "X", false);
const player2 = playerType("Player Two", 0, "O", true);

// Main initialization
displayController.init();