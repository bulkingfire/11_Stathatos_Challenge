
const express = require('express');
const path = require('path');
const apis = require('./routes/notes.js');

const Ports = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apis);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(Ports, () =>
  console.log(`App listening at http://localhost:${Ports} 🚀`)
);

