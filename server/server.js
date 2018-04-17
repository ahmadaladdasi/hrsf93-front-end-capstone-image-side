const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use(express.static(`${__dirname}/../client/dist`));

app.post('/:name/:id/:imagesId', (req, res) => {
  const data = {
    id: req.params.imagesId,
    name: req.body.name,
    urls: req.body.urls,
  };

  db.saveOne(data);
  res.send(data);
});


app.get('/:name/:id/:imagesId', (req, res) => {
  const id = req.params.imagesId;
  db.query(id, data => res.send(data));
});


const port = 24623;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
