// I'll need an array of 4 options for each question
// an array of questions
// an array of 4 buttons for answers
// A persistent event listener
// A clock! that updates both as time passes and as questions are answered incorrectly
// take the initials of the user and use them to store highscores

//I know I could just store an array of correct answers, then compare correctAnswer[i] to userAnswer[i] but I worry
//that that would trivialize the journey to get a high score, so I'm randomizing the placement of the answer options and making a headache for myself

//Not sure if it's best practice to write these in one line or many lines. I'm going with one line to prefer code legibility over question legibility
let question = ['1. Javascript is a(n) ________ language','2. In Javascript, how can a variable be declared as a constant?','3. Which of the following is NOT a Javascript Framework?', '4. Upon encountering empty statements, what does the Javascript Interpreter do?', '5. What Javascript keyword is used to check whether a given property is valid or not?',"6. What does the Javascript 'debugger' statement do?","7. What is the output of print(NaN === NaN)?","8. Which function is used to serialize an object into a JSON string in Javascript?"] 
let rightA = ['Object-Oriented','const','Cassandra','Ignores the statements','in','It acts as a breakpoint in a program','false','stringify()']
let wrongB = ['Object-Based','let','Node','None of these','exists','It will debug all the errors in the program at runtime','true','JSONify()']
let wrongC = ['Procedural','var','React','Gives a warning','is in','It will debug errors in the current statement if any exist','undefined','parse']
let wrongD = ['Machine','constant','Vue','Throws an error','lies','All of these','Error','convert']
let userScore = ''
let buttonOrder = [0,1,2,3]
var timeLeft = 120
var questionNumber = 0
$('#highScoresList').hide();


function wrongAnswer() {
    $("#winLose").html('Wrong! You lose 5 seconds.');
    $("#winLose").css('color','#ff0000');
    timeLeft -= 5;
}

//This somewhat inelligantly populates every button/question field with the needed information about the current question
 function randomizeAnswerPlacement(array) {
    $("#A").css('order', String(array[0]));
    $("#B").css('order', String(array[1]));
    $("#C").css('order', String(array[2]));
    $("#D").css('order', String(array[3]));
    $("#A").html(rightA[questionNumber]);
    $("#B").html(wrongB[questionNumber]);
    $("#C").html(wrongC[questionNumber]);
    $("#D").html(wrongD[questionNumber]);
    $("#Question").html(question[questionNumber]);
    
 }

//This is a lovely function that randomizes the order of the elements of any array we give it
function shuffle(inputArray) {
    let currentIndex = inputArray.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [inputArray[currentIndex], inputArray[randomIndex]] = [
        inputArray[randomIndex], inputArray[currentIndex]];
    }
  
    return inputArray;
  }


function correctAnswer() {
    //randomize button placements using shuffle
    shuffle(buttonOrder);
    //advance to next step in central array of questions/answers
    questionNumber ++;
    randomizeAnswerPlacement(buttonOrder);
    if (questionNumber == question.length) {
        endGame();
        console.log('The game ended')
        return;
    }
    $("#winLose").html('You got it right! Good job');
    $("#winLose").css('color','green');
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
    //if timeLeft == 0 then save 'DNF' instead
    //combine timeLeft to a user submitted variable of their initials
    //save the result to local storage
    //display all high scores in local storage
}

function stepTimer() {
    $("#timer").html(timeLeft);
    timeLeft --;
    if (timeLeft < 0) {
        clearInterval(intervalID);
        $("#timer").hide();
        userScore = 'DNF';
        console.log(userScore);
        alert('Wrong! You get nothing! You lose!')
        endGame();
    }
}
//jsquery event for whenever the start button is pressed
$("#startButton").click(function clickStart(event) {
    shuffle(buttonOrder);
    randomizeAnswerPlacement(buttonOrder);
    intervalID = setInterval(stepTimer, 1000);
    //my friends and I don't understand exactly why this works. We're not calling setInterval, and we're not using let, const, var, etc. with interval ID.
    //Just making a note so I can ask a tutor later!
    $("#startButton").hide();
    $(".correct").css('display','flex');
    $(".wrong").css('display','flex');
});

$("#highScores").click(function clickStart(event) {
    //placeholder
})

//I can randomize the buttons by making 4 pre-determined buttons with hardcoded values
//then randomizing their order in a list or something. That'll be very quick
