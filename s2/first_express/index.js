const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function (req, res) {res.send('Hello World!')});

app.get('/name/:nom',  (req, res) =>res.send(`Hello ${req.params.nom} !`));

app.post('/',  (req, res) =>res.send('Hello World! with post'));

app.put('/',  (req, res) =>res.send('Hello World! with put'));

app.delete('/',  (req, res) =>res.send('Hello World! with delete'));

app.listen(port, () => console.log(`First Express app listening on port ${port}!`))