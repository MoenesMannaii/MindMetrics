// our three level and questions
var easy = [
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      {text: "Jupiter", answerValid: false},
      {text: "Mars", answerValid: true},
      {text: "Venus", answerValid: false}
    ]
  },
  {
    question: "What is the capital city of France?",
    answers: [
      {text: "Rome", answerValid: false},
      {text: "Paris", answerValid: true},
      {text: "Madrid", answerValid: false}
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      {text: "vincent van Gogh", answerValid: false},
      {text: "leonardo de Vinci", answerValid: true},
      {text: "Pablo Picasso", answerValid: false}
    ]
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      {text: "Indian Ocean", answerValid: false},
      {text: "Atlantic Ocean", answerValid: false},
      {text: "Pacific Ocean", answerValid: true}
    ]
  },
  {
    question: "Who Wrote the play Romeo and Juliet?",
    answers: [
      {text: "William Shakespeare", answerValid: true},
      {text: "Jane Austen", answerValid: false},
      {text: "Mark Twain", answerValid: false}
    ]
  } 
]

var medium = [
  {
    question: "In wich country was the composer Ludwing van Beethoven born?",
    answers: [
      {text: "Germany", answerValid: true},
      {text: "Austria", answerValid: false},
      {text: "Italy", answerValid: false}
    ]
  },

{
question: "Which famous scientist developed the theory of general relativity?",
answers: [
  {text: "Isaac Newton", answerValid: false},
  {text: "Albert Einshtein", answerValid: true},
  {text: "Galileo Galilei", answerValid: false}
]
} ,

{
question: "What is the world's longest river?",
answers: [
  {text: "Nile River", answerValid: true},
  {text: "Amazon River", answerValid: false},
  {text: "Yangtze River", answerValid: false}
]
} ,


{
question: "Which famous artist is known for painting The Starry Night?",
answers: [
  {text: "Salvador Dali", answerValid: false},
  {text: "Vincent van Gogh", answerValid: true},
  {text: "Pablo Picasso", answerValid: false}
]
} ,

{
question: "Who wrote the novel Pride and Prejudice?",
answers: [
  {text: "Jane Austen", answerValid: true},
  {text: "Emily Brontë", answerValid: false},
  {text: "Charles Dickens", answerValid: false}
]} 
]

var hard = [
  {
    question: "who discovered penicillin , a life-saving antibiotic?",
    answers: [
      {text: "Alexender Fleming", answerValid: true},
      {text: "Marie Curie", answerValid: false},
      {text: "Louis Pasteur", answerValid: false}
    ]
  } ,


  {
    question: "In which year did the world war II end?",
    answers: [
      {text: "1945", answerValid: true},
      {text: "1939", answerValid: false},
      {text: "1941", answerValid: false}
    ]
  } ,


  {
    question: "who is considered the 'Father of Modern physics?",
    answers: [
      {text: "Max Planck", answerValid: false},
      {text: "Isaac Newton", answerValid: false},
      {text: "Albert Einstein", answerValid: true}
    ]
  } ,


  {
    question: "what is the chemical symbol for the element gold?",
    answers: [
      {text: "Au", answerValid: true},
      {text: "Ag", answerValid: false},
      {text: "Fe", answerValid: false}
    ]
  } ,


  {
    question: "which famous scientist formulated the laws of motion ?",
    answers: [
      {text: "Isaac Newton", answerValid: true},
      {text: "Galileo Galilei", answerValid: false},
      {text: "Nikola Tesla", answerValid: false}
    ]
  } 
  ]
  
  // get our elements
  var startButton = document.querySelector("#start-btn")
  var nextButton = document.querySelector("#next-btn")
  var questionElement = document.querySelector("#question")
  var answerButtonsElement = document.querySelector("#choices")
  var results = document.querySelector("#results")
  var scoreText = document.querySelector("#score")
  var totalQuestionsText = document.querySelector("#total")
  
  
  var questionCounter = 0
  var score = 0
  var currentLevel
  
  startButton.addEventListener("click", startGame)

  nextButton.style.display = "none"
  
  nextButton.addEventListener("click", () => {
    questionCounter++
    setNextQuestion()
  })
  
  function startGame() {
    startButton.style.display = "none"
    nextButton.style.display = "inline-block"
    questionCounter = 0
    score = 0
  
    currentLevel = getSelectedLevel()
  
    totalQuestionsText.innerText = "Total Questions : " + currentLevel.length
    $('#total').css({'background': '#85858538'})
    
   scoreText.style.display = "none"

    results.innerHTML = ""

  
    setNextQuestion()
  }
  
  function setNextQuestion() {
    resetState()
  
    if (questionCounter < currentLevel.length) {
      showQuestion(currentLevel[questionCounter])
    } else {
      endGame()
    }
  }
  
  function showQuestion(question) {
    // show the question
    questionElement.innerText = question.question
  
    // answr btn for each answer option
    question.answers.forEach(answer => {
      var button = document.createElement("button")
      button.innerText = answer.text
      button.classList.add("btn")
  
      // check if answer is correct
      button.addEventListener("click", () => {
        if (answer.answerValid) {
          score++
        }
  
        setNextQuestion()
      })
  
      answerButtonsElement.appendChild(button)
    })
  }
  
 
  
  function endGame() {
    nextButton.style.display = "none"
    $('#question').css({'display':'none'})
    startButton.textContent = "Play Again"
  
    // final result (score)
    scoreText.innerText = `Score: ${score} / ${currentLevel.length}`
    // result msg
    if (score === currentLevel.length) {
      results.innerText = "Good job all your answers are correct !"
      $('#results').css({'color':'#ffffff', 'background':'#12ff0047'})
    } else if (score === 0) {
      results.innerText = "unfortunately ! all ur answers are uncorrect !"
      $('#results').css({'color':'#fff', 'background':'#ff0a0a42'})
    } else {
      results.innerText = "Hmm not bad! , some answers are correct !"
      $('#results').css({'color':'#fff', 'background':'#ffde004a'})
    }
    startButton.style.display = "inline-block"
    scoreText.style.display = "flex"
    scoreText.style.margin = "0 auto"
    scoreText.style.justifyContent = "center"
    $('.startAndnext').css({'display':'none'})
    $('form').css({'display':'none'})
  
  }
  function resetState() {
    // reset the answer buttons
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    
  }

  function getSelectedLevel() {
    var levelRadios = document.getElementsByName("level")
    var selectedLevel
  
    for (var i = 0; i < levelRadios.length; i++) {
      if (levelRadios[i].checked) {
        selectedLevel = levelRadios[i].value
        break
      }
    }
  
    // Return the according to levelss array
    if (selectedLevel === "easy") {
      return easy
    } else if (selectedLevel === "medium") {
      return medium
    } else if (selectedLevel === "hard") {
      return hard
    }
  }

