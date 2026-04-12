let randomNumber = parseInt(Math.random()*100 + 1);

const guesses=document.querySelector('.guesses');
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const lastResult=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let chance=1;
let pevguess=[];
let play=true;

if(play){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess=parseInt(userinput.value);
    console.log(guess);
    validation(guess);
  });
}

function validation(guess){
  if(isNaN(guess)){
    userinput.value= '';
    alert('Please Enter Valid Number');
  }else if(guess<1){
    userinput.value= '';
    alert('Please Enter Number 1 or Above 1');
  }else if(guess>100){
    userinput.value= '';
    alert('Pleae Enter Number 100 or Below 100');
  }else{
    Range(guess);
  }
}

function Range(guess){
  if(guess===randomNumber){
    displayMessage('You guess correct');
    endGame();
  }else{
    pevguess.push(guess);
    if(chance===11){
      displayguess(guess);
      displayMessage(` Game Over : Random Number is ${randomNumber}`);
      endGame();
    }else{
      displayguess(guess);
      if(guess<randomNumber){
        displayMessage('You are little low');
      }else{
        displayMessage('You are little high');
      }
    }
  }
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function displayguess(guess){
  userinput.value= '';
  if(chance ===1){
    guesses.innerHTML += `${guess}`;
  }else{
    guesses.innerHTML += `, ${guess}`;
  }
  lastResult.innerHTML=`${11-chance}`;
  chance++;
}

function endGame(){
  userinput.value=''
  userinput.setAttribute('disable','');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  play=false;
  newGame();
}

function newGame(){
  const newbutton=document.querySelector('#newGame');
  newbutton.addEventListener('click' , function(e){
    randomNumber = parseInt(Math.random()*100 + 1);
    userinput.removeAttribute('disable');
    chance=1;
    pevguess=[]
    guesses.innerHTML=''
    lastResult.innerHTML = `${11 - chance} `;
    startOver.appendChild(p)
    play=true;
  });
}