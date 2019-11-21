const sqlite = require('sqlite')
const express = require('express')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let database

sqlite.open('test.sqlite').then(database_ => {
  database = database_
})

app.get('/quiz', (req, res) => {
  database.all('SELECT * FROM quiz').then(quiz => {
    res.send(quiz)
  })
})

app.get('/questions', (req, res) => {
  database.all('SELECT * FROM questions').then(questions => {
    res.send(questions)
  })
})

app.post('/quiz', (req, res) => {
  database
    .run('INSERT INTO quiz VALUES (?, ?)', [req.body.name, req.body.ID])
    .then(quiz => {
      res.send(quiz)
    })
})

app.post('/questions', (req, res) => {
  database
    .run('INSERT INTO questions VALUES (?, ?, ?, ?, ?, ?, ?)', [req.body.question, req.body.a1, req.body.a2, req.body.a3, req.body.a4, req.body.ID, req.body.rightanswer])
    .then(questions => {
      res.send(questions)
    })
})

app.listen(3000)


// {
//   "name": "quizname",
//   "questions": [
//     { "question": "Testfråga5?", "a1": "A", "a2": "B", "a3": "C", "a4": "D", "rightanswer": "a1" },
//     { "question": "Testfråga5?", "a1": "A", "a2": "B", "a3": "C", "a4": "D", "rightanswer": "a1" }
//   ]
// }




















//for
//MEGATHEN
//promise.all