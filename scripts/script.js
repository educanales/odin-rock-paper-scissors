let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const buttons = document.querySelectorAll('.btn');

const roundResult = document.querySelector('.round-result');
const roundWinner = document.querySelector('.round-winner');

const playerScore = document.querySelector('.player-score');
const comScore = document.querySelector('.com-score');

const modal = document.querySelector('.modal');
const resetBtn = document.querySelector('.reset-btn');
const gameResult = document.querySelector('.game-result');
const finalScore = document.querySelector('.final-score');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    roundCounter++;
    playGame(button);
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
  comSelection.textContent = (`COM choose: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice(selection) {
  let humanChoice = selection;
  const playerSelection = document.querySelector('.player-selection');
  playerSelection.textContent = (`Player choose: ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {  
  switch (true) {
    case humanChoice === computerChoice:
      roundResult.textContent = 'Empate';
      roundWinner.textContent = '';
      break;
    case humanChoice === 'rock' && computerChoice === 'scissors':
      humanScore++;
      roundResult.textContent = 'Round Winner: Human';
      roundWinner.textContent = 'Rock beats Scissors';
      break;
    case humanChoice === 'rock' && computerChoice === 'paper':
      computerScore++;
      roundResult.textContent = 'Round Winner: Computer';
      roundWinner.textContent = 'Paper beats Rock';
      break;
    case humanChoice === 'paper' && computerChoice === 'rock':
      humanScore++;
      roundResult.textContent = 'Round Winner: Human';
      roundWinner.textContent = 'Paper beats Rock';
      break;
    case humanChoice === 'paper' && computerChoice === 'scissors':
      computerScore++;
      roundResult.textContent = 'Round Winner: Computer';
      roundWinner.textContent = 'Scissors beats Paper';
      break;
    case humanChoice === 'scissors' && computerChoice === 'paper':
      humanScore++;
      roundResult.textContent = 'Rounde Winner: Human';
      roundWinner.textContent = 'Scissors beats Paper';
      break;
    case humanChoice === 'scissors' && computerChoice === 'rock':
      computerScore++;
      roundResult.textContent = 'Round Winner: Computer';
      roundWinner.textContent = 'Rock beats Scissors';
      break;
    default:
      roundResult.textContent = 'No winner';
      roundWinner.textContent = 'You probably entered an invalid choice';
  }
  playerScore.textContent = humanScore;
  comScore.textContent = computerScore;
}

resetBtn.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  playerScore.textContent = humanScore;
  comScore.textContent = computerScore;
  roundResult.textContent = 'Choose your weapon';
  roundWinner.textContent = 'Best of 5 rounds wins the game';
  modal.close();
});

function playGame(button) {  
  playRound(getHumanChoice(button.id), getComputerChoice());
  if (roundCounter >= 5 && humanScore > computerScore) {
    gameResult.textContent = 'Game Winner: Human';
    finalScore.textContent = `Human: ${humanScore} COM: ${computerScore}`;
    roundCounter = 0;
    modal.showModal();
  } else if (roundCounter >= 5 && humanScore < computerScore) {
      gameResult.textContent = 'Game Winner: Computer';
      finalScore.textContent = `Human: ${humanScore} COM: ${computerScore}`;
      roundCounter = 0;
      modal.showModal();
    }    
}
