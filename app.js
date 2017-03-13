var state = {
  startedQuiz: false,
  questions: [],
  answers: []
};

var questionTemplate =(
	'<div class = "questions-answers">' +
	'<div class = "question-render"></div>' +
	'<div class="answer-choices">' +
	'<div class="answer-a"></div>' +
	'<div class="answer-b"></div>' +
	'<div class="answer-c"></div>' +
	'<div class="answer-d"></div></div>' +
	'</div>'
);

//question text
var questionOne = "What does it mean to 'isolate state management'?";
var questionTwo = "A single state object is …";
var questionThree = "What arguments do functions which modify the state take?";
var questionFour = "What are functions that render state?";
var questionFive = "How should you go about writing functions that render state?";

//answer text
var oneA = "keep all of the data your application is displaying" +
"(known as the application's state) in a JavaScript variable";
var oneB= "declaring a variable called state";
var oneC= 'doing things to each item in an array';
var oneD= 'declaring functions with effectively descriptive titles';

var twoA = "a variable";
var twoB = "an object which will contain your application's state";
var twoC = "an object with one key/value pair";
var twoD = "an array with one object";

var threeA = "all previous variables";
var threeB = "all previous functions";
var threeC = "objects with the label state1, state2, state3, state 4";
var threeD = "the state object as their first argument, and any additional data";

var fourA = "functions which render HTML into a DOM element";
var fourB = "functions that get data from the state variable";
var fourC = "functions that return console.log(“”); statements";
var fourD = "functions that don't return anything";

var fiveA = "have a single function for each part of the page which you want to update";
var fiveB = "store as few things in variables as possible";
var fiveC = "store as many things in variables as possible";
var fiveD = "have as many functions as humanly possible";

//store questions in an array
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//store answers in an array
var answerArray = [oneA, oneB, oneC, oneD, twoA, twoB, twoC, twoD, threeA, threeB, threeC, threeD, fourA, +
fourB, fourC, fourD, fiveA, fiveB, fiveC, fiveD];


//modify state


var addQuestion = function(state, question) {
    
    	state.questions.push({
    	question: question,
    	answered: false,
    	correct: Boolean
    });


};

var addAnswerChoices = function(state, answer){
	answer.forEach(function(answerChoice){
		state.answers.push({
			answer: answerChoice,
			correct: Boolean,
		})
	})
	
};

//removal of button.  we'll fit this in to state management later
function removeButton(){
	console.log("working");
	if(state.startedQuiz === true){
		$('.button-questions-answers').html('');
	}
}
//starts quiz should start sending the question variables to add them to state
function startQuiz(){


}

function renderQuestionAnswers(){
	console.log(state.answers[0].answer);
	var element = $(questionTemplate);
	element.find('.question-render').text(questionOne);
	element.find('.answer-a').text(state.answers[0].answer);
	element.find('.answer-b').text(state.answers[1].answer);
	element.find('.answer-c').text(state.answers[2].answer);
	element.find('.answer-d').text(state.answers[3].answer);


	$('.button-questions-answers').html(element);
}
$(document).ready(function(){
	$("button").on('click', function(event){
		state.startedQuiz = true;
		removeButton();
		addQuestion(state, questionArray[0]);
		addAnswerChoices(state, answerArray.slice(0,4));
		renderQuestionAnswers();

	})

})

//DOM Manipulation

