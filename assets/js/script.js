// I'll need an array of 4 options for each question
// an array of questions
// an array of 4 buttons for answers
// A persistent event listener
// A clock! that updates both as time passes and as questions are answered incorrectly
// take the initials of the user and use them to store highscores

var timeLeft = 120
var timerTick = setInterval(function() {
    timeLeft --;
    console.log(timeLeft)
    }, 1000)
