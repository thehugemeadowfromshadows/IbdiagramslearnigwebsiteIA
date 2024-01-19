document.addEventListener('DOMContentLoaded', function() {
    const mistakesContainer = document.getElementById('mistakesContainer');
    const mistakes = JSON.parse(sessionStorage.getItem('mistakes'));

    if (mistakes && mistakes.length > 0) {
        mistakes.forEach(mistake => {
            let mistakeElement = document.createElement('div');
            mistakeElement.classList.add('mistake-item');
            mistakeElement.innerHTML = `
                <h3>Question: ${mistake.question}</h3>
                <p>Your Answer: ${mistake.yourAnswer}</p>
                <p>Correct Answer: ${mistake.correctAnswer}</p>
                <p>Explanation: ${mistake.explanation}</p>
            `;
            mistakesContainer.appendChild(mistakeElement);
        });
    } else {
        mistakesContainer.innerHTML = '<p>No mistakes to show or you have not taken the quiz yet.</p>';
    }
});