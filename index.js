
const express = require('express')
const pg  = require('pg')
const app = express()
const port = 4042

const { Client } = pg
const client = new Client({
  user: 'baptiste',
  password: '',
  host: '127.0.0.1',
  port: 5432,
  database: 'follow_prices',
})
client.connect()

// to parse body
const bodyParser = require('body-parser')
app.use(bodyParser.json()) 

let indexRouter = require('./login');

app.use('/login', indexRouter)

app.get('/', (req, res) => {
  res.send('Hello World! (from test api REST 25)')
})

app.post('/', (req, res) => {

})

app.get('/users/:id', (req, res) => {
  console.log(`GET /users/${req.params.id}`)
  res.send({'id': req.params.id , 'lastname': 'TOTO', 'message' : 'ceci est un example'})

})

app.get('/companies/:id', async (req, res) => {
  console.log("GET /companies:id")
  try {
    const query = 'SELECT * FROM company WHERE com_id =' + req.params.id + ' ;';
    const result =  await client.query(query);
    console.log(result.rows)

    console.log(result.fields)
    //res.send({'lastname': 'TOTO', 'message' : 'ceci est un example'})

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
  //res.send({'lastname': 'TOTO', 'message' : 'ceci est un example'})
})

app.get('/companies', async (req, res) => {
  console.log("GET /companies")
  try {
    const query = 'SELECT * FROM company';
    const result =  await client.query(query);
    console.log(result.rows)
    //res.send({'lastname': 'TOTO', 'message' : 'ceci est un example'})

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
  //res.send({'lastname': 'TOTO', 'message' : 'ceci est un example'})
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
  console.log(`Example app listening on port ${port} (file index.js)`)
})
