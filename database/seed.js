const db = require('./index.js');
const faker = require('faker');

for (let i = 100000; i < 100100; i += 1) {
  db.save([{
    id: i,
    name: faker.commerce.productName(),
    urls: [faker.image.imageUrl(), faker.image.imageUrl(), faker.image.imageUrl()],
  }]);
}
