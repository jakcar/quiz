const sqlite = require('sqlite')
const express = require('express')

const app = express()
app.use(express.json())

let database

sqlite.open('test.sqlite').then(database_ => {
  database = database_
})

app.get('/', (req, res) => {
  let searchCity = '%' + req.query.name + '%'
  if (req.query.name && req.query.minPopulation) {
    database.all('SELECT * FROM cities WHERE name LIKE + ? AND population >= ?', [searchCity, req.query.minPopulation])
      .then(cities => {
        res.send(cities)
      })
  } else if (req.query.minPopulation) {
    database.all('SELECT * FROM cities WHERE population >= ?', [req.query.minPopulation])
      .then(cities => {
        res.send(cities)
      })
  } else if (req.query.name) {
    database.all('SELECT * FROM cities WHERE name LIKE + ?', [searchCity])
      .then(cities => {
        res.send(cities)
      })
  } else {
    database.all('SELECT * FROM cities').then(cities => {
      res.send(cities)
    })
  }
})

app.listen(3000)