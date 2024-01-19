// Function to hide all content sections
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
if (selectedOption1 && selectedOption1.value === "option3") {
                feedback1.textContent = 'Correct!, because  Prokaryotic cells typically have circular DNA, which means their genetic material is organized in a single, continuous circular molecule called a nucleoid. This is in contrast to eukaryotic cells, which have linear DNA organized within a membrane-bound nucleus.';
                feedback1.style.color = 'green';
            } else {
                feedback1.textContent = 'Incorrect. The correct answer is Option C: Circular DNA, because Prokaryotic cells typically have circular DNA, which means their genetic material is organized in a single, continuous circular molecule called a nucleoid. This is in contrast to eukaryotic cells, which have linear DNA organized within a membrane-bound nucleus ';
                feedback1.style.color = 'red';
            }

            // Checking Multiple Choice Question 2
            const selectedOption2 = document.querySelector('input[name="question2"]:checked');
            const feedback2 = document.getElementById('feedback2');
            if (selectedOption2 && selectedOption2.value === "option3") {
                feedback2.textContent = 'Correct!';
                feedback2.style.color = 'green';
            } else {
                feedback2.textContent = 'Incorrect. The correct answer is Option C (Circular DNA). Explanation: Prokaryotic cells have circular DNA which is not enclosed in a nucleus.';
                feedback2.style.color = 'red';
            }

            // Checking Multiple Choice Question 3
            const selectedOption3 = document.querySelector('input[name="question3"]:checked');
            const feedback3 = document.getElementById('feedback3');

            if (selectedOption1 && selectedOption1.value === "option1") { 
                feedback3.textContent = 'Correct! Eukaryotic cells contain mitochondria but prokaryotic cells do not';
                feedback3.style.color = 'green';
            } else {
                feedback3.textContent = 'Incorrect. The correct answer is Option A because Choices B and D are incorrect as the cell is not prokaryotic; it has a nucleus. Choice C is incorrect because the cell has a nucleus.';
                feedback3.style.color = 'red';
            }
// question 4 
            const selectedOption4 = document.querySelector('input[name="question4"]:checked');
            const feedback4 = document.getElementById('feedback4');
            if (selectedOption4 && selectedOption4.value === "option4") {
                feedback4.textContent = 'Correct! Prokaryotic cells do not contain mitochondria but eukaryotic cells do';
                feedback4.style.color = 'green';
            } else {
                feedback4.textContent = 'Incorrect. The correct answer is Choice A. The answer is incorrect as eukaryotes (as well as Archae) contain 80S ribosomes. Choice B is incorrect as both eukaryotic and prokaryotic cells contain a plasma membrane. Choice C is incorrect as eukaryotic cells contain a nucleus but prokaryotic cells do not';
                feedback4.style.color = 'red';
            }

            // Question 5 Evaluation
            const selectedOption5 = document.querySelector('input[name="question5"]:checked');
            const feedback5 = document.getElementById('feedback5');
            if (selectedOption5 && selectedOption5.value === "option2") {
                feedback5.textContent = 'Correct! Unlike eukaryotes, prokaryotes lack a nucleus and membrane-bound organelles. However, like eukaryotes, prokaryotes contain ribosomes, a non-membrane-bound organelle required for protein synthesis. So, ribosomes are found in both prokaryotes and eukaryotes.';
                feedback5.style.color = 'green';
            } else {
                feedback5.textContent = 'Incorrect. The correct answer is Option B because Lysosomes (Choice A) and the Golgi apparatus (Choice C) are only found in eukaryotes. The nucleoid (Choice D) is only found in prokaryotes.';
                feedback5.style.color = 'red';
            }

             // Question 6 Evaluation
             const selectedOption6 = document.querySelector('input[name="question6"]:checked');
             const feedback6 = document.getElementById('feedback6');
             if (selectedOption6 && selectedOption6.value === "option3") {
                 feedback6.textContent = 'Correct! ';
                 feedback6.style.color = 'green';
             } else {
                 feedback6.textContent = 'Incorrect.The Golgi apparatus produces vesicles that contain substances destined for exocytosis from the cell. The Golgi apparatus is composed of stacks of flattened pouches called cisternae. These appear in a micrograph as the stacked, flattened discs indicated by Choice C.';
                 feedback6.style.color = 'red';
             }


             // question 7 

                          const selectedOption7 = document.querySelector('input[name="question7"]:checked');
                          const feedback7 = document.getElementById('feedback7');
                          if (selectedOption7 && selectedOption7.value === "option2") {
                              feedback7.textContent = 'Correct! Choice B is correct because it shows the rough endoplasmic reticulum, which has bound ribosomes that synthesise proteins.';
                              feedback7.style.color = 'green';
                          } else {
                              feedback7.textContent = 'Incorrect. Choice A shows the nucleus which contains the genetic information and controls the activity of the cell. Choice C shows a chloroplast, the site of photosynthesis. Choice D indicates the golgi apparatus which packages and transports proteins.';
                              feedback7.style.color = 'red';
                          }

        });
    }
   
});

    hideAllContent();
// Initialize the content to be hidden on page load
window.onload = hideAllContent;