const words = ["python", "gemini", "google", "developer", "terminal"];
let secretWord;
let guessedLetters;
let incorrectGuesses;
let maxIncorrectGuesses;

const settingsContainer = document.getElementById("settings-container");
const gameContainer = document.getElementById("game-container");
const maxGuessesInput = document.getElementById("max-guesses-input");
const startGameButton = document.getElementById("start-game-button");

const wordDisplay = document.getElementById("word-display");
const remainingGuessesSpan = document.getElementById("remaining-guesses");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset-button");

let fireworks;
let fireworksCanvas;


function initializeGame() {
    const maxGuesses = parseInt(maxGuessesInput.value, 10);
    if (isNaN(maxGuesses) || maxGuesses < 0) {
        alert("Please enter a valid number (0 or more).");
        return;
    }

    maxIncorrectGuesses = maxGuesses === 0 ? Infinity : maxGuesses;

    settingsContainer.style.display = 'none';
    gameContainer.style.display = 'block';

    if (typeof window.Fireworks === 'object' && typeof window.Fireworks.default === 'function') {
        fireworksCanvas = document.getElementById('fireworks-canvas');
        fireworks = new Fireworks.default(fireworksCanvas, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.05,
            friction: 0.97,
            gravity: 1.5,
            particles: 75,
            explosion: 8,
            mouse: {
                click: true,
                move: false,
                max: 1
            }
        });
    } else {
        console.warn("Fireworks library not loaded or not a constructor.");
    }

    startGame();
}

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = new Set();
    incorrectGuesses = 0;

    wordDisplay.textContent = "_ ".repeat(secretWord.length);
    remainingGuessesSpan.textContent = maxIncorrectGuesses === Infinity ? "Unlimited" : maxIncorrectGuesses;
    message.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    resetButton.style.display = 'none';
    guessInput.focus();
}

function updateDisplay() {
    let display = "";
    for (const letter of secretWord) {
        display += guessedLetters.has(letter) ? letter : "_";
        display += " ";
    }
    wordDisplay.textContent = display.trim();
}

function checkWin() {
    if (!wordDisplay.textContent.includes("_")) {
        message.textContent = `Congratulations! You guessed the word: ${secretWord}`;
        if (fireworksCanvas && fireworks) {
            fireworksCanvas.style.display = 'block';
            fireworks.start();
            setTimeout(() => {
                fireworks.stop();
                fireworksCanvas.style.display = 'none';
            }, 3000); // 3秒後停止煙火並隱藏畫布
        }
        endGame();
        return true;
    }
    return false;
}

function checkLoss() {
    if (incorrectGuesses >= maxIncorrectGuesses) {
        message.textContent = `Game Over! The word was: ${secretWord}`;
        endGame();
        return true;
    }
    return false;
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    resetButton.style.display = 'block';
}

function handleGuess() {
    const guess = guessInput.value.toLowerCase();
    guessInput.value = "";

    if (!guess || !/^[a-z]$/.test(guess)) {
        message.textContent = "Invalid input. Please enter a single letter.";
        return;
    }

    if (guessedLetters.has(guess)) {
        message.textContent = `You already guessed '${guess}'.`;
        return;
    }

    guessedLetters.add(guess);

    if (secretWord.includes(guess)) {
        message.textContent = `Correct! '${guess}' is in the word.`
        updateDisplay();
        checkWin();
    } else {
        incorrectGuesses++;
        if (maxIncorrectGuesses !== Infinity) {
            const remaining = maxIncorrectGuesses - incorrectGuesses;
            remainingGuessesSpan.textContent = remaining;
            message.textContent = `Incorrect! '${guess}' is not in the word. You have ${remaining} guesses left.`;
        } else {
            message.textContent = `Incorrect! '${guess}' is not in the word.`;
        }
        checkLoss();
    }
}

function resetGame() {
    gameContainer.style.display = 'none';
    settingsContainer.style.display = 'block';
}

startGameButton.addEventListener('click', initializeGame);
guessButton.addEventListener("click", handleGuess);
guessInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        handleGuess();
    }
});
resetButton.addEventListener('click', resetGame);