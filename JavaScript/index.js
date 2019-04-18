document.getElementById('date').innerHTML = new Date().toDateString();

const currentStatusContainer = document.getElementById('currentStatus');

const SubmitButton_01 = document.getElementById('SubmitButton1');
const SubmitButton_02 = document.getElementById('SubmitButton2');
const SubmitButton_03 = document.getElementById('SubmitButton3');
const SubmitButton_04 = document.getElementById('SubmitButton4');

const myQuestions = [
	{question : "Jon Snow = ", correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Arya Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
	{question : "Sansa Stark = ",correctAnswer : 'Alive'},
];

function showCurrentCharactersStatus()
{
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // add this question and its answers to the output
      output.push(
        `<div class="statusCharacterName"> ${currentQuestion.question} </div>
		 <div class="statusCharacter"> ${currentQuestion.correctAnswer} </div>`
      );
	  
	  		 if(questionNumber %= 2)
		 {
			 output.push('<br/>');
		 }
		 else
		 {
			 output.push('<span display: inline style="margin-left:4em"> </span>');
		 }
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  currentStatusContainer.innerHTML = output.join('');
}

function buildQuiz(ID)
{
	var quizContainer = document.getElementById("Quiz"+ID);

	const output = [];

  // for each question...
	myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

        answers.push(
          `<label>Dead</label>
            <input type="radio" name="question${questionNumber}${ID}" value="Dead">`
        );
		
		answers.push(
          `<label>Alive</label>
            <input type="radio" name="question${questionNumber}${ID}" value="Alive" checked>`
        );

				  // add this question and its answers to the output
		  output.push(
			`<div class="question"> <b> ${currentQuestion.question} </b> </div>
			<div class= "answers${ID}"> ${answers.join('')} </div> `
		  );
		 
		 if(questionNumber %= 2)
		 {
			 output.push('<br/>');
		 }
		 else
		 {
			 output.push('<span display: inline style="margin-left:4em"> </span>');
		 }
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(ID, targetSubmitButton)
{
	var quizContainer = document.getElementById("Quiz"+ID);
	var resultsContainer = document.getElementById("Results"+ID);
	var answerLookupID = '.answers'+ID;

	// gather response
	const answerContainers = quizContainer.querySelectorAll(answerLookupID);

	let currentScore = 0;
	 
	const output = [];

	// clear content
	quizContainer.innerHTML = "";
	
	myQuestions.forEach( (currentQuestion, questionNumber) => 
	{
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}${ID}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
			
		if(userAnswer == currentQuestion.correctAnswer)
		{
			++currentScore;
		}
		
		var color = "color:black";

		if(userAnswer == 'Dead')
		{
			if(userAnswer == currentQuestion.correctAnswer) color = "color:blue";

			output.push(`<div style= "${color}" class="question"> ${currentQuestion.question} Dead</div>`);
		}
		if(userAnswer == 'Alive')
		{
			if(userAnswer == currentQuestion.correctAnswer) color = "color:blue";

			output.push(`<div style= "${color}" class="question"> ${currentQuestion.question} Alive</div>`);
		}

		if(questionNumber %= 2)
		 {
			 output.push('<br/>');
		 }
		 else
		 {
			 output.push('<span display: inline style="margin-left:4em"> </span>');
		 }
	}
	);
	
	// finally combine our output list into one string of HTML and put it on the page
	quizContainer.innerHTML = output.join('');
	resultsContainer.innerHTML = "SCORE :" + currentScore;
	
	targetSubmitButton.style.visibility = 'hidden';
}

showCurrentCharactersStatus();

buildQuiz(1);
SubmitButton_01.addEventListener('click', function() {showResults(1, SubmitButton_01);});

buildQuiz(2);
SubmitButton_02.addEventListener('click', function() {showResults(2, SubmitButton_02);});

buildQuiz(3);
SubmitButton_03.addEventListener('click', function() {showResults(3, SubmitButton_03);});

buildQuiz(4);
SubmitButton_04.addEventListener('click', function() {showResults(4, SubmitButton_04);});

