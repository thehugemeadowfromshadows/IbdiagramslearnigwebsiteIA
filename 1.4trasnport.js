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
   

    // Cytosol content sections
    const definitionsContentCytosol = document.getElementById('definitionsContentCytosol');
    const videoContentCytosol = document.getElementById('videoContentCytosol');
    const questionsContentCytosol = document.getElementById('questionsContentCytosol');

   

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



    const questionFormCytosol = document.getElementById('questionsFormCytosol');

    const questionForm = document.getElementById('questionsForm');

    if (questionForm) {
        questionForm.addEventListener('submit', function(event) {
            event.preventDefault();
// Checking Multiple Choice Question 1
const selectedOption1 = document.querySelector('input[name="question1"]:checked');
const feedback1 = document.getElementById('feedback1');
if (selectedOption1 && selectedOption1.value === "option2") {
                feedback1.textContent = 'Correct!, Protein pumps are membrane proteins that carry out active transport. They require the energy to pump molecules up their concentration gradient. ';
                feedback1.style.color = 'green';
            } else {
                feedback1.textContent = 'Incorrect. Protein channels (Choice A), protein carriers (Choice C), and aquaporins (Choice D) all conduct passive transport. ';
                feedback1.style.color = 'red';
            }

            // Checking Multiple Choice Question 2
            const selectedOption2 = document.querySelector('input[name="question2"]:checked');
            const feedback2 = document.getElementById('feedback2');
            if (selectedOption2 && selectedOption2.value === "option3") {
                feedback2.textContent = 'Correct! The solution used to bathe organs to be used in a transplant should have an osmolarity equal to that of the organ to be transplanted and so the solution is isotonic compared to the organ’s tissues.';
                feedback2.style.color = 'green';
            } else {
                feedback2.textContent = 'Incorrect. A solution with an osmolarity higher than that of the organ to be transplanted (Choice A) would cause tissue cells to shrivel, while a solution with an osmolarity lower than that of the organ to be transplanted (Choice B) would cause organ cells to burst. There are no described protocols that indicate that the solution should be mixed with cells from the organ to be transplanted (Choice D).';
                feedback2.style.color = 'red';
            }

            // Checking Multiple Choice Question 3
            const selectedOption3 = document.querySelector('input[name="question3"]:checked');
            const feedback3 = document.getElementById('feedback3');

            if (selectedOption1 && selectedOption1.value === "option4") { 
                feedback3.textContent = 'Correct! Choice D - Endocytosis is an example of active transport that moves large molecules, parts of a cell, or a cell from the cell’s exterior, into a cell’s interior. This is in accordance with the endosymbiotic theory, which is the most likely process by which mitochondria came to be eukaryotic organelles.';
                feedback3.style.color = 'green';
            } else {
                feedback3.textContent = 'Incorrect. Choice A – Osmosis is an example of passive transport, which involves the movement of water across a semi-permeable membrane. Choice B - Exocytosis is an example of active transport that moves large molecules out of the cell to the cell’s exterior. Choice C – Apoptosis is the process of programmed cell death.';
                feedback3.style.color = 'red';
            }
// question 4 
            const selectedOption4 = document.querySelector('input[name="question4"]:checked');
            const feedback4 = document.getElementById('feedback4');
            if (selectedOption4 && selectedOption4.value === "option1") {
                feedback4.textContent = 'Correct! The image shows endocytosis, a form of active transport.';
                feedback4.style.color = 'green';
            } else {
                feedback4.textContent = 'Incorrect. Choices B and C are incorrect since they are types of passive transport. Choice D is incorrect since this is endocytosis, not exocytosis.';
                feedback4.style.color = 'red';
            }

            // Question 5 Evaluation
            const selectedOption5 = document.querySelector('input[name="question5"]:checked');
            const feedback5 = document.getElementById('feedback5');
            if (selectedOption5 && selectedOption5.value === "option1") {
                feedback5.textContent = 'Correct! Red blood cells placed in a hypertonic solution shrivel or become crenated, as shown in micrograph A. Plant cells undergo plasmolysis.';
                feedback5.style.color = 'green';
            } else {
                feedback5.textContent = 'Incorrect. Red blood cells placed in a hypotonic solution (Choice B) or distilled water (Choice D) would swell and eventually burst, as shown in micrograph C. Cells placed in an isotonic solution (Choice C) would show no change in appearance, as shown in micrograph B.';
                feedback5.style.color = 'red';
            }





        });
    }
   
});

    hideAllContent();

window.onload = hideAllContent;