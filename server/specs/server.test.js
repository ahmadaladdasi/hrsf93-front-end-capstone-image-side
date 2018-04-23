const request = require('request');

const serverUrl = 'http://127.0.0.1:24623';


describe('Server', () => {


  test('Should be able to handle GET request', (done) => {

    request({
      url: `${serverUrl}/product-name/product-id/100101`,
      method: 'GET',
    }, (error, response) => {
      expect(response.statusCode).toBe(200);
    });

    done();
  });
});
