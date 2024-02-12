const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('should return correct status code and message for GET /', function (done) {
    request.get('http://localhost:7865', (_err, response, body) => {
      // Assertion
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
