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

app.post('/', (req, res) => {
  database.run('INSERT INTO testquiz (quizname) VALUES (?)', [req.body.quizname])
    .then(statement => { 
      const promises = []
      const id = statement.lastID
      for (let n = 0; n < req.body.questions.length; n++) {
        const promise = database.run(
          'INSERT INTO testquestions (question, a1, a2, a3, a4, group_id, rightanswer) VALUES (?, ?, ?, ?, ?, ?, ?)', 
          [req.body.questions[n].question, req.body.questions[n].a1, req.body.questions[n].a2, req.body.questions[n].a3, req.body.questions[n].a4, id, req.body.questions[n].rightanswer]
        )
        promises.push(promise)
      }
      Promise.all(promises).then(() => {
        res.send('Quiz added')
      })
    })
})

app.get('/testquiz', (req, res) => {
  database.all('SELECT * FROM testquiz INNER JOIN testquestions on testquestions.group_id = testquiz.group_id').then(testquiz => {
    res.send(testquiz)
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