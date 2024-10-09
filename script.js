let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('question').innerHTML = `What is ${num1} x ${num2}?`;
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let correctAnswer = num1 * num2;
    let resultText = (userAnswer === correctAnswer) ? 'Correct!' : `Wrong! The correct answer was ${correctAnswer}.`;
    document.getElementById('result').innerHTML = resultText;
}

function nextQuestion() {
    document.getElementById('answer').value = '';
    document.getElementById('result').innerHTML = '';
    generateQuestion();
}

// Generate the first question when the page loads
window.onload = generateQuestion;

let score = 0;

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let correctAnswer = num1 * num2;
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('result').innerHTML = 'Correct! You earned a star!';
        document.getElementById('score').innerHTML = `Score: ${score}`;
    } else {
        document.getElementById('result').innerHTML = `Wrong! The correct answer was ${correctAnswer}.`;
    }
}
