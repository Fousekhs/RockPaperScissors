
const choices = ['Rock', 'Paper', 'Scissors']

const btns = document.querySelectorAll("img");

btns.forEach(
    function(btn) {
        btn.addEventListener("mouseover", () => {
            btn.classList.add("onmouse");
            const choice = document.querySelector("#choice");
            choice.textContent = btn.id;
        })

        btn.addEventListener("mouseout", () => {
            btn.classList.remove("onmouse");
        })

        btn.addEventListener("click", () => {
            const table = document.querySelector(".pick_table");
            table.hidden = true;
            const container = document.querySelector(".container");

            const result = showResult(btn.id);
            container.appendChild(result);
        })
    }
)

function showResult(playerChoice) {
    const result = document.createElement("div");

    const presented = document.createElement("div");
    presented.classList.add("buttons");

    presented.appendChild(getElementByChoice(playerChoice));

    const vs = document.createElement("div");
    vs.style = "font-weight: 700; font-size: large";
    vs.textContent = "VS";
    presented.appendChild(vs);

    const cpuChoice = getComputerChoice(); 
    presented.appendChild(getElementByChoice(cpuChoice));
    
    result.appendChild(presented);

    const table = document.createElement("table");
    table.style = "width: 100%; text-align: center;"
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");

    const match = document.createElement("div");
    match.style = "font-weight: 700; font-size: large";

    const gameResult = getResult(cpuChoice, playerChoice);
    if (gameResult == 0) {
        match.textContent = "Draw";
    } else if (gameResult == 1) {
        match.textContent = "Player wins";
    } else {
        match.textContent = "Computer wins";
    }
    
    td1.appendChild(match);
    tr.appendChild(td1);

    const td2 = document.createElement("td");

    const button = document.createElement("button");
    button.textContent = "Play Again";
    result.appendChild(button);
    
    button.addEventListener("click", () => {
        location.reload();
    })

    td2.appendChild(button);
    tr.appendChild(td2);
    table.appendChild(tr);

    result.appendChild(table);


    return result;

}

function getElementByChoice(choice) {
    const img = document.createElement("img");
    img.src = "images/" + choice.toLowerCase() + ".png";
    img.alt = choice;
    return img; 
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function getResult(computerSelection, playerSelection) {
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