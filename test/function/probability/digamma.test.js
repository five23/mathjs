var assert = require('assert'),
    approx = require('../../../tools/approx'),
    error = require('../../../lib/error/index'),
    math = require('../../../index'),
    bigUtil = require('../../../lib/utils/index').bignumber,
    bignumber = math.bignumber,
    digamma = math.digamma;

describe('digamma', function () {

  it('should calculate the digamma of an integer number', function () {
    approx.equal(digamma(1), -math.eulergamma);
    approx.equal(digamma(2), 1-math.eulergamma);
    approx.equal(digamma(3), (3/2)-math.eulergamma);
    approx.equal(digamma(4), (11/6)-math.eulergamma);
    approx.equal(digamma(5), (25/12)-math.eulergamma);
    approx.equal(digamma(6), (137/60)-math.eulergamma);
    assert.equal(digamma(Infinity), Infinity);
  });

  it('should calculate the digamma of a nonpositive integer', function () {
    assert.equal(digamma(0), Infinity);
    assert.equal(digamma(-1), Infinity);
    assert.equal(digamma(-2), Infinity);
    assert.equal(digamma(-100000), Infinity);
  });

  it('should calculate the digamma of a rational number', function () {
    approx.equal(digamma(0.125), -8.388492663295854867802742);
    approx.equal(digamma(0.25), -4.2274535333762654080895301);
    approx.equal(digamma(0.5), -1.9635100260214235);
    approx.equal(digamma(1.5), 0.03648997397857652);
    approx.equal(digamma(2.5), 0.7031566406452432);
    approx.equal(digamma(3.5), 1.103156640645243);
    approx.equal(digamma(30.5), 3.4012436689616603);
    approx.equal(digamma(144.9),  4.972589224712891);

    approx.equal(digamma(-0.5), 0.03648997397857645);
    approx.equal(digamma(-1.5), 0.7031566406452434);
    approx.equal(digamma(-2.5), 1.103156640645243);
    approx.equal(digamma(-144.9), -4.689337454501471);
  });

  it('should calculate the digamma of an irrational number', function () {
    approx.equal(digamma(Math.SQRT2), -0.04690962626940842); 
    approx.equal(digamma(Math.PI), 0.977213307942007);
    approx.equal(digamma(Math.E), 0.804926274463566);

    approx.equal(digamma(-Math.SQRT2), 1.527988034212009);
    approx.equal(digamma(-Math.PI), 7.885952385385496);
    approx.equal(digamma(-Math.E), -1.397709310719015);
  });
  
  it('should calculate the gamma of a boolean', function () {
    approx.equal(digamma(true), -math.eulergamma);
    assert.equal(digamma(false), Infinity);
  });

  it('should calculate the gamma of null', function () {
    assert.equal(digamma(null), Infinity);
  });

  it('should throw en error if called with invalid number of arguments', function() {
    assert.throws(function() { gamma(); });
    assert.throws(function() { gamma(1,3); });
  });

  it('should throw en error if called with invalid type of argument', function() {
    assert.throws(function() { gamma(new Date()); });
    assert.throws(function() { gamma('a string'); });
  });

  it('should LaTeX gamma', function () {
    var expression = math.parse('gamma(2.5)');
    assert.equal(expression.toTex(), '\\Gamma\\left(2.5\\right)');
  });

});
