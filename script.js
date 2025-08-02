let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset");
let messageDiv = document.getElementById("message");
let title = document.getElementById("title");
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleBoxClick(event) {
    const clickedBox = event.target;
    const boxIndex = Array.from(boxes).indexOf(clickedBox);

    if (gameState[boxIndex] !== "" || !gameActive) {
        return;
    }

    gameState[boxIndex] = currentPlayer;
    clickedBox.textContent = currentPlayer;

    checkForWinner();
}
function checkForWinner() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] === "" || gameState[b] === "" || gameState[c] === "") {
            continue;
        }
        if (gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        messageDiv.innerHTML = `<h1>${currentPlayer} Wins!</h1>`;
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        messageDiv.innerHTML = "<h1>It's a Draw!</h1>";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    title.textContent = `${currentPlayer}'s Turn`;
}
function resetGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach(box => {
        box.textContent = "";
    });
    messageDiv.innerHTML = "<h1>Welcome Player!</h1>";
    title.textContent = "Tic Tac Toe";
}
boxes.forEach(box => {
    box.addEventListener("click", handleBoxClick);
}
);
resetButton.addEventListener("click", resetGame);
document.addEventListener("DOMContentLoaded", () => {
    title.textContent = "X's Turn";
    messageDiv.innerHTML = "<h1>Welcome Player!</h1>";
});
// This code handles the Tic Tac Toe game logic, including player turns, checking for winners, and resetting the game.  