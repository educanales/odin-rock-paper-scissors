let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const buttons = document.querySelectorAll('.btn');

const roundResult = document.querySelector('.round-result');
const roundWinner = document.querySelector('.round-winner');

const playerScore = document.querySelector('.player-score');
const comScore = document.querySelector('.com-score');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(getHumanChoice(button.id), getComputerChoice());
    // playGame();
  });
})

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);   
  let computerChoice = '';
  const comSelection = document.querySelector('.com-selection');
  if (randomChoice === 1) {
    computerChoice = 'rock';
  } else if (randomChoice === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors'
  }
  // console.log(computerChoice);
  comSelection.textContent = (`COM choose: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice(selection) {
  let humanChoice = selection;
  const playerSelection = document.querySelector('.player-selection');
  // console.log(humanChoice);
  playerSelection.textContent = (`Player choose: ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {  
  switch (true) {
    case humanChoice === computerChoice:
      // console.log('Empate');
      roundResult.textContent = 'Empate';
      roundWinner.textContent = '';
      break;
    case humanChoice === 'rock' && computerChoice === 'scissors':
      humanScore++;
      // console.log('Round Winner: Human, Rock beats Scissors');
      roundResult.textContent = 'Round Winner: Human';
      roundWinner.textContent = 'Rock beats Scissors';
      break;
    case humanChoice === 'rock' && computerChoice === 'paper':
      computerScore++;
      // console.log('Round Winner: Computer, Paper beats Rock');
      roundResult.textContent = 'Round Winner: Computer';
      roundWinner.textContent = 'Paper beats Rock';
      break;
    case humanChoice === 'paper' && computerChoice === 'rock':
      humanScore++;
      // console.log('Round Winner: Human, Paper beats Rock');
      roundResult.textContent = 'Round Winner: Human';
      roundWinner.textContent = 'Paper beats Rock';
      break;
    case humanChoice === 'paper' && computerChoice === 'scissors':
      computerScore++;
      // console.log('Round Winner: Computer, Scissors beats Paper');
      roundResult.textContent = 'Round Winner: Computer';
      roundWinner.textContent = 'Scissors beats Paper';
      break;
    case humanChoice === 'scissors' && computerChoice === 'paper':
      humanScore++;
      // console.log('Rounde Winner Human, Scissors beats Paper');
      roundResult.textContent = 'Rounde Winner: Human';
      roundWinner.textContent = 'Scissors beats Paper';
      break;
    case humanChoice === 'scissors' && computerChoice === 'rock':
      computerScore++;
      // console.log('Round Winner: Computer, Rock beats Scissors');
      roundResult.textContent = 'Round Winner: Computer';
      roundWinner.textContent = 'Rock beats Scissors';
      break;
    default:
      // console.log('No Winner, you probably entered an invalid choice')
      roundResult.textContent = 'No winner';
      roundWinner.textContent = 'You probably entered an invalid choice';
  }
  playerScore.textContent = humanScore;
  comScore.textContent = computerScore;
}

/*
function playGame() {  
  for (let i = 0; i < 5; i++) {
    // playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    
  }
  if (humanScore > computerScore) {
    console.log('Game Winner: Human');
    roundResult.textContent = 'Game Winner: Human'
  } else if (humanScore < computerScore) {
      console.log('Game Winner: Computer')
      roundResult.textContent = 'Game Winner: Computer';
    } else {
        console.log('Desempate');
        roundResult.textContent = 'Empate'
        // playRound();
      }
}
*/