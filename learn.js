let currentQuestionIndex = 0;
let currentQuestions = [];

function loadQuestions(level) {
    // Assume you have an array of questions, each with options and the correct answer
    const questionsByLevel = {
        1: [
            { question: "What is 2 + 2?", options: ["3", "4", "5"], correctAnswer: "4" },
            { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus"], correctAnswer: "Mars" },
            // Add more questions for Level 1
        ],
        2: [
            { question: "What is the capital of France?", options: ["London", "Berlin", "Paris"], correctAnswer: "Paris" },
            { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen"], correctAnswer: "William Shakespeare" },
            // Add more questions for Level 2
        ],
        // Add questions for other levels
    };

    currentQuestionIndex = 0;
    currentQuestions = questionsByLevel[level];

    showCurrentQuestion();
}

function showCurrentQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const nextButton = document.getElementById('nextButton');

    if (currentQuestionIndex < currentQuestions.length) {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        const optionsHTML = currentQuestion.options.map((option, index) => `<input type="radio" name="answer" value="${index}">${option}`).join('<br>');

        // Display the current question with options
        quizContainer.innerHTML = `<p>${currentQuestion.question}</p>${optionsHTML}`;

        // Show the "Next" button
        nextButton.style.display = 'block';
    } else {
        // All questions answered
        quizContainer.innerHTML = '<p>All questions answered!</p>';
        nextButton.style.display = 'none'; // Hide the "Next" button
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const quizContainer = document.getElementById('quiz-container');

    if (selectedAnswer) {
        const userAnswer = currentQuestions[currentQuestionIndex].options[selectedAnswer.value];
        const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            // Display correct answer in green
            quizContainer.innerHTML += `<p style="color: green;">Correct! ${currentQuestions[currentQuestionIndex].question} - ${userAnswer}</p>`;
        } else {
            // Display incorrect answer in red and prompt to repeat the question
            quizContainer.innerHTML += `<p style="color: red;">Incorrect! You selected ${userAnswer}. Please repeat the question.</p>`;
            currentQuestions.push(currentQuestions[currentQuestionIndex]); // Repeat the question
        }

        currentQuestionIndex++;
        showCurrentQuestion();
    } else {
        alert('Please select an answer before proceeding to the next question.');
    }
}
