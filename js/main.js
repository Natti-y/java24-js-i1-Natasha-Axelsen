// Variables
let playerName = "";
let totalScore = 0;
let roundScore = 0;
let rounds = 0;

// HTML
// Input
const playerInput = document.getElementById("playerName");

// Buttons
const startButton = document.getElementById("startGame");
const rollButton = document.getElementById("rollDice");
const holdButton = document.getElementById("holdScore");
const restartButton = document.getElementById("restartGame");


// Display
const playerDisplay = document.getElementById("displayPlayer");
const roundScoreDisplay = document.getElementById("roundScore");
const totalScoreDisplay = document.getElementById("totalScore");
const roundsDisplay = document.getElementById("rounds");
const diceRollDisplay = document.getElementById("diceRoll");
const messageDisplay = document.getElementById("message");

// Disable game buttons
rollButton.disabled = true;
holdButton.disabled = true;
restartButton.style.display = "none";


// Start Game
startButton.addEventListener("click", () => {
    playerName = playerInput.value.trim();

    if(playerName){
        playerDisplay.textContent = `Player: ${playerName}`;
        totalScore = 0;
        roundScore = 0;
        rounds = 0;

        // Enable game buttons
        rollButton.disabled = false;
        holdButton.disabled = false;

        // Show restart button
        restartButton.style.display = "inline-block"; 

        updateUI();
    }
    else{
        alert("You need to write your name to start the game!");
    }
});

// Throw Dice
rollButton.addEventListener("click", () => {
    let dice = Math.floor(Math.random() * 6) + 1;
    diceRollDisplay.textContent = dice;

    if(dice === 1) {
        roundScore = 0; 
        rounds++;
        messageDisplay.textContent = `You rolled a one! The round restarts.`;
    }
    else{
        roundScore += dice;
        messageDisplay.textContent = `You rolled a ${dice}.`;
    }

    updateUI();
});

// Hold Score
holdButton.addEventListener("click", () => {
    totalScore += roundScore;
    roundScore = 0;
    rounds++;

    if(totalScore >= 100) {
        messageDisplay.textContent = `${playerName} won the game! You won in ${rounds} rounds!`;
        rollButton.disabled = true;
        holdButton.disabled = true;
    }
    else{
        messageDisplay.textContent = "Points saved, starting next round...!";
    }

    updateUI();
});

// Restart Game
restartButton.addEventListener("click", () => {
    playerName = "";
    totalScore = 0;
    roundScore = 0;
    rounds = 0;

    // Clear input
    playerInput.value = ""; 
    playerDisplay.textContent = "";
    diceRollDisplay.textContent = "";
    messageDisplay.textContent = "Game has been reset. Please enter your name to start.";
    
    // Disable game buttons again
    rollButton.disabled = true;
    holdButton.disabled = true;

    updateUI();
});


// Update UI
function updateUI() {
    totalScoreDisplay.textContent = totalScore;
    roundScoreDisplay.textContent = roundScore;
    roundsDisplay.textContent = rounds;
}
