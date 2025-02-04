const express = require('express')
const app = express()
const port = 4000

// to parse body
const bodyParser = require('body-parser')
app.use(bodyParser.json()) 

let indexRouter = require('./login');

app.use('/login', indexRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {

})

app.get('/users/:id', (req, res) => {
  console.log(`GET /users/${req.params.id}`)
  res.send({'id': req.params.id , 'lastname': 'TOTO', 'message' : 'ceci est un example'})

})

app.get('/users', (req, res) => {
  console.log("GET /users")
  res.send({'lastname': 'TOTO', 'message' : 'ceci est un example'})
})

app.post('/users', (req, res) => {
  console.log("POST /users")
  console.log(req.body)
  let user = req.body
  user.id = 42
  res.status(202).send(user)
})
app.put('/users', (req, res) => {
  console.log("PUT /users")
  res.send({'lastname': 'TOTO', 'message' : 'ceci est un example'})

})
app.delete('/users', (req, res) => {
  console.log("DELETE /users")
  res.send()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
