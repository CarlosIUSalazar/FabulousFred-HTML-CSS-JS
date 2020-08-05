let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonThree = document.getElementById("three");
let buttonFour = document.getElementById("four");
let buttonFive = document.getElementById("five");
let buttonSix = document.getElementById("six");
let buttonSeven = document.getElementById("seven");
let buttonEight = document.getElementById("eight");
let buttonNine = document.getElementById("nine");

let oneAudio = document.getElementById("myAudioOne"); 
let twoAudio = document.getElementById("myAudioTwo"); 
let threeAudio = document.getElementById("myAudioThree"); 
let fourAudio = document.getElementById("myAudioFour"); 
let fiveAudio = document.getElementById("myAudioFive"); 
let sixAudio = document.getElementById("myAudioSix"); 
let sevenAudio = document.getElementById("myAudioSeven"); 
let eightAudio = document.getElementById("myAudioEight"); 
let nineAudio = document.getElementById("myAudioNine"); 

let generatedSequence = [];
let userSequence = [];
let userScore = 0;
let color = null;
let round = 1;
let roundText = document.getElementById("round"); 

function playAudioOne() { 
  oneAudio.play(); 
} 
function playAudioTwo() { 
    twoAudio.play(); 
} 
function playAudioThree() { 
  threeAudio.play(); 
} 
function playAudioFour() { 
    fourAudio.play(); 
}
function playAudioFive() { 
  fiveAudio.play(); 
} 
function playAudioSix() { 
    sixAudio.play(); 
}
function playAudioSeven() { 
  sevenAudio.play(); 
} 
function playAudioEight() { 
  eightAudio.play(); 
} 
function playAudioNine() { 
  nineAudio.play(); 
} 

function generateSequence(){
    let randomNumber = Math.floor(Math.random() * Math.floor(9)) + 1;
    generatedSequence.push(randomNumber);
}

function playGame(){
    roundText.innerHTML = round;
    generateSequence();
    for (let i = 0; i < generatedSequence.length; i++){
        console.log("generatedSequnce",generatedSequence)
        console.log(generatedSequence[i])
        if (generatedSequence[i] === 1){
            buttonOne.style.backgroundColor = "white"
            playAudioOne();
            buttonOne.style.backgroundColor = "red"
        }
        if (generatedSequence[i] === 2){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 3){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 4){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 5){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 6){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 7){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 8){
            buttonOne.style.backgroundColor = "white"
        }
        if (generatedSequence[i] === 9){
            buttonOne.style.backgroundColor = "white"
        }
    }
}




//playGame();







//playAudioOne();
//playAudioTwo();
//playAudioThree();
//playAudioFour();
//playAudioFive();
//playAudioSix();
//playAudioSeven();
//playAudioEight();
//playAudioNine();