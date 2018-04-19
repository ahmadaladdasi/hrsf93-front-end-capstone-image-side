const mongoose = require('mongoose');

const picSchema = mongoose.Schema({
  id: {
    type: Number, required: true, unique: true, dropDups: true,
  },
  name: {
    type: String, unique: true, required: true, dropDups: true,
  },
  urls: Array,
});

const Picture = mongoose.model('Picture', picSchema);

module.exports = Picture;
