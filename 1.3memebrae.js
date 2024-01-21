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
if (selectedOption1 && selectedOption1.value === "option4") {
                feedback1.textContent = 'Correct!, Choice D indicates a cholesterol molecule between the phospholipids.';
                feedback1.style.color = 'green';
            } else {
                feedback1.textContent = 'Incorrect. Choice A is incorrect because it is indicating a carbohydrate that is attached to a glycoprotein. Choice B is incorrect because it is indicating a channel protein. Choice C is incorrect as it is pointing to the lipid tail of a phospholipid.';
                feedback1.style.color = 'red';
            }

            // Checking Multiple Choice Question 2
            const selectedOption2 = document.querySelector('input[name="question2"]:checked');
            const feedback2 = document.getElementById('feedback2');
            if (selectedOption2 && selectedOption2.value === "option4") {
                feedback2.textContent = 'Correct! Structure D corresponds to a cholesterol molecule that can reduce membrane fluidity.';
                feedback2.style.color = 'green';
            } else {
                feedback2.textContent = 'Incorrect. Structure A corresponds to a glycoprotein, structure B corresponds to a glycolipid and structure C corresponds to an integral protein. None of these reduces the fluidity of membranes.';
                feedback2.style.color = 'red';
            }

            // Checking Multiple Choice Question 3
            const selectedOption3 = document.querySelector('input[name="question3"]:checked');
            const feedback3 = document.getElementById('feedback3');

            if (selectedOption1 && selectedOption1.value === "option3") { 
                feedback3.textContent = 'Correct! Structure X is a peripheral protein that is attached to one surface of the cell membrane.';
                feedback3.style.color = 'green';
            } else {
                feedback3.textContent = 'Incorrect. Protein channels span the width of membranes (Choice B) as do transmembrane proteins (Choice A). Cholesterol molecules do not have a globular structure (Choice D).';
                feedback3.style.color = 'red';
            }
// question 4 
            const selectedOption4 = document.querySelector('input[name="question4"]:checked');
            const feedback4 = document.getElementById('feedback4');
            if (selectedOption4 && selectedOption4.value === "option3") {
                feedback4.textContent = 'Correct! The image depicts a micelle, which has two layers of lipids (a bilayer), each containing hydrophilic heads and hydrophobic tails.';
                feedback4.style.color = 'green';
            } else {
                feedback4.textContent = 'Incorrect. Choices A, B, and D cannot be correct because this membrane does not include cholesterol.';
                feedback4.style.color = 'red';
            }

            // Question 5 Evaluation
            const selectedOption5 = document.querySelector('input[name="question5"]:checked');
            const feedback5 = document.getElementById('feedback5');
            if (selectedOption5 && selectedOption5.value === "option1") {
                feedback5.textContent = 'Correct! In electron micrographs, proteins look black, and phospholipids seem light, implying that proteins are layered on each side of a phospholipid interior.';
                feedback5.style.color = 'green';
            } else {
                feedback5.textContent = 'Incorrect. Proteins having hydrophobic regions (Choice B) and being varied in size (Choice C) and freeze fracturing results (Choice D) all suggest that proteins are embedded in the membrane and hence provide evidence against the Davson-Danielli model';
                feedback5.style.color = 'red';
            }

             // Question 6 Evaluation
             const selectedOption6 = document.querySelector('input[name="question6"]:checked');
             const feedback6 = document.getElementById('feedback6');
             if (selectedOption6 && selectedOption6.value === "option4") {
                 feedback6.textContent = 'Correct! Water is transported passively via protein channels known as aquaporins';
                 feedback6.style.color = 'green';
             } else {
                 feedback6.textContent = 'Incorrect. Cholesterol (Choice A) and glycoproteins (Choice B) are not components responsible for transport while protein pumps (Choice C) carry out active transport which is not utilized in the transport of water.';
                 feedback6.style.color = 'red';
             }



        });
    }
   
});

    hideAllContent();

window.onload = hideAllContent;