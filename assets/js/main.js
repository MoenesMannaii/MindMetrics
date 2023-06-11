// our three level and questions
const levels = {
  easy: [
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        { text: "Jupiter", answerValid: false },
        { text: "Mars", answerValid: true },
        { text: "Venus", answerValid: false },
      ],
    },
    {
      question: "What is the capital city of France?",
      answers: [
        { text: "Rome", answerValid: false },
        { text: "Paris", answerValid: true },
        { text: "Madrid", answerValid: false },
      ],
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: [
        { text: "vincent van Gogh", answerValid: false },
        { text: "leonardo de Vinci", answerValid: true },
        { text: "Pablo Picasso", answerValid: false },
      ],
    },
    {
      question: "What is the largest ocean in the world?",
      answers: [
        { text: "Indian Ocean", answerValid: false },
        { text: "Atlantic Ocean", answerValid: false },
        { text: "Pacific Ocean", answerValid: true },
      ],
    },
    {
      question: "Who Wrote the play Romeo and Juliet?",
      answers: [
        { text: "William Shakespeare", answerValid: true },
        { text: "Jane Austen", answerValid: false },
        { text: "Mark Twain", answerValid: false },
      ],
    },
  ],
  medium: [
    {
      question: "In wich country was the composer Ludwing van Beethoven born?",
      answers: [
        { text: "Germany", answerValid: true },
        { text: "Austria", answerValid: false },
        { text: "Italy", answerValid: false },
      ],
    },

    {
      question: "Which famous scientist developed the theory of general relativity?",
      answers: [
        { text: "Isaac Newton", answerValid: false },
        { text: "Albert Einshtein", answerValid: true },
        { text: "Galileo Galilei", answerValid: false },
      ],
    },

    {
      question: "What is the world's longest river?",
      answers: [
        { text: "Nile River", answerValid: true },
        { text: "Amazon River", answerValid: false },
        { text: "Yangtze River", answerValid: false },
      ],
    },

    {
      question: "Which famous artist is known for painting The Starry Night?",
      answers: [
        { text: "Salvador Dali", answerValid: false },
        { text: "Vincent van Gogh", answerValid: true },
        { text: "Pablo Picasso", answerValid: false },
      ],
    },

    {
      question: "Who wrote the novel Pride and Prejudice?",
      answers: [
        { text: "Jane Austen", answerValid: true },
        { text: "Emily Brontë", answerValid: false },
        { text: "Charles Dickens", answerValid: false },
      ],
    },
  ],
  hard: [
    {
      question: "Who discovered penicillin , a life-saving antibiotic?",
      answers: [
        { text: "Alexender Fleming", answerValid: true },
        { text: "Marie Curie", answerValid: false },
        { text: "Louis Pasteur", answerValid: false },
      ],
    },

    {
      question: "In which year did the world war II end?",
      answers: [
        { text: "1945", answerValid: true },
        { text: "1939", answerValid: false },
        { text: "1941", answerValid: false },
      ],
    },

    {
      question: "who is considered the 'Father of Modern physics?",
      answers: [
        { text: "Max Planck", answerValid: false },
        { text: "Isaac Newton", answerValid: false },
        { text: "Albert Einstein", answerValid: true },
      ],
    },

    {
      question: "What is the chemical symbol for the element gold?",
      answers: [
        { text: "Au", answerValid: true },
        { text: "Ag", answerValid: false },
        { text: "Fe", answerValid: false },
      ],
    },

    {
      question: "Which famous scientist formulated the laws of motion ?",
      answers: [
        { text: "Isaac Newton", answerValid: true },
        { text: "Galileo Galilei", answerValid: false },
        { text: "Nikola Tesla", answerValid: false },
      ],
    },
  ],
};

// get our elements
const startButton = document.querySelector("#start-btn");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#choices");
const results = document.querySelector("#results");
const scoreText = document.querySelector("#score");
const totalQuestionsText = document.querySelector("#total");
const difficulty = document.querySelector("#difficulty");
const mainImage = document.querySelector("#main-img");
const main = document.querySelector(".main");

let questionCounter = 0;
let score = 0;
let currentLevel = document.querySelector('input[name="level"]:checked').value;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.style.display = "none";
  difficulty.style.display = "none";
  mainImage.style.display = "none";
  results.style.display = "none";
  scoreText.style.display = "none";
  questionElement.style.display = "block";
  questionCounter = 0;
  score = 0;

  currentLevel = document.querySelector('input[name="level"]:checked').value;

  totalQuestionsText.innerText = "Total Questions : " + levels[currentLevel].length;

  results.innerHTML = "";

  setNextQuestion();
}

function setNextQuestion() {
  answerButtonsElement.innerHTML = "";
  if (questionCounter < levels[currentLevel].length) {
    showQuestion(levels[currentLevel][questionCounter]);
  } else {
    endGame();
  }
}

function showQuestion(question) {
  // show the question
  questionElement.innerText = question.question;

  // answr btn for each answer option
  question.answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    // check if answer is correct
    button.addEventListener("click", () => {
      if (answer.answerValid) {
        score++;
      }
      questionCounter++;
      setNextQuestion();
    });

    answerButtonsElement.appendChild(button);
  });
}

function endGame() {
  questionElement.style.display = "none";
  difficulty.style.display = "flex";
  startButton.textContent = "Play Again";

  let totalScore = levels[currentLevel].length;

  // final result (score)
  scoreText.innerText = `Score: ${score} / ${totalScore}`;

  // result msg
  results.style.display = "block";
  results.classList = "";
  switch (true) {
    case score === totalScore:
      results.innerText = "Great job all your answers are correct !";
      results.classList.add("all-correct");
      break;
    case score === 0:
      results.innerText = "Unfortunately, all ur answers are incorrect !";
      results.classList.add("non-correct");
      break;
    case score === 4:
      results.innerText = "Almost there!";
      results.classList.add("some-correct");
      break;
    default:
      results.innerText = "Hmm not bad! , some answers are correct !";
      results.classList.add("some-correct");
  }

  startButton.style.display = "inline-block";
  scoreText.style.display = "flex";
  scoreText.style.margin = "0 auto";
  scoreText.style.justifyContent = "center";
}
