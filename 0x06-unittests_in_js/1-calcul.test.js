const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should perform SUM operation', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.2), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('should perform SUBTRACT operation', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.2), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  
  it('should perform DIVIDE operation', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 1 / 3);
    assert.equal(calculateNumber('DIVIDE', 1, 3.2), 1 / 3);
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 1 / 4);
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 1 / 4);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 2 / 4);
  });
  
  it('should handle division by zero and return "Error"', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
