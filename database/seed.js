const Picture = require('./index.js');
const mongoose = require('mongoose');
const faker = require('faker');

let fakeData = [];


const makeRandomFakeImageURLs = () => {
  const fakeUrls = [];
  for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
    let num = Math.ceil(Math.random() * 499);
    num = num.toString().padStart(3, '0');
    const hostedUrl = `https://s3-us-west-1.amazonaws.com/ahmad-product-images/pic_${num}.jpg`;
    fakeUrls.push(hostedUrl);
  }
  return fakeUrls;
};

for (let i = 200000; i < 200100; i += 1) {
  fakeData.push({
    id: i,
    name: faker.commerce.productName(),
    urls: makeRandomFakeImageURLs(),
  });
}


mongoose.connect('mongodb://localhost/images').then(() => {
  Picture.create(fakeData)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
