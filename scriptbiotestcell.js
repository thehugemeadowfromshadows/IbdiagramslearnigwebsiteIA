"use strict";

const quizData =[
    {
        question: "What is the significance of homologous chromosomes in cell division?",
        a: "They regulate the cell cycle",
        b: "They ensure genetic diversity through independent assortment and crossing over",
        c: "They form the cleavage furrow",
        d: "They replicate DNA",
        correct: "b",
        explanation: "Just like a dance of diversity, homologous chromosomes do a remarkable shuffle during meiosis! They pair up and swap genetic segments, ensuring that each gamete (sperm or egg) is unique. This independent assortment and crossing over create a fabulous mix of genetic traits, which is why you're one of a kind!"
    },
    {
        question: "What is the role of the cleavage furrow in animal cell cytokinesis?",
        a: "DNA replication",
        b: "Control of cell cycle checkpoints",
        c: "Separation of the two new cells",
        d: "Activation of oncogenes",
        correct: "c",
        explanation: "Imagine a cell as a water balloon. The cleavage furrow is like a string that tightens around the middle of the balloon, eventually splitting it into two. In cell division, this furrow is the star of the show, cinching the cell membrane until the cell divides into two daughter cells. It's the final step of the cell division dance!"
    },
      {
        question: "During which phase of the cell cycle does DNA replication occur?",
        a: "G1 phase",
        b: "S phase",
        c: "G2 phase",
        d: "M phase",
        correct: "b",
        explanation: "The S phase is like the cell’s photocopy room, where DNA lines up for its close-up. This phase ensures every bit of genetic info is copied precisely, kind of like a meticulous librarian ensuring every book in the library has a perfect duplicate. It's the cell's way of saying, 'Let's make sure our story continues in the sequels!'"
      },
      {
      question: "Which pump is responsible for maintaining the electrochemical gradient across the cell membrane?",
      a: "Proton pump",
      b: "Calcium pump",
      c: "Sodium-potassium pump",
      d: "Glucose pump",
      correct: "c",
      explanation: "The sodium-potassium pump is like the cell's energetic personal trainer, constantly doing 'rep sets' with ions. For every three sodium ions it lifts out, it pulls in two potassium ions, keeping the cell fit and balanced. It's the unsung hero behind nerve impulses and muscle contractions, flexing away 24/7!"
      },
      {
        question: "The giant alga Acetabularia has a feature that suggests it is an exception to the cell theory. What feature is this?",
        a: "It lacks a nucleus",
        b: "It lacks a cell wall",
        c: "It has only one mitochondrion",
        d: "It lacks subdivision into separate cells",
        correct: "d",
        explanation: "Acetabularia, the giant alga, defies a core tenet of cell theory with its single-cell structure that doesn't subdivide as it grows. This alga challenges the typical understanding of cellular division and size, as it can grow several inches tall – all while maintaining its integrity as one colossal cell. This unique trait places Acetabularia in a league of its own in the botanical world, serving as a fascinating exception to the rules generally governing cellular life."
      },
      {
        question: "Which characteristic is common between Amoeba and Paramecium?",
        a: "Shape",
        b: "Mode of nutrition",
        c: "Presence of cilia",
        d: "Method of reproduction",
        correct: "d",
        explanation: "Despite their different appearances and lifestyles, Amoeba and Paramecium share a fundamental trait: they both reproduce asexually through a process called binary fission. This method is a bit like a biological photocopy machine – the organism duplicates its genetic material and then splits into two identical cells, each a clone of the original. This efficient reproductive strategy allows them to rapidly increase their population, especially in favorable environments. It's a stark reminder of the simplicity and effectiveness of some of nature's strategies for survival and proliferation."
      },
        {
            question: "Why is the surface area to volume ratio a limiting factor for cell size?",
            a: "It limits nutrient uptake",
            b: "It affects cell communication",
            c: "It influences the rate of diffusion",
            d: "It determines the number of organelles",
            correct: "c",
            explanation: "The surface area to volume ratio is like the cell's efficiency metric. As a cell grows, its volume increases much faster than its surface area, making it harder for the cell to move materials in and out quickly through its surface. Think of it as a bustling city with only a few roads – as the city expands, traffic (or diffusion) slows down! For a cell, efficient transport of nutrients and waste is crucial, so this ratio ultimately limits how large a cell can grow."
        },
        {
            question: "Which form of endocytosis involves the ingestion of liquid into the cell?",
            a: "Phagocytosis",
            b: "Pinocytosis",
            c: "Receptor-mediated endocytosis",
            d: "Exocytosis",
            correct: "b",
            explanation: "Pinocytosis is the cellular version of taking a sip of a drink. This process involves the cell gulping down extracellular fluid along with whatever is dissolved in it, similar to how a straw works. It's one of the ways cells can sample their environment or absorb nutrients dissolved in liquids, making it a key player in cellular 'drinking' habits."
        },
        {
            question: "Exocytosis is crucial for which of the following processes?",
            a: "Ingesting bacteria",
            b: "Releasing neurotransmitters",
            c: "Ingesting fluids",
            d: "Transporting ions across the membrane",
            correct: "b",
            explanation: "Exocytosis plays a pivotal role in the process of neurotransmitter release. It's like a cellular postman delivering messages. When a signal reaches a nerve cell, tiny vesicles filled with neurotransmitters fuse with the cell membrane and 'mail out' their contents into the synaptic gap. This mechanism is essential for nerve cells to communicate with each other, sending signals rapidly across your nervous system."
        },
        {
            question: "What is the primary role of cyclins and CDKs in cell cycle regulation?",
            a: "DNA replication",
            b: "Formation of the cleavage furrow",
            c: "Control of cell cycle checkpoints",
            d: "Packaging of DNA",
            correct: "c",
            explanation: "Cyclins and CDKs (Cyclin-dependent kinases) are like the traffic lights and controllers of the cell cycle. They ensure that each phase of the cell cycle, especially critical points like DNA replication and cell division, occurs only when the cell is ready. By activating or inhibiting different processes at specific times, these molecules prevent errors and coordinate smooth cell division, much like a highly sophisticated and precise control system."
        },
        
        {
            question: "Which organelle is responsible for producing ATP through cellular respiration?",
            a: "Nucleus",
            b: "Mitochondria",
            c: "Endoplasmic Reticulum",
            d: "Golgi Apparatus",
            correct: "b",
            explanation: "Mitochondria are the powerhouse of the cell, turning nutrients into ATP, the cell's energy currency. It's where the magic of cellular respiration happens, converting glucose and oxygen into the energy needed for cellular activities."
        },
        {
            question: "What is the primary function of lysosomes within a cell?",
            a: "Protein synthesis",
            b: "Intracellular digestion",
            c: "Lipid transport",
            d: "DNA replication",
            correct: "b",
            explanation: "Lysosomes are like the cell's recycling center, breaking down waste material and cellular debris. They contain digestive enzymes that help in processing and eliminating waste, playing a crucial role in keeping the cell clean and efficient."
        },
        {
            question: "Which of the following is a key difference between Scanning Electron Microscopy (SEM) and Transmission Electron Microscopy (TEM)?",
            a: "Sample preparation",
            b: "Principle of operation",
            c: "Image interpretation",
            d: "Magnification level",
            correct: "b",
            explanation: "The fundamental difference lies in their principle of operation. SEM provides surface images of specimens by scanning them with a focused beam of electrons, while TEM transmits electrons through a specimen to form an image, revealing internal structures."
        },
        {
            question: "Which function is not typically associated with integral proteins in the cell membrane?",
            a: "Enzyme activity",
            b: "Cell signalling",
            c: "Energy storage",
            d: "Transport",
            correct: "c",
            explanation: "Integral proteins are involved in various functions like enzyme activity, cell signaling, and transport across the membrane. Energy storage, however, is not typically a function of these proteins."
        },
        {
            question: "What is the primary reason for the amphipathic nature of phospholipids in the cell membrane?",
            a: "To allow integral proteins to function",
            b: "To form a semi-permeable barrier",
            c: "To facilitate cell signalling",
            d: "To enable endocytosis",
            correct: "b",
            explanation: "Phospholipids have both hydrophilic (water-loving) and hydrophobic (water-repelling) parts, making them perfect for forming a semi-permeable barrier. This structure allows them to arrange themselves into a bilayer, controlling what enters and leaves the cell."
        },
        {
            question: "Peripheral proteins are often involved in which of the following cellular processes?",
            a: "Transport of molecules across the membrane",
            b: "Cell signalling and recognition",
            c: "Formation of the lipid bilayer",
            d: "Active transport using ATP",
            correct: "b",
            explanation: "Peripheral proteins primarily function in cell signaling and recognition. They often serve as receptors or enzymes, playing a key role in transmitting signals and facilitating communication between cells."
        },
        {
            question: "Which of the following best describes facilitated diffusion?",
            a: "Movement of molecules against a concentration gradient using energy",
            b: "Movement of molecules from a region of higher concentration to a lower concentration without energy",
            c: "Movement of molecules from a region of lower concentration to higher concentration using protein channels",
            d: "Movement of molecules from a region of higher concentration to lower concentration using protein channels",
            correct: "d",
            explanation: "Facilitated diffusion is like a bouncer at a club, letting molecules through the membrane via specific protein channels. It’s a passive transport process where molecules move from an area of higher concentration to one of lower concentration through these channels."
        },
        {
            question: "Which cellular structure is primarily responsible for detoxifying drugs and poisons in liver cells?",
            a: "Golgi apparatus",
            b: "Smooth endoplasmic reticulum",
            c: "Lysosomes",
            d: "Peroxisomes",
            correct: "b",
            explanation: "The smooth endoplasmic reticulum in liver cells plays a key role in detoxifying drugs and poisons. It contains enzymes that modify these harmful substances, making them less toxic and easier for the body to excrete."
        },
        {
            question: "In the context of the fluid mosaic model, what is the 'mosaic' composed of?",
            a: "Nucleic acids",
            b: "Proteins",
            c: "Polysaccharides",
            d: "Nucleotides",
            correct: "b",
            explanation: "In the fluid mosaic model, the 'mosaic' is made up of proteins that float like icebergs in a sea of lipids. These proteins can move around and vary in shape and size, giving the cell membrane a mosaic-like, dynamic character."
        },
        {
            question: "In the lac operon model, what role does the repressor protein play?",
            a: "It accelerates the breakdown of lactose",
            b: "It binds to the operator to block transcription",
            c: "It enhances the attachment of RNA polymerase to the promoter",
            d: "It transports lactose into the cell",
            correct: "b",
            explanation: "In the lac operon model, the repressor protein acts like a molecular 'off switch' for lactose metabolism genes. When lactose is absent, the repressor binds to the operator region, blocking the RNA polymerase and thus preventing transcription of the genes needed for lactose breakdown."
        },
        {
            question: "The fluidity of the cell membrane is primarily affected by the presence of:",
            a: "Phospholipids",
            b: "Carbohydrates",
            c: "Cholesterol",
            d: "Proteins",
            correct: "c",
            explanation: "Cholesterol plays a crucial role in modulating the fluidity of cell membranes. It fits snugly between the phospholipids, adding rigidity when the membrane is too fluid and preventing it from becoming too rigid in cooler conditions."
        },
        {
            question: "In the context of cell biology, what is 'apoptosis'?",
            a: "Cellular division",
            b: "Programmed cell death",
            c: "Protein synthesis",
            d: "Energy production",
            correct: "b",
            explanation: "Apoptosis is the cellular equivalent of a self-destruct sequence, a form of programmed cell death. It's a vital process for maintaining health by eliminating old, unnecessary, or damaged cells. It's like the cell's way of cleaning house to keep everything running smoothly."
        },
        {
            question: "In cell signaling, what is the main function of a second messenger like cAMP?",
            a: "Transmitting signals from the cell membrane to the cytoplasm",
            b: "Facilitating the transport of ions across the cell membrane",
            c: "Directly activating gene expression in the nucleus",
            d: "Assisting in protein synthesis at ribosomes",
            correct: "a",
            explanation: "cAMP acts like a cellular relay runner, passing the baton of a signal received at the cell surface to internal components. As a second messenger, it transmits signals from the cell membrane to the inside of the cell, leading to various cellular responses."
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
    window.location.href = 'mistakespagetestcellbio.html';
}