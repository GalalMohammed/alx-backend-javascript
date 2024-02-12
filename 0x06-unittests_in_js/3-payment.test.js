const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments and display the message', function () {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertion
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy to avoid side effects in other tests
    calculateNumberSpy.restore();
  });
});
