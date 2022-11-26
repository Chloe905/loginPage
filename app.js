const express = require('express')


const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.send('This is a login web page ')
})

app.listen(PORT, () => {
  console.log(`This is running on http://localhost:${PORT}`)
})