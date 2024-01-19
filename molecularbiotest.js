"use strict";

const quizData =[
    {
    question: "What is the primary function of DNA polymerase during DNA replication?",
    a: "Synthesize RNA molecules",
    b: "Unwind the DNA double helix",
    c: "Build a new DNA strand complementary to the template strand",
    d: "Repair damaged DNA",
    correct: "c",
    explanation: "DNA polymerase is responsible for building a new DNA strand by adding complementary nucleotides to the template strand during DNA replication."
},
{
    question: "Which organelle is the site of protein synthesis in a eukaryotic cell?",
    a: "Nucleus",
    b: "Golgi apparatus",
    c: "Ribosome",
    d: "Endoplasmic reticulum",
    correct: "c",
    explanation: "Ribosomes are the cellular structures responsible for protein synthesis."
},
{
    question: "What is the role of tRNA (transfer RNA) in protein synthesis?",
    a: "Carrying amino acids to the ribosome",
    b: "Forming peptide bonds between amino acids",
    c: "Providing the template for mRNA synthesis",
    d: "Initiating translation",
    correct: "a",
    explanation: "tRNA carries amino acids to the ribosome and ensures they are added in the correct order during protein synthesis."
},
{
    question: "Which of the following is the correct order of stages in mitosis?",
    a: "Prophase, Metaphase, Anaphase, Telophase",
    b: "Metaphase, Prophase, Telophase, Anaphase",
    c: "Anaphase, Telophase, Metaphase, Prophase",
    d: "Telophase, Anaphase, Prophase, Metaphase",
    correct: "a",
    explanation: "The correct order of mitotic stages is Prophase, Metaphase, Anaphase, and Telophase."
},
{
    question: "What is the function of the enzyme helicase during DNA replication?",
    a: "Synthesize new DNA strands",
    b: "Repair damaged DNA",
    c: "Unwind and separate the DNA double helix",
    d: "Join Okazaki fragments",
    correct: "c",
    explanation: "Helicase is responsible for unwinding and separating the DNA double helix, making it accessible for DNA replication."
},
{
    question: "Which type of RNA carries the genetic code from the DNA in the nucleus to the ribosome during protein synthesis?",
    a: "mRNA (messenger RNA)",
    b: "tRNA (transfer RNA)",
    c: "rRNA (ribosomal RNA)",
    d: "snRNA (small nuclear RNA)",
    correct: "a",
    explanation: "mRNA carries the genetic information from the DNA to the ribosome, where protein synthesis occurs."
},
{
    question: "What is the process by which mRNA is synthesized from a DNA template?",
    a: "Translation",
    b: "Replication",
    c: "Transcription",
    d: "Reverse transcription",
    correct: "c",
    explanation: "Transcription is the process of synthesizing mRNA from a DNA template in the nucleus."
},
{
    question: "Which molecule carries amino acids to the ribosome during protein synthesis?",
    a: "tRNA (transfer RNA)",
    b: "rRNA (ribosomal RNA)",
    c: "mRNA (messenger RNA)",
    d: "snRNA (small nuclear RNA)",
    correct: "a",
    explanation: "tRNA carries amino acids to the ribosome and plays a crucial role in protein synthesis."
},
{
    question: "What is the term for the three-nucleotide sequence on mRNA that codes for a specific amino acid?",
    a: "Intron",
    b: "Exon",
    c: "Codon",
    d: "Anticodon",
    correct: "c",
    explanation: "A codon is a sequence of three nucleotides on mRNA that codes for a specific amino acid during translation."
},
{
    question: "Which enzyme is responsible for unwinding the DNA double helix during DNA replication?",
    a: "DNA polymerase",
    b: "Helicase",
    c: "RNA polymerase",
    d: "Ligase",
    correct: "b",
    explanation: "Helicase is responsible for unwinding the DNA double helix, allowing DNA replication to occur."
},
{
    question: "In DNA, adenine (A) always pairs with which other nitrogenous base?",
    a: "Thymine (T)",
    b: "Cytosine (C)",
    c: "Guanine (G)",
    d: "Uracil (U)",
    correct: "a",
    explanation: "In DNA, adenine (A) always pairs with thymine (T) through hydrogen bonding."
},
{
    question: "What is the function of the ribosome in protein synthesis?",
    a: "Synthesize mRNA",
    b: "Unwind DNA",
    c: "Build new DNA strands",
    d: "Facilitate the assembly of amino acids into a polypeptide chain",
    correct: "d",
    explanation: "Ribosomes facilitate the assembly of amino acids into a polypeptide chain during protein synthesis."
},
{
    question: "What is the term for a change in the sequence of nucleotides in DNA that can lead to genetic variation?",
    a: "Mutation",
    b: "Translocation",
    c: "Translation",
    d: "Replication",
    correct: "a",
    explanation: "A mutation is a change in the sequence of nucleotides in DNA, which can lead to genetic variation."
},
{
    question: "Which cellular organelle is responsible for the breakdown of cellular waste and damaged organelles?",
    a: "Nucleus",
    b: "Endoplasmic reticulum",
    c: "Lysosome",
    d: "Ribosome",
    correct: "c",
    explanation: "Lysosomes are responsible for the breakdown of cellular waste and damaged organelles through enzymatic digestion."
},
{
    question: "During which phase of the cell cycle does DNA replication occur?",
    a: "G1 phase",
    b: "S phase",
    c: "G2 phase",
    d: "M phase",
    correct: "b",
    explanation: "DNA replication occurs during the S phase of the cell cycle."
},
{
    question: "What is the primary function of the enzyme ligase in DNA replication?",
    a: "Unwinding the DNA double helix",
    b: "Building new DNA strands",
    c: "Joining Okazaki fragments on the lagging strand",
    d: "Repairing damaged DNA",
    correct: "c",
    explanation: "Ligase is responsible for joining Okazaki fragments on the lagging strand during DNA replication."
},
{
    question: "Which of the following organelles is responsible for producing ATP through cellular respiration?",
    a: "Nucleus",
    b: "Mitochondria",
    c: "Endoplasmic reticulum",
    d: "Golgi apparatus",
    correct: "b",
    explanation: "Mitochondria are responsible for producing ATP through cellular respiration, serving as the powerhouse of the cell."
},
{
    question: "What is the term for the process by which RNA is synthesized from a DNA template?",
    a: "Translation",
    b: "Replication",
    c: "Transcription",
    d: "Reverse transcription",
    correct: "c",
    explanation: "Transcription is the process by which RNA is synthesized from a DNA template in the nucleus."
},
{
    question: "What is the function of the spliceosome in eukaryotic gene expression?",
    a: "Initiating transcription",
    b: "Proofreading mRNA",
    c: "Removing introns from pre-mRNA",
    d: "Stabilizing ribosomal RNA",
    correct: "c",
    explanation: "The spliceosome is responsible for removing introns and joining exons in pre-mRNA during RNA splicing, a critical step in gene expression."
},
{
    question: "What is the significance of alternative splicing in eukaryotic gene regulation?",
    a: "It increases the rate of transcription",
    b: "It generates multiple mRNA isoforms from a single gene",
    c: "It prevents RNA degradation",
    d: "It enhances ribosome binding",
    correct: "b",
    explanation: "Alternative splicing allows a single gene to produce multiple mRNA isoforms, leading to diversity in protein products from the same gene."
},
{
    question: "Which enzyme is responsible for the synthesis of RNA from a DNA template during transcription?",
    a: "DNA polymerase",
    b: "RNA polymerase",
    c: "Helicase",
    d: "Ligase",
    correct: "b",
    explanation: "RNA polymerase synthesizes RNA from a DNA template during transcription, using complementary base pairing."
},
{
    question: "What is the function of the 5' cap added to eukaryotic mRNA during RNA processing?",
    a: "Initiating translation",
    b: "Protecting the mRNA from degradation",
    c: "Enhancing transcription",
    d: "Splicing introns",
    correct: "b",
    explanation: "The 5' cap protects eukaryotic mRNA from degradation and plays a role in translation initiation."
},
{
    question: "What is the role of the Shine-Dalgarno sequence in prokaryotic gene expression?",
    a: "Initiating transcription",
    b: "Binding to ribosomal RNA",
    c: "Promoting transcription elongation",
    d: "Initiating translation",
    correct: "d",
    explanation: "The Shine-Dalgarno sequence in prokaryotes is involved in initiating translation by binding to the ribosome and positioning it for protein synthesis."
},
{
    question: "What is the function of the TATA box in eukaryotic gene promoters?",
    a: "Enhancing transcription termination",
    b: "Promoting mRNA splicing",
    c: "Binding to ribosomal RNA",
    d: "Initiating transcription",
    correct: "d",
    explanation: "The TATA box is a DNA sequence in eukaryotic gene promoters that plays a crucial role in initiating transcription by binding transcription factors."
},
{
    question: "What is the primary role of topoisomerases in DNA replication and transcription?",
    a: "Synthesizing RNA",
    b: "Unwinding DNA",
    c: "Relieving supercoiling and preventing DNA damage",
    d: "Initiating translation",
    correct: "c",
    explanation: "Topoisomerases are enzymes that relieve supercoiling in DNA, preventing DNA damage and ensuring proper DNA replication and transcription."
},
{
    question: "Which type of mutation results in a change of a single nucleotide base in a DNA sequence?",
    a: "Deletion mutation",
    b: "Insertion mutation",
    c: "Point mutation",
    d: "Frameshift mutation",
    correct: "c",
    explanation: "A point mutation involves the substitution of a single nucleotide base in a DNA sequence, potentially leading to changes in the encoded protein."
},
{
    question: "What is the primary function of the ribozyme in the ribosome during translation?",
    a: "Proofreading tRNA",
    b: "Catalyzing peptide bond formation",
    c: "Synthesizing rRNA",
    d: "Initiating translation",
    correct: "b",
    explanation: "The ribozyme in the ribosome catalyzes the formation of peptide bonds between amino acids during translation."
},
{
    question: "Which mechanism of gene regulation involves small RNA molecules that target mRNA for degradation or translational inhibition?",
    a: "Transcriptional regulation",
    b: "Post-translational modification",
    c: "RNA interference (RNAi)",
    d: "Alternative splicing",
    correct: "c",
    explanation: "RNA interference (RNAi) involves small RNA molecules that can bind to mRNA, leading to its degradation or translational inhibition, thereby regulating gene expression."
},
{
    question: "What is the role of the Krebs cycle (citric acid cycle) in cellular respiration?",
    a: "It generates ATP through substrate-level phosphorylation.",
    b: "It produces carbon dioxide as a waste product.",
    c: "It converts glucose into pyruvate.",
    d: "It generates electron carriers NADH and FADH2 for the electron transport chain.",
    correct: "d",
    explanation: "The Krebs cycle is responsible for generating electron carriers NADH and FADH2, which are used in the electron transport chain to produce ATP."
},
{
    question: "In the context of cell biology, what is the function of the rough endoplasmic reticulum (RER)?",
    a: "It stores calcium ions for muscle contraction.",
    b: "It synthesizes lipids and steroids.",
    c: "It plays a role in detoxifying drugs and poisons.",
    d: "It is involved in protein synthesis and membrane protein production.",
    correct: "d",
    explanation: "The rough endoplasmic reticulum (RER) is studded with ribosomes and is primarily involved in protein synthesis and the production of membrane proteins."
},
{
    question: "What is the function of restriction enzymes in molecular biology?",
    a: "They replicate DNA strands during DNA synthesis.",
    b: "They catalyze the formation of peptide bonds in proteins.",
    c: "They cut DNA at specific recognition sequences, facilitating DNA manipulation.",
    d: "They generate ATP from ADP and inorganic phosphate.",
    correct: "c",
    explanation: "Restriction enzymes are molecular scissors that cut DNA at specific recognition sequences, enabling the manipulation and study of DNA fragments."
},
{
    question: "Which process occurs during the light-dependent reactions of photosynthesis?",
    a: "Carbon fixation",
    b: "Production of glucose",
    c: "Conversion of NADH to NAD+",
    d: "Generation of ATP and oxygen release",
    correct: "d",
    explanation: "The light-dependent reactions of photosynthesis involve the generation of ATP and the release of oxygen as a byproduct in the thylakoid membranes of chloroplasts."
},
{
    question: "What is the function of reverse transcriptase in retroviruses like HIV (Human Immunodeficiency Virus)?",
    a: "It catalyzes the reverse transcription of RNA to DNA.",
    b: "It repairs damaged DNA in host cells.",
    c: "It facilitates translation of viral proteins.",
    d: "It promotes viral integration into the host cell genome.",
    correct: "a",
    explanation: "Reverse transcriptase is an enzyme in retroviruses that catalyzes the reverse transcription of the viral RNA genome into DNA, which can then be integrated into the host cell genome."
},
{
    question: "In meiosis, during which stage does crossing-over occur?",
    a: "Prophase I",
    b: "Metaphase I",
    c: "Anaphase I",
    d: "Telophase I",
    correct: "a",
    explanation: "Crossing-over, the exchange of genetic material between homologous chromosomes, occurs during Prophase I of meiosis, contributing to genetic diversity."
},
{
    question: "What is the primary function of the enzyme helicase in DNA replication?",
    a: "It synthesizes RNA primers.",
    b: "It proofreads DNA for errors.",
    c: "It unwinds and separates the DNA double helix.",
    d: "It connects Okazaki fragments on the lagging strand.",
    correct: "c",
    explanation: "Helicase is responsible for unwinding and separating the DNA double helix, creating single-stranded DNA templates for replication."
},
{
    question: "Which organelle is responsible for packaging and sorting cellular proteins for transport?",
    a: "Golgi apparatus",
    b: "Lysosome",
    c: "Ribosome",
    d: "Peroxisome",
    correct: "a",
    explanation: "The Golgi apparatus is involved in packaging, modifying, and sorting cellular proteins for transport to various cellular locations or for secretion."
}
       
    ];
    

let currentQuiz = 0;
let score = 0;
let userAnswers = []; // Array to store user's answers

const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextBtn = document.getElementById("btn");
const quizDetailEl = document.querySelector(".quiz-details"); // Define this if needed

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length} Questions</p>`;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

nextBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        userAnswers[currentQuiz] = answer; // Store user's answer

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.querySelector('.quiz-container').innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <div class="results-container">
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button type="button" class="reload-btn" onclick="location.reload()">Reload</button>
            <button type="button" class="see-mistakes-btn" onclick="showMistakes()">See Mistakes</button>
        </div>`;
        }
    }
});

function showMistakes() {
    let mistakesSummary = quizData.map((data, index) => {
        let userAnswer = userAnswers[index];
        let correctAnswer = data.correct;
        if (userAnswer !== correctAnswer) {
            return {
                question: data.question,
                yourAnswer: data[userAnswer],
                correctAnswer: data[correctAnswer],
                explanation: data.explanation // Assuming each quizData object has an 'explanation' field
            };
        }
        return null;
    }).filter(item => item !== null);

    sessionStorage.setItem('mistakes', JSON.stringify(mistakesSummary));
    window.location.href = 'mistakespagemolebiotest.html';
}