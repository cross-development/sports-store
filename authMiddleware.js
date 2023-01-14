const jwt = require('jsonwebtoken');

const USERNAME = 'admin';
const PASSWORD = 'secret';
const APP_SECRET = 'myappsecret';

module.exports = function (req, res, next) {
  if (req.url == '/login' && req.method == 'POST') {
    if (
      req.body != null &&
      req.body.name == USERNAME &&
      req.body.password == PASSWORD
    ) {
      let token = jwt.sign({ data: USERNAME, expiresIn: '1h' }, APP_SECRET);

      res.json({ success: true, token: token });
    } else {
      res.json({ success: false });
    }

    return res.end();
  } else if (
    (req.url.startsWith('/products') && req.method != 'GET') ||
    (req.url.startsWith('/orders') && req.method != 'POST')
  ) {
    let token = req.headers['authorization'];

    if (token != null && token.startsWith('Bearer<')) {
      token = token.substring(7, token.length - 1);

      try {
        jwt.verify(token, APP_SECRET);

        return next();
      } catch (err) {}
    }

    res.statusCode = 401;

    return res.end();
  }

  next();
};
