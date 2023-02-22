// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
 
  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "start") {
         startGame();

      }
    });
  }

});

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons') ;

let shuffledQuestions, currentQuestionIndex;

// startGame function will execute  when the "Start" button is clicked
startButton.addEventListener('click', startGame); 
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();

});

// This function that will execute when the "Start" button is clicked 
function startGame() {
  resetScores();
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);// Shuffles the questions so they are in different random order for each game
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}
// Reset scores
function resetScores() {
  document.getElementById('correct-answer').innerText = 0;
  document.getElementById('incorrect-answer').innerText = 0;
}

// This function that will execute when the "Next" button is clicked
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// Reset everthing back to default state every time new question is set
function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
/**
 * Loops through all the questions in the questions array and 
 * if its the last question, the "Restart" button will appear giving the user
 * an option to restart the game
 */
function selectAnswer(e) {
  const selectedButton = e.target;
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
  checkAnswer(selectedButton);
  disableAnswerButtons();

}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function checkAnswer(selectedButton) {
  if (selectedButton.getAttribute('data-correct')) {
    incrementScore();
  } else {
    incrementWrongAnswer();
  }
}

/*Increment right and wrong answers */

//Gets the current score from the DOM and increments it by 1
function incrementScore() {
  let correctScore =  parseInt(document.getElementById('correct-answer').innerText);
  correctScore = correctScore + 1;
  document.getElementById('correct-answer').innerText = correctScore;

}
// Gets the current tally of incorrect answers from the DOM and increase it by 1
function incrementWrongAnswer() {
  let incorrectScore =  parseInt(document.getElementById('incorrect-answer').innerText);
  incorrectScore = incorrectScore + 1;
  document.getElementById('incorrect-answer').innerText = incorrectScore;
}
/* Disables the other answer buttons once the user have chosen an answer */

function disableAnswerButtons() {
  
  // get the list of buttons with class 'btn'
  var elements = document.getElementsByClassName("btn");
  // for each button in the elements list      
  for(var x=0; x < elements.length; x++)
        {
          // check if next button
          if(elements[x].classList.contains('next-btn') || elements[x].classList.contains('start-btn'))
          {    
            continue;
          }else{
            elements[x].disabled = true;
            
          }
        }
}
/**
 * Modal
 * Code from Kevin Powell's Modal Tutorial */ 
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

/**
 * The first five questions was from https://www.theguardian.com/games/2020/sep/01/gotta-quiz-em-all-the-guardians-pokemon-quiz 
 * The rest are taken from Pokémon Annual 2023 and Pokémon Deluxe Essential Handbook */ 
const questions = [
  {
    question: 'The Pokémon anime series has focused on the adventures of Ash since it made its debut in 1997. But what is Ash\'s surname?',
    answers: [
      { text: 'Kotchum', correct: false },
      { text: 'Katchum', correct: false },
      { text: 'Ketchum', correct: true},
      { text: 'Ketchup', correct: false },
    ]
  },
  {
    question: 'Lovable inept rogues Team Rocket have been trying to catch Ash\'s Pikachu for decades. What are their names?',
    answers: [
      { text: 'Jessie and James', correct: true },
      { text: 'Joanie and James', correct: false },
      { text: 'Jenny and James', correct: false },
      { text: 'Jessie and Jimbob', correct: false },
      
    ]
  },
  {
    question: 'The first legendary Pokémon, introduced in the Kanto region are Articuno, Zapdos, and...?',
    answers: [
      { text: 'Mew', correct: false },
      { text: 'Lugia', correct: false },
      { text: 'Victini', correct: false },
      { text: 'Moltres', correct: true}
    ]
  },
  {
    question: 'The Alola region, which was the setting for Pokémon Sun and Pokémon Moon, is loosely based on which US state ?',
    answers: [
      { text: 'Florida', correct: false },
      { text: 'Hawaii', correct: true },
      { text: 'New Yok', correct: false },
      { text: 'California', correct: false }
    ]
  },
  { 
  question:  'Who is Eevee\'s partner?',
  answers: [
      { text: 'Joan', correct: false },
      { text: 'Chloe', correct: true },
      { text: 'Jane', correct: false },
      { text: 'Chris', correct: false }
    ]
  },
  {
 question: 'From which pokémon does a Gyarados evolve?',
  answers: [
      { text: 'Stunfisk', correct: false },
      { text: 'Magikarp', correct: true },
      { text: 'Kraby', correct: false },
      { text: 'Kingler', correct: false }
  ]
  },
 {
  question: 'Galvantula is a dual-type pokémon. What are it\'s two types?',
  answers: [
       { text: 'Bug and Electric', correct: true},
       { text: 'Bug and Poison', correct: false },
       { text: 'Bug and Fire', correct: false },
       { text: 'Bug and Water', correct: false }
    ]
   },
   {
   question: 'How many arms does a Machamp have?',
   answers: [
       { text: 'Four', correct: true},
       { text: 'Two', correct: false },
       { text: 'Six', correct: false },
       { text: 'Eight', correct: false }
      ]
   },
   {
  question: 'In which region will you find a Nickit?',
  answers: [
      { text: 'Kanto', correct: false},
      { text: 'Galar', correct: true },
      { text: 'Alola', correct: false },
      { text: 'Unova', correct: false }
    ]
   },
   {
  question: 'What type of pokémon is Charmander?',
  answers: [
      { text: 'Psychic', correct: false},
      { text: 'Water', correct: false },
      { text: 'Fire', correct: true },
      { text: 'Grass', correct: false }
   ]
   },
   {
  question: 'What weapon does a Galarian Farfetch\'d wield in battle?',
  answers: [
     { text: 'Leek', correct: true},
     { text: 'Onion', correct: false },
     { text: 'Fire', correct: false },
     { text: 'Ice', correct: false }
    ]
   },
   {
  question: 'Which blue Pokémon cries when it\'s scared?',
  answers: [
      { text: 'Magikarp', correct: false},
      { text: 'Sobble', correct: true},
      { text: 'Bulbasur', correct: false },
      { text: 'Squirtle', correct: false }
    ]
   },
   {
   question: 'What shape of mark does a Woobat leave behind?',
   answers: [
      { text: 'Heart', correct: true},
      { text: 'Diamond', correct: false },
      { text: 'Square', correct: false },
      { text: 'Hexagon', correct: false }
    ]
  },
  {
  question: 'Who is Ash\'s pokémon buddy?',
  answers: [
      { text: 'Meowth', correct: false},
      { text: 'Scarbunny', correct: false },
      { text: 'Snorlax', correct: false },
      { text: 'Pikachu', correct: true }
    ]
  },
  {
  question: 'What does a Lotad evolve into?',
  answers: [
      { text: 'Torch', correct: false},
      { text: 'Beautifly', correct: false },
      { text: 'Lombre', correct: true },
      { text: 'Dustox', correct: false }
  ]
 },
 {
  question: 'From which Pokémon does a Grapploct evolve?',
  answers: [
      { text: 'Machamp', correct: false},
      { text: 'Clobbopus', correct: true },
      { text: 'Snorlax', correct: false },
      { text: 'Riolu', correct: false }
     ]
 },
 {
 question: 'What\'s the name of the Water-and-Dragon-Type fossil Pokémon?',
 answers: [
      { text: 'Bulbasaur', correct: false},
      { text: 'Squirtle', correct: false },
      { text: 'Gastly', correct: false },
      { text: 'Dracovish', correct: true }
    ]
},
{
question: 'What is the name of the new girl Ash and Brock met  in the Sinnoh Region?',
answers: [
      { text: 'Dawn', correct: true},
      { text: 'Rachel', correct: false },
      { text: 'Bidoof', correct: false },
      { text: 'Julie', correct: false }
     ]
 },
  {
  question: 'Bulbasaur is what type of Pokémon?',
  answers: [
      { text: 'Legendary', correct: false},
      { text: 'Normal', correct: false },
      { text: 'Electric', correct: false },
      { text: 'Grass-Poison', correct: true }
     ]
  },
  {
  question: 'Which Region will you find adorable Clefairy?',
  answers: [
      { text: 'Sinoh', correct: false},
      { text: 'Alola Kanto', correct: true },
      { text: 'Kalos', correct: false },
      { text: 'Johto', correct: false }
       ]
      }
];

