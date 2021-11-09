// Odin's Rock Paper Scissors

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

function userPlay() {
    let choice = ""; 
    let validChoice = ["rock", "paper", "scissors"]
    while (!validChoice.some(v => choice.includes(v))) {
        choice = prompt("Rock, paper, scissors? Go!").toLowerCase();
    }
    return choice;
}

function playRound() {
    let choiceComp = computerPlay();
    let choiceUser = userPlay();

    if (choiceComp == choiceUser) {
        document.querySelector(".message").innerHTML = "Tie.";
        console.log("Tie.");
        return "tie";
    }
    else if (choiceComp == "rock")
        return (choiceUser == "paper") ? messageWin(choiceComp, choiceUser): messageLose(choiceComp, choiceUser);
    else if (choiceComp == "paper")
        return (choiceUser == "scissors") ? messageWin(choiceComp, choiceUser): messageLose(choiceComp, choiceUser);
    else if (choiceComp == "scissors")
        return (choiceUser == "rock") ? messageWin(choiceComp, choiceUser): messageLose(choiceComp, choiceUser);
    
}

function game() {
    let compWins = 0;
    let userWins = 0;
    for (i = 0; i < 5; i++) {
        result = playRound();
        if (result == "win") {
            userWins += 1 
        }
        else if (result == "lose"){
            compWins += 1
        }
        console.log(i);
    }
    
    if (userWins > compWins) {
        console.log("Nice one! You're the overall winner!")
    } 
    else {
        console.log("The computer won... as it should. PCMASTERRACE")
    }
}

function messageWin (choiceComp, choiceUser) {
    document.querySelector(".message").innerHTML = `You Win. ${ choiceUser } beats ${ choiceComp }!`;
    console.log(`You Win. ${ choiceUser } beats ${ choiceComp }!`);
    return "win";
}

function messageLose (choiceComp, choiceUser) {
    document.querySelector(".message").innerHTML = `You Lose. ${ choiceComp } beats ${ choiceUser }!`;
    console.log(`You Lose. ${ choiceComp } beats ${ choiceUser }!`)
    return "lose";
}

