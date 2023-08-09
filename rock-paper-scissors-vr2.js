function main() {
  return game();
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissor'];
  let choice = (choices[Math.floor(Math.random() * choices.length)]);
  return choice.toLocaleLowerCase();
}

function computerSelection() {
  return getComputerChoice();
}

function playerSelection() {
  let choice = prompt('Rock, Paper, or Scissors?');
  return choice.toLowerCase(); 
}

// Writing playRound using nested ifs

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == 'rock' && computerSelection == 'paper') {
//     return 'You lose! Paper beats Rock';
//   } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
//     return 'You win! Rock beats Scissors';
//   } else if (playerSelection == 'paper' && computerSelection == 'rock') {
//     return 'You win! Paper beats Rock';
//   } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
//     return 'You lose! Scissors beat Paper';
//   } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
//     return 'You win! Scissors beat Paper';
//   } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
//     return 'You lose! Rock beats Scissors';
//   } else {
//     return 'It\'s a tie'
//   }
// }  

// Writing playRound using switch and ternary

function playRound(playerSelection, computerSelection) {
  switch(playerSelection) {
    case 'rock':
      return (computerSelection == 'paper') ? 'You lose! Paper beats rock'
        : (computerSelection == 'scissors')
          ? 'You win! Rock beats scissors'
          : 'It\'s a tie.'
    case 'paper':
      return (computerSelection == 'scissors') ? 'You lose! Scissors beat rock'
        : (computerSelection == 'rock')
          ? 'You win! Paper beats rock'
          : 'It\'s a tie.'
    case 'scissors':
      return (computerSelection == 'rock') ? 'You lose! Rock beats scissors'
        : (computerSelection == 'paper')
          ? 'You win! Scissors beat paper'
          : 'It\'s a tie.'
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let ties = 0;
  for (i = 0; i < 5; i++) {
    gameResult = playRound(playerSelection(), computerSelection());
    console.log(gameResult)
    if (gameResult[4] == 'w') {
      playerScore += 1;
    } else if (gameResult[4] == 'l') {
      computerScore += 1;
    } else {
      ties += 1;
    }
  }
  return `Five rounds are over, you got ${playerScore} wins and ${(5 - playerScore)} lose(s). Number of ties are ${ties}.`
}

main();
