function hideAllContent() {
    const sectionsToHide = document.querySelectorAll('.content-section');
    sectionsToHide.forEach(section => {
        section.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Cytosol buttons
    const definitionButtonCytosol = document.getElementById('definitionButtonCytosol');
    const videoButtonCytosol = document.getElementById('videoButtonCytosol');
    const questionsButtonCytosol = document.getElementById('questionsButtonCytosol');

    // Eukaryotic cell buttons
    const definitionButtonEukaryotic = document.getElementById('definitionButtonEukaryotic');
    const videoButtonEukaryotic = document.getElementById('videoButtonEukaryotic');
    

    // Cytosol content sections
    const definitionsContentCytosol = document.getElementById('definitionsContentCytosol');
    const videoContentCytosol = document.getElementById('videoContentCytosol');
    const questionsContentCytosol = document.getElementById('questionsContentCytosol');

    // Eukaryotic cell content sections
    const definitionsContentEukaryotic = document.getElementById('definitionsContentEukaryotic');
    const videoContentEukaryotic = document.getElementById('videoContentEukaryotic');
    

    // Event listeners for cytosol buttons
    definitionButtonCytosol.addEventListener('click', function() {
        hideAllContent();
        definitionsContentCytosol.style.display = 'block';
    });

    videoButtonCytosol.addEventListener('click', function() {
        hideAllContent();
        videoContentCytosol.style.display = 'block';
    });

    questionsButtonCytosol.addEventListener('click', function() {
        hideAllContent();
        questionsContentCytosol.style.display = 'block';
    });

    definitionButtonEukaryotic.addEventListener('click', function() {
        hideAllContent();
        definitionsContentEukaryotic.style.display = 'block';
    });

    videoButtonEukaryotic.addEventListener('click', function() {
        hideAllContent();
        videoContentEukaryotic.style.display = 'block';
    });


    const questionFormCytosol = document.getElementById('questionsFormCytosol');

    const questionForm = document.getElementById('questionsForm');

    if (questionForm) {
        questionForm.addEventListener('submit', function(event) {
            event.preventDefault();
// Checking Multiple Choice Question 1
const selectedOption1 = document.querySelector('input[name="question1"]:checked');
const feedback1 = document.getElementById('feedback1');
if (selectedOption1 && selectedOption1.value === "option1") {
                feedback1.textContent = 'Correct!';
                feedback1.style.color = 'green';
            } else {
                feedback1.textContent = 'Incorrect. Glucose is a hexose sugar, meaning it has six carbon atoms, while ribose is a pentose sugar, having five carbon atoms. ';
                feedback1.style.color = 'red';
            }

            // Checking Multiple Choice Question 2
            const selectedOption2 = document.querySelector('input[name="question2"]:checked');
            const feedback2 = document.getElementById('feedback2');
            if (selectedOption2 && selectedOption2.value === "option1") {
                feedback2.textContent = 'Correct!';
                feedback2.style.color = 'green';
            } else {
                feedback2.textContent = 'Incorrect. Note that in glucose the four lower carbon atoms have -OH on one side, and -H on the other';
                feedback2.style.color = 'red';
            }

            // Checking Multiple Choice Question 3
            const selectedOption3 = document.querySelector('input[name="question3"]:checked');
            const feedback3 = document.getElementById('feedback3');

            if (selectedOption1 && selectedOption1.value === "option3") { 
                feedback3.textContent = 'Correct!';
                feedback3.style.color = 'green';
            } else {
                feedback3.textContent = 'Incorrect. In RNA molecules, ribose is a crucial component because it forms part of the backbone structure. Here is  a detailed explanation of its role  Ribose Structure in RNA Ribose is a pentose sugar, meaning it has five carbon atoms. In RNA, each ribose molecule is linked to one of the four nitrogenous bases adenine, guanine, cytosine, or uracil and a phosphate group Formation of the Backbone The backbone of RNA is formed by alternating ribose sugars and phosphate groups. This chain of ribose and phosphate gives RNA its structural framework. Specifically, the phosphate group of one nucleotide bonds to the 3 carbon of the ribose sugar of the next nucleotide, creating a sugar-phosphate-sugar chain.';
                feedback3.style.color = 'red';
            }
// question 4 
            const selectedOption4 = document.querySelector('input[name="question4"]:checked');
            const feedback4 = document.getElementById('feedback4');
            if (selectedOption4 && selectedOption4.value === "option3") {
                feedback4.textContent = 'Correct!';
                feedback4.style.color = 'green';
            } else {
                feedback4.textContent = 'Incorrect. Option C: Correct Answer Monosaccharide: Glucose is indeed a monosaccharide, which means it is a simple sugar with a basic molecular structure. It cannot be broken down into simpler sugars, which is characteristic of monosaccharides. Role in Energy Production: Glucose is central to cellular respiration, a metabolic process that cells use to generate energy. In this process, glucose is broken down to produce adenosine triphosphate (ATP), the primary energy carrier in cells.';
                feedback4.style.color = 'red';
            }

            // Question 5 Evaluation
            const selectedOption5 = document.querySelector('input[name="question5"]:checked');
            const feedback5 = document.getElementById('feedback5');
            if (selectedOption5 && selectedOption5.value === "option1") {
                feedback5.textContent = 'Correct! ';
                feedback5.style.color = 'green';
            } else {
                feedback5.textContent = 'Incorrect. Option B and Option C do not accurately describe the difference between ribose and deoxyribose. Deoxyribose does not have one less oxygen atom on the first carbon, nor does ribose have an extra hydroxyl group on the fifth carbon. Both sugars have the same configuration on the first and fifth carbons';
                feedback5.style.color = 'red';
            }

        });
    }
});
    hideAllContent();
// Initialize the content to be hidden on page load
window.onload = hideAllContent;