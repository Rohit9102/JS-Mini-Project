const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            {text: "a) Madrid", correct:false},
            {text: "b) Berlin", correct:false},
            {text: "c) Paris", correct:true},
            {text: "d) Rome", correct:false},
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "a) Venus", correct:false},
            {text: "b) Mars", correct:true},
            {text: "c) Jupiter", correct:false},
            {text: "d) Saturn", correct:false},
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "a) Charles Dickens", correct:false},
            {text: "b) J.K. Rowling", correct:false},
            {text: "c) William Shakespeare", correct:true},
            {text: "d) Jane Austen", correct:false},
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answers: [
            {text: "a) Atlantic Ocean", correct:false},
            {text: "b) Indian Ocean", correct:false},
            {text: "c) Pacific Ocean", correct:true},
            {text: "d) Arctic Ocean", correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button); 

        if(answer.correct){
            button.dataset.correct = answer.correct;

        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();