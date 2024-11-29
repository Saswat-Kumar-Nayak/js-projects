const questions = [
    {

        question: "Which is largest animal in the world",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is longest river in the world",
        answers: [
            {text: "The Congo", correct: false},
            {text: "The Mississippi", correct: false},
            {text: "The Nile", correct: true},
            {text: "The Danube", correct: false},
        ]
    },
    {
        question: "Which is smallest continent in the world",
        answers: [
            {text: "Australia", correct: true},
            {text: "Asia", correct: false},
            {text: "Africa", correct: false},
            {text: "Arctic", correct: false},
        ]
    },
    {
        question: "Which is smallest country in the world",
        answers: [
            {text: "Nepal", correct: false},
            {text: "Bhutan", correct: false},
            {text: "Shri Lanka", correct: false},
            {text: "Vatican city", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}


function resetState(){
   nextButton.style.display = "none";
   while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   }
}





startQuiz();