const sqlite = require('sqlite')
const express = require('express')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let database

sqlite.open('quiz.sqlite').then(database_ => {
    database = database_
})

app.post('/', (req, res) => {
    database.run('INSERT INTO quiz (quizname) VALUES (?)', [req.body.quizname]).then(statement => {
        const promises = []
        const id = statement.lastID
        for (let n = 0; n < req.body.questions.length; n++) {
            const promise = database.run(
                'INSERT INTO questions (question, a1, a2, a3, a4, group_id, rightanswer) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    req.body.questions[n].question,
                    req.body.questions[n].a1,
                    req.body.questions[n].a2,
                    req.body.questions[n].a3,
                    req.body.questions[n].a4,
                    id,
                    req.body.questions[n].rightanswer,
                ]
            )
            promises.push(promise)
        }
        Promise.all(promises).then(() => {
            res.send('Quiz added')
        })
    })
})

app.get('/quiz', (req, res) => {
    database.all('SELECT * FROM quiz INNER JOIN questions on questions.group_id = quiz.group_id').then(quiz => {
        const o = {}
        for (let n = 0; n < quiz.length; n++) {
            if (o[quiz[n].quizname] === undefined) {
                o[quiz[n].quizname] = 1
                const qArr = []
                o[quiz[n].quizname] = qArr
                n--
            } else {
                o[quiz[n].quizname].push({
                    question: quiz[n].question,
                    a1: quiz[n].a1,
                    a2: quiz[n].a2,
                    a3: quiz[n].a3,
                    a4: quiz[n].a4,
                    rightanswer: quiz[n].rightanswer,
                })
            }
        }
        res.send(o)
    })
})

app.listen(3000)
