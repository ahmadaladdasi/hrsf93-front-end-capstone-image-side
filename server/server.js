const express = require('express');
const bodyparser = require('body-parser');
const Picture = require('../database/index.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());


app.use(express.static(`${__dirname}/../client/dist`));

app.post('/:name/:id/:imagesId', (req, res) => {
  const data = {
    id: req.params.imagesId,
    name: req.body.name,
    urls: req.body.urls,
  };
  Picture.create(data)
    .then(() => res.send('Pictures Saved'))
    .catch((err) => {
      console.log(err);
      res.status(501).send('Saving Failed');
    });
});


app.get('/:name/:id/:imagesId', (req, res) => {
  const id = req.params.imagesId;
  Picture.findOne({ id })
    .then(data => res.send(JSON.stringify(data)))
    .catch(err => console.log(err));
});

mongoose.connect('mongodb://localhost/images');

const port = 24623;

mongoose.connection.once('open', () => {
  console.log('Connection to database successful!');

  app.listen(port, () => console.log(`listening on port ${port}`));
});
