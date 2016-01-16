var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('a4');
var ans5 = document.getElementById('a5');
var ans6 = document.getElementById('a6');
var results = [ans1, ans2, ans3, ans4, ans5, ans6];

var introPic = document.getElementById('lobster');

var questions = [
  'Do I like snacks?',
  'Do I wear contacts?',
  'Do I have any pets?',
  'How old am I?',
  'For the last challenge... Guess the number I am thinking... Between 1 and 100',
  'What are my favourite colours?'
];

var answers = [
  ["yes", 'y'],
  ["yes", 'y'],
  ["yes", 'y'],
  [25],
  [Math.floor((Math.random() * 100) + 1)],
  ["blue","mauve","periwinkle"]
];

var submissions = [];
var scoreCounter = 0;
var questionCounter = 0;


var statusMessage = document.getElementById('status');
statusMessage.textContent = "Hello and welcome to the guessing game! Type your name below:";

function submitName(){
  var userName = document.getElementById('inputBox').value
  statusMessage.textContent = "Ok, " + userName + ". Click start game for your first question...";
  document.getElementById('submitButton').setAttribute("onClick", "javascript: displayQuestion();" );
  document.getElementById('inputBox').style.display='none';
  document.getElementById('inputBox').value = ''
  document.getElementById('submitButton').innerHTML = "Start game";
}

function displayQuestion(){
  introPic.src = "imgs/waiting.gif";
  statusMessage.textContent = questions[questionCounter];
  document.getElementById('inputBox').style.display='inline';
  document.getElementById('submitButton').setAttribute("onClick", "javascript: submitAnswer();" );
  document.getElementById('submitButton').innerHTML = "Submit";
}

function submitAnswer(){
  console.log("submitted");
  var submission = document.getElementById('inputBox').value;
  submissions.push(submission);

  if (checker(submission, answers[questionCounter])) {
    introPic.src = "imgs/happypuppy.jpg";
    scoreCounter++;
    questionCounter++
    results[questionCounter].textContent = display(questionCounter,questions[questionCounter],answers[questionCounter],submissions[questionCounter-1])
    statusMessage.textContent = "Nice! That is correct!  Your score is: " + scoreCounter + "/" + questionCounter;
  } else {
    introPic.src = "imgs/sadpuppy.jpg";
    questionCounter++
    results[questionCounter].textContent = display(questionCounter,questions[questionCounter],answers[questionCounter],submissions[questionCounter-1])
    statusMessage.textContent = "Aww... That is incorrect... Your score is: " + scoreCounter + "/" + questionCounter;
  }

  document.getElementById('inputBox').value = ''
  document.getElementById('inputBox').style.display='none';
  document.getElementById('submitButton').setAttribute("onClick", "javascript: displayQuestion();" );
  document.getElementById('submitButton').innerHTML = "Next question";
}

function checker(submission, answerArray) {
  submission = submission.toLowerCase()
  for (var i = 0; i < answerArray.length; i++) {
    if (submission === answerArray[i] || parseInt(submission) === answerArray[i]) {
      return true;
    } else if (i === answerArray.length - 1 ){
      return false;
    }
  }
}

function display (questionNumber,questionAsked,answerArray,submissionReceived) {
  var show = "Question " + questionNumber + " was '" + questionAsked + "' Acceptable answers were: '" + answerArray + ".' You said the answer was '" + submissionReceived + ".'"
  return show
}