
const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function result(computerSelection, playerSelection) {
    playerSelection = capitalise(playerSelection);

    if (playerSelection === computerSelection) {
        return 0;
    } 

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return 1;
        }
        return 2;
    }

    if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            return 2;
        }
        return 1;
    }

    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return 1;
        }
        return 2;
    }
}

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt('Enter your choice: Rock-Paper-Scissors');
    return result(computerSelection, playerSelection);
}

function game() {
    let winner = [0, 0, 0];
    for (let i = 0; i < 5; i++) {
        winner[playRound()]++;
    }
    if (winner[1] > winner[2]) {
        alert('player won');
    } else {
        alert('computer won');
    }
    alert(winner[1] + '/' + winner[0] + '/' + winner[2] + ' player wins/draws/computer wins');
}

game();