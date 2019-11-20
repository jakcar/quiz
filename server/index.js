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

app.get('/questions', (req, res) => {
    database.all('SELECT * FROM questions').then(questions => {
      res.send(questions)
    })
})

app.get('/answers', (req, res) => {
  database.all('SELECT * FROM answers').then(answers => {
    res.send(answers)
  })
})

app.listen(3000)