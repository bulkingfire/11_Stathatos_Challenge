const texts = require('express').Router();
const para1 = require('../helpers/uuid');
const  { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const db = require('../db/db.json');


texts.get('/notes', (req,res) => {

    console.log(`${req.method} request has been cleared`);
  readFromFile('db/db.json', 'utf8').then((data) => res.json(JSON.parse(data)));
})

texts.post('/notes', (req,res) => {
  console.log(`${req.method} request has been cleared`);
  
readFromFile('db/db.json', 'utf8').then((data) => {
  var notes = new Array();
  notes.push({
    ...req.body, 
    id:para1()
  })

  writeToFile('db/db.json', JSON.stringify(notes))
  
  res.json(notes[notes.length-1])

}
);
})

module.exports = texts;