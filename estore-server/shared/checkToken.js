const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, 'estore-secret-key');
    next();
  } catch (error) {
    console.log('check token failed');
    res.status(401).send({ message: 'Authorization failed!' });
  }
};
