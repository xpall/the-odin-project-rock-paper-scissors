const buttons = document.querySelectorAll('.btn')
const resultParagraph = document.querySelector('#announcer');
const finalWinner = document.querySelector('#finalWinner')
const winCount = document.querySelector('#wins');
const loseCount = document.querySelector('#loses');
const tiesCount = document.querySelector('#ties');

buttons.forEach(button => {button.addEventListener('click', e => {
  playCurrentRound(e);
})});

function playCurrentRound(e) {
  console.log(e.target)
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
  if (win > lose) {
    alert(`You win! With the total of ${win} points!\nRefresh the page to load a new game.`);
  } else if (win < lose) {
    alert(`You lose! Computer wins with ${lose} points!\nRefresh the page to load a new game.`);
  } else {
    alert(`It\'s a tie!`)
  }
}
