Quiz App ---

Description ---

This is a simple quiz application built using HTML, CSS, and JavaScript. The quiz presents multiple-choice questions to the user, allows them to select an answer, and provides feedback on whether the answer is correct or incorrect. The quiz tracks the user's score and displays the final result at the end.

Technologies Used ---

HTML: Structure of the quiz application.

CSS: Styling and layout of the quiz.

JavaScript: Logic for displaying questions, handling answers, and tracking scores.

How the Code Works ---

HTML (index.html):

Defines the basic structure of the quiz.

Contains a div to display the question and answer buttons.

Includes a "Next" button for navigating through the quiz.

Links to an external CSS file (style.css) and a JavaScript file (script.js).

CSS (style.css):

Styles the quiz layout, buttons, and text.

Includes hover effects for buttons.

Defines colors for correct and incorrect answers.

JavaScript (script.js):

Stores the quiz questions and answers in an array.

Dynamically updates the question and answer choices.

Handles user selection and provides feedback by highlighting correct and incorrect answers.

Keeps track of the user's score and displays it at the end.

Implements a reset functionality to restart the quiz.

Code Comments ---

HTML

The main container is inside <div class="app">.

Question text is inside <h2 id="question">.

Answer buttons are dynamically generated inside <div id="answer-buttons">.

The "Next" button allows users to proceed to the next question.

CSS

The .btn class styles answer buttons.

.correct and .incorrect classes highlight correct and incorrect answers.

#next-btn controls the "Next" button visibility.

JavaScript

startQuiz(): Initializes the quiz.

showQuestion(): Displays the current question and answer choices.

selectAnswer(e): Handles user selection and applies styling based on correctness.

showScore(): Displays the final score after all questions are answered.

handleNextButton(): Moves to the next question or shows the score at the end.

resetState(): Clears the previous question and answer buttons before loading a new one.

This quiz app is a great starting point for understanding DOM manipulation and event handling in JavaScript.

Installation & Usage --- 

Clone the repository:

git clone https://github.com/Rohit9102/quiz-app.git

Open index.html in a browser to start the quiz.

Answer the questions, check your score, and restart the quiz to improve your results!

