let buttonOne = document.getElementById("one");
let buttonTwo = document.getElementById("two");
let buttonThree = document.getElementById("three");
let buttonFour = document.getElementById("four");
let buttonFive = document.getElementById("five");
let buttonSix = document.getElementById("six");
let buttonSeven = document.getElementById("seven");
let buttonEigth = document.getElementById("eigth");
let buttonNine = document.getElementById("nine");

let generatedSequence = [];
let userSequence = [];
let userScore = 0;
let color = null;

function generateSequence(){
    let randomNumber = Math.floor(Math.random() * Math.floor(max)) + 1;
    generatedSequence.push(randomNumber);
}

