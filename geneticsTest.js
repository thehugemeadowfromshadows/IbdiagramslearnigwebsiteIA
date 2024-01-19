"use strict";

const quizData =[
    {
        question: "What is a gene?",
        a: "A segment of DNA that codes for a specific protein",
        b: "A type of RNA molecule",
        c: "A region of the cell nucleus",
        d: "A protein that regulates gene expression",
        correct: "a",
        explanation: "A gene is a segment of DNA that contains the instructions for making a specific protein."
    },
    {
        question: "In Mendel's experiments with pea plants, what is the term for a trait that is masked or hidden in the presence of a dominant trait?",
        a: "Recessive",
        b: "Dominant",
        c: "Homozygous",
        d: "Co-dominant",
        correct: "a",
        explanation: "A recessive trait is one that is expressed only when an individual has two copies of the recessive allele."
    },
    {
        question: "What is the term for a gene that has more than two alleles in a population?",
        a: "Heterozygous",
        b: "Codominant",
        c: "Polygenic",
        d: "Multiple alleles",
        correct: "d",
        explanation: "A gene with multiple alleles means that there are more than two possible versions (alleles) of that gene in a population."
    },
    {
        question: "In humans, what is the sex-linked recessive disorder characterized by the absence of blood clotting factors?",
        a: "Hemophilia",
        b: "Cystic fibrosis",
        c: "Sickle cell anemia",
        d: "Huntington's disease",
        correct: "a",
        explanation: "Hemophilia is a sex-linked recessive disorder that results in the absence of blood clotting factors, leading to prolonged bleeding."
    },
    {
        question: "What term describes a trait controlled by multiple genes, often resulting in a continuous range of phenotypes?",
        a: "Monohybrid",
        b: "Polygenic",
        c: "Codominant",
        d: "Heterozygous",
        correct: "b",
        explanation: "Polygenic traits are controlled by multiple genes, and their phenotypes often show a continuous range of variation."
    },
    {
        question: "What is the term for the loss of one or more chromosomes in a diploid cell?",
        a: "Polyploidy",
        b: "Aneuploidy",
        c: "Homologous recombination",
        d: "Crossing over",
        correct: "b",
        explanation: "Aneuploidy refers to the loss or gain of one or more chromosomes in a diploid cell, resulting in an abnormal chromosome number."
    },
    {
        question: "In DNA replication, what enzyme is responsible for unwinding the double helix and creating single-stranded templates for replication?",
        a: "DNA polymerase",
        b: "Helicase",
        c: "RNA polymerase",
        d: "Ligase",
        correct: "b",
        explanation: "Helicase is the enzyme responsible for unwinding the DNA double helix during DNA replication."
    },
    {
        question: "What is the term for a mutation that causes a change in the DNA sequence resulting in the insertion or deletion of one or more nucleotides?",
        a: "Point mutation",
        b: "Silent mutation",
        c: "Frameshift mutation",
        d: "Missense mutation",
        correct: "c",
        explanation: "A frameshift mutation occurs when one or more nucleotides are inserted or deleted from the DNA sequence, causing a shift in the reading frame."
    },
    {
        question: "In a dihybrid cross, how many different combinations of alleles can result from the assortment of two gene pairs on non-homologous chromosomes?",
        a: "2",
        b: "4",
        c: "8",
        d: "16",
        correct: "d",
        explanation: "In a dihybrid cross, the number of different allele combinations that can result is 2^n, where n is the number of gene pairs. So, for two gene pairs, it's 2^2 = 4 different combinations."
    },
    {
        question: "What is the term for a type of DNA mutation where a nucleotide is replaced by another nucleotide that results in a change in the amino acid sequence of a protein?",
        a: "Point mutation",
        b: "Silent mutation",
        c: "Missense mutation",
        d: "Nonsense mutation",
        correct: "c",
        explanation: "A missense mutation is a type of mutation where a nucleotide substitution results in a change in the amino acid sequence of a protein."
    },
    {
        question: "In a population, what is the term for the occurrence of more than one allele at a single gene locus within the gene pool?",
        a: "Genetic drift",
        b: "Allelic variation",
        c: "Pleiotropy",
        d: "Epistasis",
        correct: "b",
        explanation: "Allelic variation refers to the presence of multiple alleles at a single gene locus in a population."
    },
    {
        question: "What is the name of the genetic disorder characterized by an abnormal expansion of CAG repeats in a specific gene, leading to progressive neurodegeneration?",
        a: "Hemophilia",
        b: "Cystic fibrosis",
        c: "Huntington's disease",
        d: "Sickle cell anemia",
        correct: "c",
        explanation: "Huntington's disease is caused by an expansion of CAG repeats in the HTT gene and results in neurodegeneration."
    },
    {
        question: "In genetic mapping, what is the unit of distance that represents the frequency of recombination between two genes on a chromosome?",
        a: "Centimorgan (cM)",
        b: "Nucleotide pair",
        c: "Base pair (bp)",
        d: "Kilobase pair (kb)",
        correct: "a",
        explanation: "A centimorgan (cM) is a unit of genetic distance that represents a 1% chance of recombination between two genes on a chromosome."
    },
    {
        question: "What is the name of the DNA repair mechanism that corrects mismatched base pairs in the DNA double helix?",
        a: "Homologous recombination",
        b: "Nucleotide excision repair",
        c: "Mismatch repair (MMR)",
        d: "Base excision repair",
        correct: "c",
        explanation: "Mismatch repair (MMR) is a DNA repair mechanism that corrects mismatched base pairs during DNA replication."
    },
    {
        question: "In a pedigree chart, what symbol is used to represent an individual of unknown gender?",
        a: "Square",
        b: "Circle",
        c: "Diamond",
        d: "Triangle",
        correct: "c",
        explanation: "A diamond symbol is typically used to represent an individual of unknown gender in a pedigree chart."
    },
    {
        question: "What is the term for a gene that suppresses the expression of another gene when both are present in the same organism?",
        a: "Epistatic gene",
        b: "Recessive gene",
        c: "Dominant gene",
        d: "Codominant gene",
        correct: "a",
        explanation: "An epistatic gene is a gene that can suppress the expression of another gene when both are present in the same organism."
    },
    {
        question: "What is the name of the genetic phenomenon in which the expression of one gene is influenced by the presence of another non-allelic gene?",
        a: "Pleiotropy",
        b: "Epigenetics",
        c: "Polygenic inheritance",
        d: "Gene interaction",
        correct: "d",
        explanation: "Gene interaction refers to the phenomenon where the expression of one gene is influenced by the presence of another non-allelic gene."
    },
    {
        question: "In DNA replication, what is the role of primase?",
        a: "Synthesizing the leading strand",
        b: "Unwinding the DNA double helix",
        c: "Laying down RNA primers for DNA synthesis",
        d: "Repairing DNA damage",
        correct: "c",
        explanation: "Primase is responsible for laying down RNA primers on the DNA template, which serve as starting points for DNA synthesis."
    },
    {
        question: "What is the term for the inheritance pattern in which both alleles of a gene are expressed in a heterozygous individual?",
        a: "Incomplete dominance",
        b: "Codominance",
        c: "Polygenic inheritance",
        d: "Epigenetics",
        correct: "b",
        explanation: "Codominance is an inheritance pattern where both alleles of a gene are fully expressed in a heterozygous individual."
    },
    {
        question: "In genetic crosses, what is the probability of obtaining a dihybrid offspring with a dominant phenotype for both traits when crossing two individuals who are heterozygous for both traits?",
        a: "1/4",
        b: "1/8",
        c: "3/4",
        d: "9/16",
        correct: "b",
        explanation: "The probability of obtaining a dihybrid offspring with a dominant phenotype for both traits in a double heterozygous cross is 1/8."
    },
    {
        question: "What is the term for the phenomenon in which a single gene has multiple effects on an organism's phenotype?",
        a: "Codominance",
        b: "Pleiotropy",
        c: "Polygenic inheritance",
        d: "Epigenetics",
        correct: "b",
        explanation: "Pleiotropy is the phenomenon where a single gene can have multiple effects on an organism's phenotype."
    },
    {
        question: "In a population, what is the term for a change in allele frequencies due to random events rather than natural selection?",
        a: "Gene flow",
        b: "Adaptation",
        c: "Genetic drift",
        d: "Mutation",
        correct: "c",
        explanation: "Genetic drift is the change in allele frequencies in a population due to random events rather than natural selection."
    },
    {
        question: "What is the name of the process by which mRNA is edited before translation to remove introns and splice together exons?",
        a: "Translation",
        b: "Transcription",
        c: "RNA interference (RNAi)",
        d: "RNA splicing",
        correct: "d",
        explanation: "RNA splicing is the process by which introns are removed and exons are joined together in mRNA before translation."
    },
    {
        question: "In genetic crosses, what is the term for the situation when one gene masks the expression of another gene at a different locus?",
        a: "Codominance",
        b: "Pleiotropy",
        c: "Epistasis",
        d: "Polygenic inheritance",
        correct: "c",
        explanation: "Epistasis is the genetic interaction where one gene's expression masks the expression of another gene at a different locus."
    },
    {
        question: "What is the role of the enzyme telomerase in DNA replication?",
        a: "Synthesizing RNA primers",
        b: "Unwinding the DNA double helix",
        c: "Repairing DNA damage",
        d: "Extending the ends of linear chromosomes",
        correct: "d",
        explanation: "Telomerase is responsible for extending the ends of linear chromosomes, preventing them from shortening during replication."
    },
    {
        question: "In human males, what is the sex-determining region of the Y chromosome that initiates male development?",
        a: "SRY gene",
        b: "Hemizygous region",
        c: "Autosome",
        d: "XIST gene",
        correct: "a",
        explanation: "The SRY (Sex-determining Region Y) gene on the Y chromosome initiates male development in human males."
    },
    {
        question: "What is the term for a type of mutation that results in a change of a single nucleotide base pair and may lead to the conversion of one amino acid to another in a protein?",
        a: "Silent mutation",
        b: "Missense mutation",
        c: "Nonsense mutation",
        d: "Frameshift mutation",
        correct: "b",
        explanation: "A missense mutation is a type of mutation that changes a single nucleotide base pair and may alter one amino acid in a protein."
    },
    {
        question: "What is the name of the phenomenon where a single gene exhibits multiple phenotypic effects on a trait?",
        a: "Epistasis",
        b: "Pleiotropy",
        c: "Codominance",
        d: "Polygenic inheritance",
        correct: "b",
        explanation: "Pleiotropy is the genetic phenomenon where a single gene can have multiple phenotypic effects on a trait."
    },
    {
        question: "In a DNA molecule, which nitrogenous base pairs with adenine (A) via hydrogen bonds?",
        a: "Thymine (T)",
        b: "Cytosine (C)",
        c: "Guanine (G)",
        d: "Uracil (U)",
        correct: "a",
        explanation: "In DNA, adenine (A) always pairs with thymine (T) via hydrogen bonds."
    },
    {
        question: "What is the term for the process of copying DNA into RNA, which is the first step in gene expression?",
        a: "Translation",
        b: "Replication",
        c: "Transcription",
        d: "Reverse transcription",
        correct: "c",
        explanation: "Transcription is the process of copying DNA into RNA, which is the initial step in gene expression."
    },
       
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
    window.location.href = 'mistakespagegenetics.html';
}