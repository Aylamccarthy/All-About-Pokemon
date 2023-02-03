const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// The first five questions was from https://www.theguardian.com/games/2020/sep/01/gotta-quiz-em-all-the-guardians-pokemon-quiz
const questions = [
  {
    question: 'The Pokemon anime series has focused on the adventures of Ash since it made its debut in 1997. But what is his surname?',
    answers: [
      { text: 'Kotchum', correct: false },
      { text: 'Katchum', correct: false },
      { text: 'Ketchum', correct: true},
      { text: 'Ketchup', correct: false },
    ]
  },
  {
    question: 'Lovable inept rogues Team Rocket have been trying to catch Ash Pikachu for decades. What are their names?',
    answers: [
      { text: 'Jessie and James', correct: true },
      { text: 'Joanie and James', correct: false },
      { text: 'Jenny and James', correct: false },
      { text: 'Jessie and Jimbob', correct: false },
      
    ]
  },
  {
    question: 'The first legendary Pokemon, introduced in the Kanto region are Articuno, Zapdos, and...?',
    answers: [
      { text: 'Mew', correct: false },
      { text: 'Lugia', correct: false },
      { text: 'Victini', correct: false },
      { text: 'Moltres', correct: true}
    ]
  },
  {
    question: 'The Alola region, which was the setting for Pokemon Sun and Pokemon Moon, is loosely based on which US state ?',
    answers: [
      { text: 'Florida', correct: false },
      { text: 'Hawaii', correct: true },
      { text: 'New Yok', correct: false },
      { text: 'California', correct: false }
    ]
  }
]
