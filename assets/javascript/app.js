// Global Variables
//======================================================
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var timer = '';
var qA = {

	1: {
		question: 'What is the name of the Rugrats spin-off show?',
		answers: ['Rugrats Go Wild', 'Rugrats', 'Rugrats All Grown Up', 'Rugrats'],
		correct: 'Rugrats All Grown Up'
	},

	2: {
		question: 'Who is Tommy Pickles\' younger brother?',
		answers: ['Dil', 'Will', 'Phil', 'Dill'],
		correct: 'Dil'
	},

	3: {
		question: 'What fruit\'s seeds did Chuckie eat that the Rugrats thought would grow in his stomache?',
		answers: ['Orange', 'Watermelon', 'Peach', 'Apple'],
		correct: 'Watermelon'
	},
		
	4: {
		question: 'What is the name of the monster that all the kids love?'
		answers: ['Robosnail', 'Sharknado', 'Godzilla', 'Reptar'],
		correct: 'Reptar'
	},

	5: {
		question: 'How many Rugrats movies were made?'
		answers: ['2', '3', '4', '5'],
		correct: '3'
	}
	
};

//Timer
//===============================================
var timerStart = function(){
	$('#timer').empty();
	//Sets time to 30
	trivTime = 300;
	timer = setInterval(timeDecrement, 100);
}

var timeDecrement = function(){
	if(trivTime === -10){
		userAnswer = false;
		//Clears Time
		clearInterval(timer);
	}
}