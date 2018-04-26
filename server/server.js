const express = require('express');
const bodyparser = require('body-parser');
const Picture = require('../database/index.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());


app.use('/listings/:imagesId/:name/', express.static(`${__dirname}/../public`));

app.post('listings/:imagesId/:name', (req, res) => {
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


app.get('/listings/:imagesId/:name/data', (req, res) => {
  const id = req.params.imagesId;
  Picture.findOne({ id })
    .then((data, err) => {
      if (data) res.send(JSON.stringify(data));
      else {
        console.log(err);
        res.status(400).send('not found');
      }
    });
});

mongoose.connect('mongodb://localhost/images');

const port = 24623;

mongoose.connection.once('open', () => {
  console.log('Connection to database successful!');

  app.listen(port, () => console.log(`listening on port ${port}`));
});
