var assert = require('assert');
var math = require('../../../index');

describe('im', function() {

  it('should return the imaginary part of a complex number', function() {
    assert.equal(math.im(math.complex(2,3)), 3);
    assert.equal(math.im(math.complex(-2,-3)), -3);
    assert.equal(math.im(math.i), 1);
  });

  it('should return the imaginary part of a real number', function() {
    assert.equal(math.im(2), 0);
  });

  it('should return the imaginary part of a boolean', function() {
    assert.equal(math.im(true), 0);
    assert.equal(math.im(false), 0);
  });

  it('should return the imaginary part of a string', function() {
    assert.equal(math.im('string'), 0);
  });

  it('should return the imaginary part of a boolean', function() {
    assert.equal(math.im(true), 0);
    assert.equal(math.im(false), 0);
  });

  it('should return the imaginary part for each element in a matrix', function() {
    assert.deepEqual(math.im([2, math.complex('3-6i')]), [0, -6]);
    assert.deepEqual(math.im(math.matrix([2, math.complex('3-6i')])).valueOf(), [0, -6]);
  });

});