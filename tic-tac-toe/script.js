const main = document.querySelector(".main");

// Player factory
const playerType = (name, mark, pc) => {
    return {name, mark, pc};
};


// Create players
const player1 = playerType("Player One", "X", false);
const player2 = playerType("Player Two", "O", true);
let gameStatus = "none";
let currentPlayer = player1;

// Gameboard module
const gameboard = (function() {
    const board = document.querySelector(".board");
    const cells = document.querySelectorAll(".cell");
    let boardArray = ["", "", "", "", "", "", "" ,"", ""];

    // Winning combo
    let winArray = [
        [1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 1, 0, 1, 0, 1, 0, 0]
    ];

    // Check win
    function checkWin() {

        
    }


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
        let player = currentPlayer;

        // If empty, make it the player's mark
        if (!mark) {
            boardArray[i] = player.mark;
        }
        gameController.swapPlayer();
        showCellStatus();
        if (checkWin) {
            gameFin();
        };
    }
    
    // Reset array
    function reset() {
        for (let i = 0; i < cells.length; i++) {
            boardArray[i] = null;
            cells[i].textContent = null;
        }
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
        reset,
        checkWin,
    }
})();

// Display module
const gameController = (function() {

    const reset = document.querySelector(".reset");
    const message = document.queryCommandIndeterm(".message");

    // Game finish
    function gameFin() {
        message.textContent = "Done!";
    }

    // Turn displayer
    function turnDisplay() {
        const turn = document.querySelector(".turnPlayer")
        turn.textContent = currentPlayer.name;
    }

    // Reset listener
    function resetListener() {
        reset.addEventListener("click", (event) => {
            gameboard.reset();
        })
    }

    // Swap players
    function swapPlayer() {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
        return currentPlayer;
    }

    // Initialization
    function init() {
        gameboard.showCellStatus();
        gameboard.cellListener();
        gameController.resetListener();
        gameController.turnDisplay();
    }

    return {
        init,
        resetListener,
        swapPlayer,
        turnDisplay,
    }
})();

// Main initialization
gameController.init();