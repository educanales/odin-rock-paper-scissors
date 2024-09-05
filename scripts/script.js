/*
let a = "rock"
let b = "Rick"

let result = a.localeCompare(b, undefined, { sensitivity: 'accent' });

console.log(result)
*/
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
  return comChoice;
  // console.log(comChoice)
}

function getHumanChoice() {
  let humanChoice = prompt(' Choose between rock, paper, scissors ')
  return humanChoice;
  // console.log(humanChoice);
}

// getComputerChoice();
getHumanChoice();