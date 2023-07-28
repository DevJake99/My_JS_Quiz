var startJsQuizBtn = document.querySelector(".topicSelectBtnsJs");
var timer = document.querySelector(".timer");
var quizTime = 75;

// create and prepare empty buttons (answers) for the game
var optionOne = document.createElement('button');
var optionOneContent = document.createTextNode("");
optionOne.classList.add("topicSelectBtnsJs");

var optionTwo = document.createElement("button");
var optionTwoContent = document.createTextNode("");
optionTwo.classList.add("topicSelectBtnsJs");

var optionThree = document.createElement("button");
var optionThreeContent = document.createTextNode("");
optionThree.classList.add("topicSelectBtnsJs");

var optionFour = document.createElement("button");
var optionFourContent = document.createTextNode("");
optionFour.classList.add("topicSelectBtnsJs");

// select the quiz area on the screen
var questionEl = document.querySelector("mainMessage");
var questionZone = document.getElementById("questionZone");

// set up variables for score keeping and user
var highestScore = "";
var currentScore = "";
var initials ="";

// creates a simple timer interval
function startTime() {
    var timeInterval = setInterval(function(){
        quizTime--;
        timer.textContent = quizTime + " seconds left.";

        if(quizTime === 0){
            clearInterval(timeInterval);
            document.getElementsByClassName(".topicSelectBtnsJs").remove();
        };
    }, 1000);

}


startJsQuizBtn.addEventListener("click", function() {
    // start quiz when js button is clicked and reveal timer
    startTime();
    // removes un-needed elements from main menu
    document.getElementById("subMessage").remove();
    document.getElementById("info").remove();
    document.getElementById("startJsBtn").remove();
    quizTime--;
    timer.textContent = quizTime + " seconds left.";
    // question 1 will begin 
    document.getElementById("question").innerHTML = "Commonly used data types DO NOT include: ";
    //append button 1
    questionZone.appendChild(optionOne);
    optionOne.innerHTML = "1. strings"
    // append button 2 and fill text
    questionZone.appendChild(optionTwo);
    optionTwo.innerHTML = "2. booleans";
    // append button 3 and fill text
    questionZone.appendChild(optionThree);
    optionThree.innerHTML = "3. alerts";
    // append button 4 and fill text
    questionZone.appendChild(optionFour);
    optionFour.innerHTML = "4. numbers";

    // The following lines will be for incorrect answer penalties
    optionOne.addEventListener("click", function(){
        quizTime = quizTime - 5;
    });
    optionThree.addEventListener("click", function(){
        quizTime = quizTime - 5;
    })
    optionFour.addEventListener("click", function(){
        quizTime = quizTime - 5;
    })
    
});

// To move onto question 2, the correct answer (optionTwo in this case) will reveal the next question and options
optionTwo.addEventListener("click", function(){
    document.getElementById("question").innerHTML = 'The condition in an "if/else" statement is enclosed with______.';
    optionOne.innerHTML = "1. quotes";
    optionTwo.innerHTML = "2. curly brackets";
    optionThree.innerHTML = "3. parenthesis";
    optionFour.innerHTML = "4. square brackets";

});

optionTwo.addEventListener("click", function(){
    document.getElementById("question").innerHTML = 'Arrays in JavaScript can be used to store______.';
    optionOne.innerHTML = "numbers and strings";
    optionTwo.innerHTML = "other arrays";
    optionThree.innerHTML = 'booleans';
    optionFour.innerHTML = "all of the above";
});

optionFour.addEventListener("click", function(){
    document.getElementById("question").innerHTML = " String Values must be enclosed within ____ when being assigned to variables.";
    optionOne.innerHTML = 'commas';
    optionTwo.innerHTML = "curly brackets";
    optionThree.innerHTML = "quotes";
    optionFour.innerHTML = "parenthesis";
});

optionThree.addEventListener("click", function(){
    document.getElementById("question").innerHTML = "A very useful tool during development and debugging for printing conent to the debugger is:";
    optionOne.innerHTML = "1. JavaScript";
    optionTwo.innerHTML = "2. terminal/bash";
    optionThree.innerHTML = "3. for loops";
    optionFour.innerHTML = "4. console.log";
});

// function gameOver(){
//     if (quizTime == 0){
//         document.getElementsByClassName(".topicSelectBtnsJs").remove();
//         alert("Game Over");

//     };
// };
// gameOver();
