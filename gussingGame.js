let randomNum = parseInt((Math.random())* 100 + 1)

const form = document.querySelector('#mainForm')

const guess = document.querySelector('.inputField')

const previousGuesses = document.querySelector('.guesses')

const remainGuesses = document.querySelector('.remainingGuesses')

const pGuessesAndrGuesses = document.querySelector('.results')

const submitBtn = document.querySelector('.submitBtn')

const highAndLow = document.querySelector('.highAndLow')


let p = document.createElement('p')

let prevGuesses = []
let numGuesses = 0

let palyGame = true

if(palyGame==true){
    submitBtn.addEventListener('click', function(e){
        e.preventDefault()
        const guessValue = parseInt(guess.value)
        validation(guessValue)
    })
}

function validation(guessValue){
    if(isNaN(guessValue)){
        alert('Please enter a valid number')
    }
    else if(guessValue<=0)
    {
        alert('Please enter the vlaue from 1 to 100')
    }
    else if(guessValue==='')
    {
        alert('Please enter the valid number')
    }
    else if(guessValue>100)
    {
        alert('Please enter the value from 1 to 100')
    }
    else{
        prevGuesses.push(guessValue)

        if(numGuesses===9){
            displayValues(guessValue)
            showMessage(`Game Over, The random number was ${randomNum}`)
            endGame()
    }
    else{
        checkValues(guessValue)
        displayValues(guessValue)
    }
}
}

function checkValues (guessValue){
    if(guessValue===randomNum){
        showMessage('You guessed it right')
        endGame()
        
    }
   else if(guessValue>randomNum){
        showMessage('The number is too high')
    }
    else{
        showMessage('The number is too low')
    }
}

function displayValues(guessValue){
    guess.value =''
    previousGuesses.innerHTML += `${guessValue} `
    numGuesses++;
    remainGuesses.innerHTML = `${10-numGuesses}`

}


function showMessage(message){
    highAndLow.innerHTML = `${message}`
}
function endGame(){
    guess.value = ''
    guess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h3 id='startGame'>Start new game</h3>`
    pGuessesAndrGuesses.appendChild(p)
    palyGame = false
    startGame()
}

function startGame(){
    const startGame = document.querySelector('#startGame')
    startGame.addEventListener('click', ()=>{
        previousGuesses.innerHTML =''
        prevGuesses =[]
        randomNum = parseInt((Math.random())* 100 + 1)
        numGuesses = 0
        remainGuesses.innerHTML = `${10-numGuesses}`
        guess.removeAttribute('disabled')
        highAndLow.innerHTML = ''
        pGuessesAndrGuesses.removeChild(p)
        palyGame = true
    })
    
}