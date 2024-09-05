let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);   
  let computerChoice = '';
  if (randomChoice === 1) {
    computerChoice = 'rock';
  } else if (randomChoice === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors'
  }
  console.log(computerChoice)
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(' Choose between rock, paper, scissors ')
  return humanChoice;
  // console.log(humanChoice);
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  switch (true) {
    case humanChoice === computerChoice:
      console.log('Empate');
      break;
    case humanChoice === 'rock' && computerChoice === 'scissors':
      humanScore++;
      console.log('Round Winner: Human, Rock beats Scissors');
      break;
    case humanChoice === 'rock' && computerChoice === 'paper':
      computerScore++;
      console.log('Round Winner: Computer, Paper beats Rock');
      break;
    case humanChoice === 'paper' && computerChoice === 'rock':
      humanScore++;
      console.log('Round Winner: Human, Paper beats Rock');
      break;
    case humanChoice === 'paper' && computerChoice === 'scissors':
      computerScore++;
      console.log('Round Winner: Computer, Scissors beats Paper');
      break;
    case humanChoice === 'scissors' && computerChoice === 'paper':
      humanScore++;
      console.log('Rounde Winner Human, Scissors beats Paper');
      break;
    case humanChoice === 'scissors' && computerChoice === 'rock':
      computerScore++;
      console.log('Round Winner: Computer, Rock beats Scissors');
      break;
    default:
      console.log('No Winner, you probably entered an invalid choice')
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);    
  }
  if (humanScore > computerScore) {
    console.log('Game Winner: Human');
  } else if (humanScore < computerScore) {
      console.log('Game Winner: Computer')
    } else {
        console.log('Desempate');
        playRound();
      }
}

playGame();