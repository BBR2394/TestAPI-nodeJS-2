

app.get('/companiesbis', async (req, res) => {
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

