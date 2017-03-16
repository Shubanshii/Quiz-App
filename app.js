var state = {
  startedQuiz: false,
  questions: [{description: "a question", answers: [{txt: 'answer 1', correct: true}, 
    {txt: 'answer 2', correct: false}, {txt: 'answer 3', correct: false}, 
    {txt: 'answer 4', correct: false}] },
    {description: "a question 2", answers: [{txt: 'answer 1', correct: false}, 
    {txt: 'answer 2', correct: true}, {txt: 'answer 3', correct: false}, 
    {txt: 'answer 4', correct: false}] },
    {description: "a question 3", answers: [{txt: 'answer 1', correct: false}, 
    {txt: 'answer 2', correct: true}, {txt: 'answer 3', correct: false}, 
    {txt: 'answer 4', correct: false}] },
    {description: "a question 4", answers: [{txt: 'answer 1', correct: false}, 
    {txt: 'answer 2', correct: false}, {txt: 'answer 3', correct: false}, 
    {txt: 'answer 4', correct: true}] },
    {description: "a question 5", answers: [{txt: 'answer 1', correct: false}, 
    {txt: 'answer 2', correct: false}, {txt: 'answer 3', correct: true}, 
    {txt: 'answer 4', correct: false}] }],
  correctAnswers: 0,
  incorrectAnswers: 0,
  questionIndex: 0
  
};

var questionTemplate =(
	'<div class = "questions-answers">' +
	'<div class = "question-render"></div>' +
	'<div class="answer-choices">' +
	'<input type="radio" name="answer" id="ans-a" value=' + state.questions[state.questionIndex].answers[0].correct + '>' +
	'<label for="answer-a" id="answer-a"></label><br>' +
	'<input type="radio" name="answer" id="ans-b" value=' + state.questions[state.questionIndex].answers[1].correct + '>' +
	'<label for="answer-b" id="answer-b"></label><br>' +
	'<input type="radio" name="answer" id="ans-c" value=' + state.questions[state.questionIndex].answers[2].correct + '>' +
	'<label for="answer-c" id="answer-c"></label><br>' +
	'<input type="radio" name="answer" id="ans-d" value=' + state.questions[state.questionIndex].answers[3].correct + '>' +
	'<label for="answer-d" id="answer-d"></label></div>' +
	'</div>'
);

var questionsAnsweredTemplate = (
		'div class = "questions-answered"></div>'
	);

var submitTemplate = (
	 '<button type="submit" id="submit">' +
	 'Submit' +
	 '</button>'

	);

var nextTemplate = (
	'<button id="next">' +
	'Next' +
	'</button>'
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



//starts quiz should start sending the question variables to add them to state


function renderQuestionAnswers(){
	var element = $(questionTemplate);
	element.find('.question-render').text(state.questions[state.questionIndex].description);
	element.find('#answer-a').text(state.questions[state.questionIndex].answers[0].txt);
	element.find('#answer-b').text(state.questions[state.questionIndex].answers[1].txt);
	element.find('#answer-c').text(state.questions[state.questionIndex].answers[2].txt);
	element.find('#answer-d').text(state.questions[state.questionIndex].answers[3].txt);
	
	$('.questions-answers').html(element);
}

function renderQuestionsAnswered() {
	$('.questions-answered').text((state.questionIndex+1) + ' out of 5');

}
function renderScore(){
	$('.score').text(state.correctAnswers + ' correct, ' + state.incorrectAnswers + ' incorrect');
}

function renderButton(){
	$('.buttons').html(submitTemplate);
}

function renderNext(){

	$('#submit').replaceWith(nextTemplate);
}

function renderCorrectAnswer(){
		var ansA = $('#answer-a');
		var ansB = $('#answer-b');
		var ansC = $('#answer-c');
		var ansD = $('#answer-d');
		var ansArray = [ansA, ansB, ansC, ansD];
	state.questions[state.questionIndex].answers.forEach(function (answer, index){

		if(answer.correct === true){
			$(ansArray[index]).addClass('green-background')		}
	})
	//$('#answer-a').addClass('green-background')
}
function renderIncorrectAnswer() {
	$('input[name=answer]:checked').next().addClass('red-background')
}

$(document).ready(function(){
	$("button").on('click', function(event){
		state.startedQuiz = true;
		//removeButton();
		//addQuestion(state, questionArray[0]);
		//addAnswerChoices(state, answerArray.slice(0,4));
		renderQuestionAnswers();
		renderQuestionsAnswered();
		renderScore();
		renderButton();
	})
	$('main').on('click', '#submit', function(event){
		event.preventDefault();
		console.log("submission working");
		console.log($('input[name=answer]:checked').val());
		var checkVal = $('input[name=answer]:checked').val()
		if(checkVal === 'true')
		{
			renderCorrectAnswer();
			state.correctAnswers++;
			renderScore();
			renderNext();
		}
		else{
			console.log("else is working");	
			renderCorrectAnswer();
			renderIncorrectAnswer();
			state.incorrectAnswers++;	
			renderScore();
			renderNext();
		}
	})

	$('main').on('click', '#next', function(event){
		if(state.questionIndex===4){
			    location.reload();

		}
		state.questionIndex++;
		renderQuestionAnswers();
		renderQuestionsAnswered();
		renderScore();
		renderButton();	

	})
	
})



//DOM Manipulation

