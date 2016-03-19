'use strict';

function factory (type, config, load, typed) {

  /**
   * Compute the Digamma function
   *
   * Syntax:
   *
   *    math.digamma(n)
   *
   * Examples:
   *
   *    math.digamma(1);       // returns -gamma (Euler-Mascheroni constant)
   *    math.digamma(0);       // returns Infinity
   *
   * See also:
   *
   *    combinations, factorial, permutations, gamma
   *
   * @param {number} n  A real number
   * @return {number}
   */
   var digamma = typed('digamma', {
     'number': function (x) {

        var v = 0;

        if (x <= 0 && x === Math.round(x)) {
            return Infinity;
        } else if (x < 0) {
            return digamma(1.0 - x) + Math.PI / Math.tan(-Math.PI * x);
        } else if (x <= Math.EPSILON) {
            return math.ZETA2 * x - 1.0 / x + math.GAMMA;
        } else {
            while (x < 12) {
                v -= 1.0 / x++;
            }
            v += Math.log(x) - 0.5 / x;
            x *= x;
            return v - (
              0.08333333333333333 - (
                0.008333333333333333 - (
                  0.0039682539682539 - (
                    0.004166666666666 - 1 / (
                      132 * x)) / x) / x) / x) / x;
        }
    }
  });
    
  return digamma;
}

exports.name = 'digamma';
exports.factory = factory;