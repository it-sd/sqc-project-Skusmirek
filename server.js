
require('dotenv').config() 
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163

function createQuiz() {
  
  const questions = [
    {
      question: "Where is the capital Madison?",
      answers: [
        { text: "Wisconsin", correct: true },
        { text: "Texas", correct: false },
        { text: "Washington", correct: false },
        { text: "Maine", correct: false }
      ]
    },
    {
      question: "How tall am I?",
      answers: [
        { text: "5 foot, 4 Inches", correct: false },
        { text: "6 foot", correct: false },
        { text: "6 foot, 4 inches", correct: true },
        { text: "5 foot, 9 inches", correct: false }
      ]
    },
    {
      question: "What is the currency of Japan?",
      answers: [
        { text: "Yen", correct: true },
        { text: "Dollar", correct: false },
        { text: "Euro", correct: false },
        { text: "Pound", correct: false }
      ]
    }
  ];

  
  let score = 0;

  
  questions.forEach((question, index) => {
    const answer = prompt(`${index + 1}. ${question.question}\n\n${question.answers.map(answer => answer.text).join("\n")}`);
    const selectedAnswer = question.answers.find(answerOption => answerOption.text === answer);

    if (selectedAnswer && selectedAnswer.correct) {
      score++;
    }
  });

  // Display the user's score after all questions have been answered
  alert(`Your score: ${score} out of ${questions.length}`);
}







express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) { 
    res.render('pages/index')
  })

  .get('/health', function (req, res) { 
    res.status(200).send('Healthy')
  })

  .get('/about', function (req, res) { 
    res.render('pages/about')
  })

  .listen(PORT, () => console.log(`Listening on ${PORT}`))



  