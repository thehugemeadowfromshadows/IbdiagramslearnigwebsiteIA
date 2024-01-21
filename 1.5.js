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
if (selectedOption1 && selectedOption1.value === "option1") {
                feedback1.textContent = 'Correct!, The endosymbiotic theory states that larger prokaryotes engulfed smaller prokaryotes, which were the ancestors of modern chloroplasts and mitochondria, eventually evolving into eukaryotes. Choice A is correct.                ';
                feedback1.style.color = 'green';
            } else {
                feedback1.textContent = 'Incorrect. Statement I (Choices B and D) is incorrect as prokaryotes were not formed by the endosymbiotic theory. Statement III (Choice C) is incorrect as spontaneous generation is impossible.';
                feedback1.style.color = 'red';
            }

            // Checking Multiple Choice Question 2
            const selectedOption2 = document.querySelector('input[name="question2"]:checked');
            const feedback2 = document.getElementById('feedback2');
            if (selectedOption2 && selectedOption2.value === "option2") {
                feedback2.textContent = 'Correct! Louis Pasteurs experiments where he boiled nutrient broth in swan-necked flasks disproved spontaneous generation. Choice B is correct';
                feedback2.style.color = 'green';
            } else {
                feedback2.textContent = 'Incorrect. Miller and Urey (Choice A) experiments proved that organic compounds could be produced in Earth’s early atmosphere. Rosalind Franklin’s (Choice C) work was instrumental in the discovery of the structure of DNA. Meselson and Stahl (Choice D) proved that DNA replication is semi-conservative. ';
                feedback2.style.color = 'red';
            }

            // Checking Multiple Choice Question 3
            const selectedOption3 = document.querySelector('input[name="question3"]:checked');
            const feedback3 = document.getElementById('feedback3');

            if (selectedOption1 && selectedOption1.value === "option2") { 
                feedback3.textContent = 'Correct! The endosymbiotic theory states that larger prokaryotes engulfed smaller prokaryotes, which were the ancestors of modern chloroplasts and mitochondria. The smaller prokaryotes were engulfed via endocytosis, so they have their original membrane as well as the membrane of the larger prokaryote. Choice B is correct.                ';
                feedback3.style.color = 'green';
            } else {
                feedback3.textContent = 'Incorrect. Choice A is incorrect because it provides evidence for the evolution of plasma membranes not endosymbiotic theory. Choice C is incorrect because it provides evidence for the mechanism of inheritance. Choice D is incorrect because mitochondria have a double membrane.';
                feedback3.style.color = 'red';
            }
// question 4 
            const selectedOption4 = document.querySelector('input[name="question4"]:checked');
            const feedback4 = document.getElementById('feedback4');
            if (selectedOption4 && selectedOption4.value === "option1") {
                feedback4.textContent = 'Correct! Choice A is correct because what is meant by “the genetic code is degenerate” is multiple codons sometimes code for the same amino acid, which means that sometimes a mutation will change the genetic code, but the same amino acid is still coded for.                ';
                feedback4.style.color = 'green';
            } else {
                feedback4.textContent = 'Incorrect. Choice B is incorrect as mutations generally occur more frequently in DNA that does not code for proteins. Choice C is incorrect as techniques used to analyse the base sequence of DNA are more reliable than those used to determine the order of amino acids. Choice D is incorrect as the universality of the genetic code refers to the fact that all organisms use the same genetic code.';
                feedback4.style.color = 'red';
            }

            // Question 5 Evaluation
            const selectedOption5 = document.querySelector('input[name="question5"]:checked');
            const feedback5 = document.getElementById('feedback5');
            if (selectedOption5 && selectedOption5.value === "option1") {
                feedback5.textContent = 'Correct! Flasks R and S (Choice A) would show the presence of microorganisms as Flask R is exposed to the air, so bacteria can enter and Flask S wasnt boiled, so microorganisms originally in the flask were not killed before the flask was sealed.                ';
                feedback5.style.color = 'green';
            } else {
                feedback5.textContent = 'Incorrect. Flask P (Choice D) is incorrect as it was boiled first, killing any microorganisms and sealed so no more microorganisms can enter. Flask Q (Choices B, C, D) is incorrect because it was boiled, killing any microorganisms present. Swan-necked flasks prevent dust particles from carrying bacteria into the flask.';
                feedback5.style.color = 'red';
            }

                        // Question 6 Evaluation
                        const selectedOption6 = document.querySelector('input[name="question6"]:checked');
                        const feedback6 = document.getElementById('feedback6');
                        if (selectedOption6 && selectedOption6.value === "option1") {
                            feedback6.textContent = 'Correct! ';
                            feedback6.style.color = 'green';
                        } else {
                            feedback6.textContent = 'Incorrect. Mitochondria and prokaryotes both contain their own DNA (Choice A). Choices B, C and D are incorrect as they are all only present in prokaryotes but not in mitochondria.';
                            feedback6.style.color = 'red';
                        }


            });
        }
       
    });
    
        hideAllContent();
    
    window.onload = hideAllContent;