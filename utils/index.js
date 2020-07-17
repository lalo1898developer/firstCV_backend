/* eslint-disable arrow-body-style */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  comparePasswords: (userPassword, reqPassword) => {
    return bcrypt.compare(reqPassword, userPassword);
  },
  createToken: (user) => {
    const payload = {
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      iat: Math.floor(Date.now() / 1000) - (60 * 60 * 24),
    };
    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  },
};
