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

if(playGame==true){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        parseIntO(userInput.value)
        console.log(guess);
        validatGuess(guess)
    })
}

function validatGuess(guess){
    if(isNaN(guesss)){
        alert('Enter valid num')
    }
    else if(guess<1){
        alert('Enter num >1')
    }
    else if(guess>100){
        alert('Enter num <100')
    }
    else{
        prevGuess.push()
        if(numGuess==11){
            displayGuess(guess)
            displayMessage(`Game over. Number is ${rand_num}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess == rand_num){
        displayMessage(`CONGRATS`)
        endGame()
    }
    else if(rand_num<guess){
        displayMessage(`Numbers is too high`)
    }
    else if(rand_num>guess){
        displayMessage(`Numbers is too low`)
    }
}
function displayGuess(guess){
    userInput.value=''
}
function displayMessage(message){

}
function endGame(){

}
function newGame(){

}
