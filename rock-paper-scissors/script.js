// Odin's Rock Paper Scissors

let userWins = 0;
let compWins = 0;

const roundMessage = document.querySelector('.roundMessage');
const gameMessage = document.querySelector('.gameMessage');
const userScore = document.querySelector('.userScore');
const compScore = document.querySelector('.compScore');

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
   location.reload();
});

const buttons = document.querySelectorAll('.choices');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       button.classList.add('active');
       userPlay = button.value;
       playRound(computerPlay(), userPlay);
    });
});


// Remove transition
buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  this.classList.remove('active');
}

// Check if userScore or compScore has changed

compScore.textContent = compWins;
userScore.textContent = userWins;

function computerPlay() {
    let select =  Math.floor(Math.random() * 3)

    switch (select) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(choiceComp, choiceUser) {

    if (choiceComp == choiceUser) {
        messageTie();
        return "tie";
    }
    else if (choiceComp == "rock")
        return (choiceUser == "paper") ? messageWin(choiceComp, choiceUser): messageLose(choiceComp, choiceUser);
    else if (choiceComp == "paper")
        return (choiceUser == "scissors") ? messageWin(choiceComp, choiceUser): messageLose(choiceComp, choiceUser);
    else if (choiceComp == "scissors")
        return (choiceUser == "rock") ? messageWin(choiceComp, choiceUser): messageLose(choiceComp, choiceUser);

}

// Messages

function messageWin (choiceComp, choiceUser) {
    document.querySelector(".roundMessage").textContent = `You Win. ${ choiceUser } beats ${ choiceComp }!`;
    userWins += 1;
    userScore.textContent = userWins;
    if (userWins == 5) {
        gameWon()
    }
    return "win";
}

function messageLose (choiceComp, choiceUser) {
    document.querySelector(".roundMessage").textContent = `You Lose. ${ choiceComp } beats ${ choiceUser }!`;
    compWins += 1;
    compScore.textContent = compWins;
    if (compWins == 5) {
        gameLost()
    }
    return "lose";
}

function messageTie () {
    document.querySelector(".roundMessage").textContent = `It's a tie.`;
    return "tie";
}

function gameWon() {
    document.querySelector(".gameMessage").textContent = `Nice one. You won! Refresh to play again.`;
    buttons.forEach((button) => {
        button.disabled = true;
    });
    reset.style.visibility = "visible";
}

function gameLost() {
    document.querySelector(".gameMessage").textContent = `Bad luck. Refresh to play again.`;
    buttons.forEach((button) => {
        button.disabled = true;
    });
    reset.style.visibility = "visible";

}

