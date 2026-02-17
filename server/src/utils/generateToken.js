const jwt = require('jsonwebtoken');

/**
 * Generates a signed JWT for authentication
 * @param {string} id - User ID
 * @param {string} role - User role (USER / ADMIN)
 * @returns {string} JWT token
 */
const generateToken = (id, role) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }

  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

module.exports = generateToken;