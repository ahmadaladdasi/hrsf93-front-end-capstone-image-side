const Picture = require('./index.js');
const mongoose = require('mongoose');
const faker = require('faker');

let fakeData = [];

const randomFakeImageURLs = () => {
  const fakeUrl = [];
  for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
    fakeUrl.push(faker.image.imageUrl());
  }
  return fakeUrl;
};

for (let i = 100000; i < 100100; i += 1) {
  fakeData.push({
    id: i,
    name: faker.commerce.productName(),
    urls: randomFakeImageURLs(),
  });
}


mongoose.connect('mongodb://localhost/images').then(() => {
  Picture.create(fakeData)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
