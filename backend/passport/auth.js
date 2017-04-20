const jwt = require('jsonwebtoken');
const passport = require('passport');

const authFuncs = () => {
  const sign = (payload) => {
    const secret = 'English Master Manipulator';
    const options = {
      audience: 'litclub.herokuapp.com',
      issuer: 'critiq',
      expiresIn: '90 days'
    };

    if (!payload && typeof payload !== 'object' && !Array.isArray(payload)) {
      return new Error('Payload must be an object');
    }

    return jwt.sign(payload, secret, options);
  };


 /**
 * @param {String} strategy - The passport strategy to use
 * @param {Object} options - Any options to pass to the authenticate function
 *
 * @return {Function} a closure with the strategy and option saved in the function
 */
  const authenticate = (strategy, options) => {
    const opts = options || {};

    return passport.authenticate(strategy, opts);
  };


  return { sign, authenticate };
};

module.exports = authFuncs();
