const { expressjwt: jwt } = require('express-jwt');

const getToken = (req) => {

  const { authorization } = req.headers;

  if (!authorization) return null;

  const [type, token] = authorization.split(' '); 

  return ['Bearer', 'Token', 'Basic'].includes(type) ? token : null;
};

const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  requestProperty: 'user',
  getToken,
});

module.exports = auth;