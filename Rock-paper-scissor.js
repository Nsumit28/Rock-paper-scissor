let score = JSON.parse(localStorage.getItem('score')) || {       /*If the left side is truthy it will display that or if there is value stored it will display but if it doesnt have any value then the other part will be executed*/
wins:0,
losses:0,
ties:0,
};

/*This part and the upper part do the same thing bu the upper one is the short cut   

if(!score){      /* this can be also done by score = null they  both do the same thing 
score ={
 wins:0,
 losses:0,
 ties:0,
};
}
*/

updateScoreElement();

function playGame(playerMove) {
 const computerMove = pickComputerMove();

let result = '';


if (playerMove === 'scissors') {
if (computerMove === 'rock') {
 result = 'You lose.';
} else if (computerMove === 'paper') {
 result = 'You win.';
} else if (computerMove === 'scissors') {
 result = 'Tie.';
}

} else if (playerMove === 'paper') {
if (computerMove === 'rock') {
 result = 'You win.';
} else if (computerMove === 'paper') {
 result = 'Tie.';
} else if (computerMove === 'scissors') {
 result = 'You lose.';
}

} else if (playerMove === 'rock') {
if (computerMove === 'rock') {
 result = 'Tie.';
} else if (computerMove === 'paper') {
 result = 'You lose.';
} else if (computerMove === 'scissors') {
 result = 'You win.';
}
}

if (result === 'You win.') {
score.wins += 1;
} else if (result === 'You lose.') {
score.losses += 1;
} else if (result === 'Tie.') {
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = ` You
 <img src="${playerMove}-emoji.png"class="move-icon">
 <img src="${computerMove}-emoji.png" class="move-icon">
  Computer`;

alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;        
}

function pickComputerMove() {
const randomNumber = Math.random();

let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = 'rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = 'paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = 'scissors';
}

return computerMove;
}