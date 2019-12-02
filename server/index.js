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
    const o = {}
    for (let n = 0; n < testquiz.length; n++) {
      if (o[testquiz[n].quizname] === undefined) {
        o[testquiz[n].quizname] = 1
        const test = []
        o[testquiz[n].quizname] = test
        n--
      } else {
        o[testquiz[n].quizname].push({ question: testquiz[n].question, a1: testquiz[n].a1, a2: testquiz[n].a2, a3: testquiz[n].a3, a4: testquiz[n].a4, rightanswer: testquiz[n].rightanswer })
      }
    }
    res.send(o)
  })
})

app.listen(3000)
