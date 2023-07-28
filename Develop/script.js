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

var = 

// creates a simple timer interval
function startTime() {
    var timeInterval = setInterval(function(){
        quizTime--;
        timer.textContent = quizTime + " seconds left.";

        if(quizTime === 0){
            clearInterval(timeInterval);
        }
    }, 1000);

}

//fix issue where interval is sped up after multiple button clicks (on the first button only)
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

});