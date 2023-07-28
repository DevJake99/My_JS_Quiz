var startJsQuizBtn = document.querySelector(".topicSelectBtnsJs");
var timer = document.querySelector(".timer");
var quizTime = 75;

var optionTwo = document.createElement("button", "class topicSelectBtnsJs");
var optionTwoContent = document.createTextNode("");
optionTwo.classList.add("topicSelectBtnsJs");
var optionThree = document.createElement("button");
var optionThreeContent = document.createTextNode("");
optionThree.classList.add("topicSelectBtnsJs");
var optionFour = document.createElement("button");
var optionFourContent = document.createTextNode("");
optionFour.classList.add("topicSelectBtnsJs");

var questionEl = document.querySelector("mainMessage");
var questionZone = document.getElementById("questionZone");

function startTime() {
    var timeInterval = setInterval(function(){
        quizTime--;
        timer.textContent = quizTime + " seconds left.";

        if(quizTime === 0){
            clearInterval(timeInterval);
        }
    }, 1000);

}

startJsQuizBtn.addEventListener("click", function() {
    startTime();
    // start quiz when js button is clicked and reveal timer
    document.getElementById("subMessage").remove();
    document.getElementById("info").remove();
    quizTime--;
    timer.textContent = quizTime + " seconds left.";
    // question 1 will begin 
    document.getElementById("question").innerHTML = "Commonly used data types DO NOT include: ";
    //Change text for button 1
    startJsQuizBtn.innerHTML = "1. Strings";
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