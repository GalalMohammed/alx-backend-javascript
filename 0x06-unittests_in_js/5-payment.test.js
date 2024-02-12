const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    // Create a spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once for totalAmount = 100, totalShipping = 20', function () {

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertion
    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message and be called once for totalAmount = 10, totalShipping = 10', function () {

    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Assertion
    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
