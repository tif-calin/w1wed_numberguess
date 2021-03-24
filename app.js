// import functions and grab DOM elements
import { compareNumbers, displayHearts } from './utils.js';

const btnPlay = document.getElementById('button-main');
const btnGuess = document.getElementById('button-guess');
const divGame = document.getElementById('game');
const inpGuess = document.getElementById('input-guess');
const guessResult = document.getElementById('guess-result');

// initialize state
const gameState = {
    correctAnswer: null,
    livesLeft: null
};
const pastScores = [];

// set event listeners to update state and DOM
const didLose = () => {
    if (!gameState['livesLeft']) {
        btnGuess.disabled = true;
        guessResult.textContent = "You lost :(";
        btnPlay.classList.remove('hidden');
    }
};

btnPlay.addEventListener('click', () => {
    // set state
    gameState['livesLeft'] = 4;
    gameState['correctAnswer'] = Math.ceil(Math.random() * 10);

    // hide button, show game
    guessResult.textContent = '';
    btnPlay.classList.add('hidden');
    divGame.classList.remove('hidden');
    displayHearts(gameState['livesLeft']);

    // change button text
    btnPlay.textContent = 'Play Again!';
    btnGuess.disabled = false;
});

btnGuess.addEventListener('click', () => {
    const guess = Number(inpGuess.value);
    const result = compareNumbers(gameState['correctAnswer'], guess);

    guessResult.textContent = result;

    if (result === 'correct') {
        btnPlay.classList.remove('hidden');
        btnGuess.disabled = true;
    } else {
        gameState['livesLeft']--;
    }

    displayHearts(gameState['livesLeft']);
    didLose();
});