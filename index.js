const buttons = document.querySelectorAll('.buttonContainer')
// const rockButton = document.querySelector('#rock');
// const paperButton = document.querySelector('#paper');
// const scissorsButton = document.querySelector('#scissors');
const resultParagraph = document.querySelector('#announcer');
const finalWinner = document.querySelector('#finalWinner')
const winCount = document.querySelector('#wins');
const loseCount = document.querySelector('#loses');
const tiesCount = document.querySelector('#ties');

buttons.forEach(button => {button.addEventListener('click', e => {
  playCurrentRound(e);
})});

// rockButton.addEventListener('click', e => {
//   playCurrentRound(e);
// });

// paperButton.addEventListener('click', e => {
//   playCurrentRound(e);
// });

// scissorsButton.addEventListener('click', e => {
//   playCurrentRound(e);
// });

function playCurrentRound(e) {
  let playerChoice= (e.target.id).toLowerCase();
  let computerChoice = computerSelection();
  let result = (playRound(playerChoice, computerChoice));
  console.log(`${playerChoice} vs ${computerChoice}`);
  resultParagraph.textContent = result;
  logScore(result);
};

let winsTally = 0;
let losesTally = 0;
let tiesTally = 0;

function logScore(result) {
  if (result.includes('win')) {
    winsTally += 1;
  } else if (result.includes('lose')) {
    losesTally += 1;
  } else {
    tiesTally += 1;
  }
  winCount.textContent = winsTally;
  loseCount.textContent = losesTally;
  tiesCount.textContent = tiesTally;
  let roundTally = winsTally + losesTally + tiesTally;
  if (roundTally >= 5) {
    announceWinner(winsTally, losesTally);
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'You lose! Paper beats rock.';
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats scissors.';
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 'You win! Paper beats rock.';
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'You lose! Scissors beat paper.';
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 'You win! Scissors beat paper.';
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'You lose! Rock beats scissors.';
  } else {
    return 'It\'s a tie.';
  }
};

function computerSelection() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let choice = (choices[Math.floor(Math.random() * choices.length)]);
  return choice.toLocaleLowerCase();
};

function announceWinner(win, lose) {
  (win > lose) 
    ? alert(`You win! With the total of ${win} points!`)
    : alert(`You lose! Computer wins with ${lose} points!`)
}
