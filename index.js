const express = require('express')
const app = express()
const port = 4000

let indexRouter = require('./login');

app.use('/login', indexRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
