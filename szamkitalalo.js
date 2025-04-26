let guessListContainer = document.querySelector('.js-guess-container');
let currentGuessField = document.querySelector('.js-guess-field');
let newGameButton = document.querySelector('.js-new-game-button');
let guessSubmitButton = document.querySelector('.js-submit-guess');

let target;

function generateTarget() {
    return Math.floor(Math.random()*100)+1;
}

function resetGame() {
    // korábbi tippek törlése
    guessListContainer.innerHTML = '';
    // input mező tartalmának törlése
    currentGuessField.value = '';
}

function startGame() {
    resetGame()
    target = generateTarget();
}

function submitGuess(event) {
    event.preventDefault();
    let guessValue = Number(currentGuessField.value);

    console.log(guessValue, typeof guessValue);
    if (validateGuess()) {
        alert('klikk');
    }
}

function addGuessValidation() {
    currentGuessField.classList.add('is-invalid');
}

function removeGuessValidation() {
    currentGuessField.classList.remove('is-invalid');
}

function validateGuess() {
    let guessValue = Number(currentGuessField.value);
    let isGuessInteger = Number.parseFloat(guessValue) === Number.parseInt(guessValue);
    if (!isGuessInteger || isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
        addGuessValidation();
        return false;
    }
    removeGuessValidation();
    return true;
}

startGame();
newGameButton.addEventListener('click', startGame);
guessSubmitButton.addEventListener('click', submitGuess);
currentGuessField.addEventListener('focus', removeGuessValidation);
currentGuessField.addEventListener('change', validateGuess);


