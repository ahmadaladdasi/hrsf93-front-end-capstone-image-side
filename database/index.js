const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/images');

const imageSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number, required: true, index: true, unique: true,
  },
  name: {
    type: String, unique: true, required: true,
  },
  imageURLs: Array,
});

const Picture = mongoose.model('Picture', imageSchema);

const save = (images) => {
  images.forEach((image) => {
    const newImage = new Picture({
      id: image.id,
      name: image.name,
      imageURLs: image.urls,
    });
    newImage.save().catch(err => console.log(err));
  });
};

const saveOne = (image) => {
  const newImage = new Picture({
    id: image.id,
    name: image.name,
    imageURLs: image.urls,
  });
  newImage.save().catch(err => console.log(err));
};

const query = (id, cb) => {
  (Picture.find({ id }, 'id name imageURLs', { sort: { id: 1 } }, (err, doc) => {
    cb(doc);
  }));
};

module.exports.saveOne = saveOne;
module.exports.save = save;
module.exports.query = query;
