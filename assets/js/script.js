// I'll need an array of 4 options for each question
// an array of questions
// an array of 4 buttons for answers
// A persistent event listener
// A clock! that updates both as time passes and as questions are answered incorrectly
// take the initials of the user and use them to store highscores

//Not sure if it's best practice to write these in one line or many lines. I'm going with one line to prefer code legibility over question legibility
let question = ['Javascript is a ________ language','How can a variable be declared as a constant?','']
let rightA = ['Object-Oriented','const',]
let wrongB = ['Object-Based','let',]
let wrongC = ['Procedural','var',]
let wrongD = ['Machine','constant',]


function wrongAnswer() {
    alert('Wrong, you lose 5 seconds!')
    timeLeft -= 5;
}

function correctAnswer() {
    //randomize button placements
    //advance to next step in central array of questions/answers
    alert('You got it right! Good job');
}

//Assign event listeners to the 'wrong' buttons and make them call wrongButton
var wrongButtons = document.getElementsByClassName('wrong');
for (i = 0; i < wrongButtons.length; i++) {
    wrongButtons[i].addEventListener('click', wrongAnswer);
}

//Assigning an event listener to the correct button is much easier, and now it calls correctAnswer
document.getElementsByClassName('correct')[0].addEventListener('click', correctAnswer);

function endGame() {
    //Save timeLeft to some variable
    //combine timeLeft to a user submitted variable of their initials
    //save the result to local storage
    //display all high scores in local storage
}

function answerListener() {
    //This is really quite difficult
    //Highlight users choice, then call correctAnswer/wrongAnswer when a 'submit' button is pressed
    //I don't really know how to do that
}


var timeLeft = 120
$("#startButton").click(function (event){
    $("#startButton").hide();
    $(".correct").css('display','grid');
    $(".wrong").css('display','grid');

    setInterval(function () {
    $("#timer").html(timeLeft);
    timeLeft--;
    }, 1000);
});

//REALLY not sure if I want to do this with a for loop or this strange set interval callback thing


// for (;timeLeft > 0; timeLeft --) {
//     console.log('test');
// }



//I can randomize the buttons by making 4 pre-determined buttons with hardcoded values
//then randomizing their order in a list or something. That'll be very quick

//break is the key. Calling break will exit the code block it's currently in
