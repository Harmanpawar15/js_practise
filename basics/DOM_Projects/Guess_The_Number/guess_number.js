// begin with generating random number between 1-100:

let randomNumber= (parseInt((Math.random()*100)+1));

// declaring variable for each field:
let userInput= document.querySelector('#guessField');  // for guessField , to enter user input
let submit = document.querySelector('#subt'); //  for the Submit button, to make it clickable
let previousGuess = document.querySelector( '.guesses' );   //for displaying the previous guesses
let guessRemaning= document.querySelector('.lastResult'); //for displaying  how many attempts are left
let highorlow = document.querySelector('.lowOrHi') ;  // for showing value is low or high 
let startOver = document.querySelector('.resultParas') ;    // for Start Over Button

// create new element to store values:

let p = document.createElement('p');


// create empty array to store all the guess we had:
let prevGuess=[] ;
let numGuess=1 ; // by default  set the number of guesses as one and keep incrementing whenever a new guess is made

let playGame=true ; // to make player  play game again after he finish playing


// to  get value we entered 
if(playGame){
    submit.addEventListener('click' , function(e){
    e.preventDefault();
    let guess=parseInt(userInput.value);
    console.log(guess)
    displayGuess(guess);
    validateGuess(guess);

   })

}

// ALL FUNCTIONS:


// function to validate values of guesses , if they are enetered correctly by user or no :
function validateGuess(guess){


 if (guess < 1 ) {
    alert("Enter number greater than 1 ")
}
else if (guess >100){
    alert("Enter number less than 100")
}
// now to push the guess numbers in array

else {
    
// to check if value is already in array  or not, and then push it into array:

if (prevGuess.includes(guess)){
    alert("You have already guessed this number! Try another one.")
}
else {

prevGuess.push(guess);
// lets check if that person completes his/her 10 turns or not:
if(numGuess===11){
    displayGuess(guess)
    displayMessage(`  Game Over!, Correct Guess was ${randomNumber}`);
    endGame();
}


else {
    checkGuess(guess);

}
}}

}

// function will compare values of guess with the number t:
function checkGuess(guess){
    if(guess === randomNumber){
        // correct guess 
        displayMessage("Congratulation! You got it Right!");
        endGame();

    }
    else if (guess < randomNumber){
        displayMessage('Too Low!')
    }
    else if (guess > randomNumber){
        displayMessage("Too High!")
    }
   

}


// will display value of guess
function displayGuess(guess){
    userInput.value='' //  clear input field after each turn
    // push value to previous guesses:

     if (isNaN(guess)){
        alert("Please Enter a number");
     }

else {
    previousGuess.innerHTML += ` ${guess},` ;
    numGuess++ ;
    guessRemaning.innerHTML = `${ 11 - numGuess}`; }

}

// this function will display message based on all the guesses made 
function displayMessage(message){
highorlow.innerHTML=`${message}`;
}



function endGame(){
    userInput.value='' // disabeled
    userInput.setAttribute('disabeled' ,'');
    p.classList.add('button') ;
    p.innerHTML= `<h2 id="newGame" >Play Again?</h2> `;
    startOver.appendChild(p);
    playGame=false ;
    newGame();

}

function newGame(){
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click' , function(e){
        randomNumber= (parseInt((Math.random()*100)+1));
        prevGuess=[] 
        numGuess=1 
        previousGuess.innerHTML ='';
        guessRemaning.innerHTML = `${ 11 - numGuess}`;
        userInput.removeAttribute( 'disabled' );
        startOver.removeChild(p) ;
        displayMessage('')
        playGame=true

    })

}