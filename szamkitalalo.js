let target;

function generateTarget() {
    return Math.floor(Math.random()*100)+1;
}

function startGame() {
    target = generateTarget();
}

startGame();

// document.getElementById('newGame').addEventListener('click', (event) => {
//     event.preventDefault();
//     generateNumber();
// });

// document.onload = generateNumber();