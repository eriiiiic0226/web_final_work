var currentQuestion = 0;
var answers = [];

function displayQuestion() {
    var questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestion].question;

    var buttonsElement = document.getElementById('buttons');
    buttonsElement.innerHTML = '';
    
    var resultElement = document.getElementById('result');
    resultElement.textContent = "";
    
    var linkbuttonElement = document.getElementById('linkbutton');
    linkbuttonElement.innerHTML = '';
  

    var options = questions[currentQuestion].options;
    for (var i = 0; i < options.length; i++) {
        var button = document.createElement('button');
        button.textContent = options[i];
        button.addEventListener('click', function(option) {
        return function() {
            answerQuestion(option);
        };
        }(options[i]));
        button.classList.add('custom-button');
        buttonsElement.appendChild(button);
    }
}

function answerQuestion(option) {
    answers.push(option);
    var currentAnswers = questions[currentQuestion].answers;
    var answerIndex = questions[currentQuestion].options.indexOf(option);
    if (answerIndex !== -1) {
      var answer = currentAnswers[answerIndex];
      var resultElement = document.getElementById('result');
      resultElement.textContent = "回答： " + answer;
    }
    document.getElementById('linkbutton').innerHTML = '';
    document.getElementById('linkbutton').classList.add('hidden');
    if(questions[currentQuestion].linkurl[answerIndex] !== ""){
      var linkbutton = document.createElement('linkbutton');
      document.getElementById('linkbutton').classList.remove('hidden');
      linkbutton.textContent = '點我傳送';
      linkbutton.addEventListener('click', function() {
        window.open(questions[currentQuestion].linkurl[answerIndex], '_blank');
      });
      document.getElementById('linkbutton').appendChild(linkbutton);
    }


  }

function reset() {
    var buttonsElement = document.getElementById('buttons');
    buttonsElement.innerHTML = '';
    var jumpElement = document.getElementById('jump');
    jumpElement.classList.add('hidden');
    jumpElement.innerHTML = '';
  
    currentQuestion = 0;
    answers = [];
    displayQuestion();

    var questionContainer = document.getElementById('question-container');
    var resultContainer = document.getElementById('result-container');
    var linkbuttonElement = document.getElementById('linkbutton');
    questionContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    linkbuttonElement.classList.add('hidden');
  }
  

function setQuestion(condition) {
    var questionContainer = document.getElementById('question-container');
    var resultContainer = document.getElementById('result-container');
    var linkbuttonElement = document.getElementById('linkbutton');

    questionContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
    linkbuttonElement.classList.add('hidden');
    currentQuestion = condition;

    answers = [];
    displayQuestion();
    
    questionContainer.classList.remove('hidden');
    resultContainer.classList.remove('hidden');
    
}

function jumptoweb(rul) {
  document.getElementById('jump').innerHTML = '';
  // document.getElementById('jump').classList.add('hidden');
  var button = document.createElement('jump');
  button.textContent = '點我';
  button.addEventListener('click', function() {
    window.open(rul, '_blank');
  });
  button.classList.add('custom-button');
  document.getElementById('jump').appendChild(button);
  document.getElementById('jump').classList.remove('hidden');
}



