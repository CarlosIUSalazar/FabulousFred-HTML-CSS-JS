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
let round = 0;
let roundText = document.getElementById("round"); 
let board = document.getElementById("board");
let startButton = document.getElementById("gameStartButton");

function playAudioOne() { 
  oneAudio.play(); 
  buttonOne.classList.add("pressed");

} 
function playAudioTwo() { 
    twoAudio.play(); 
    //buttonTwo.classList.add("pressed");
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

function revealAll() {
    startButton.remove();
    board.style.visibility = "visible"
    playGame();
}

function generateSequence(){
    for (let i = 0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * Math.floor(2)) + 1;
        generatedSequence.push(randomNumber);
    }
    //console.log("generatedSequence inside generateSequence()", generatedSequence)
    return generatedSequence;
    //console.log( "The sequence generated is", generatedSequence)
}

function playGame(){
    round++;
    roundText.innerHTML = round;
    generateSequence();
    console.log("generatedSequence", generatedSequence)
    for (let i = 0; i < generatedSequence.length; i++){
        console.log(i)
        if (generatedSequence[i] === 1){
            buttonOne.style.backgroundColor = "white"
            setTimeout(function(){playAudioOne()}, 300);
            setTimeout(function(){buttonOne.style.backgroundColor = "red"}, 300);
        }
        else if (generatedSequence[i] === 2){
            buttonTwo.style.backgroundColor = "white"
            setTimeout(function(){playAudioTwo()}, 300);
            setTimeout(function(){buttonTwo.style.backgroundColor = "yellow"}, 300);
        }
        // else if (generatedSequence[i] === 3){
        //     buttonThree.style.backgroundColor = "white"
        //     playAudioThree();
        //     setTimeout(function(){buttonThree.style.backgroundColor = "orange"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
        // else if (generatedSequence[i] === 4){
        //     buttonFour.style.backgroundColor = "white"
        //     playAudioFour();
        //     setTimeout(function(){buttonFour.style.backgroundColor = "greenyellow"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
        // else if (generatedSequence[i] === 5){
        //     buttonFive.style.backgroundColor = "white"
        //     playAudioFive();
        //     setTimeout(function(){buttonFive.style.backgroundColor = "violet"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
        // else if (generatedSequence[i] === 6){
        //     buttonSix.style.backgroundColor = "white"
        //     playAudioSix();
        //     setTimeout(function(){buttonSix.style.backgroundColor = "limegreen"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
        // else if (generatedSequence[i] === 7){
        //     buttonSeven.style.backgroundColor = "white"
        //     playAudioSeven();
        //     setTimeout(function(){buttonSeven.style.backgroundColor = "purple"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
        // else if (generatedSequence[i] === 8){
        //     buttonEight.style.backgroundColor = "white"
        //     playAudioEight();
        //     setTimeout(function(){buttonEight.style.backgroundColor = "cyan"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
        // else if (generatedSequence[i] === 9){
        //     buttonNine.style.backgroundColor = "white"
        //     playAudioNine();
        //     setTimeout(function(){buttonNine.style.backgroundColor = "blue"}, 400);
        //     setTimeout(function(){console.log("waiting")}, 500);
        // }
    }
}


//playGame();

