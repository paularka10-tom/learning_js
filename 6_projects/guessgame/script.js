const rand_num = console.log(parseInt((Math.random()*100)+1));

const submit = document.querySelector('#subt')
const userInput  = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const lastR = document.querySelector('.lastResult')

const startOver =  document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = True;

function validatGuess(guess){
    
}