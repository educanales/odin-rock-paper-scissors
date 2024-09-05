/*
let a = "rock"
let b = "Rick"

let result = a.localeCompare(b, undefined, { sensitivity: 'accent' });

console.log(result)
*/

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3 + 1);
  let comChoice = '';
  if (randomChoice === 1) {
    comChoice = 'rock';
  } else if (randomChoice === 2) {
    comChoice = 'paper';
  } else {
    comChoice = 'scissors'
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