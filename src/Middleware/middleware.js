const JWTService = require('../utils/JWTtoken');
const tokenModel = require('../model/tokenModel');
const user_Model = require('../model/userModel');

async function isValidToken(req, res, next) {
  try {
    let { token } = req.headers;
    token = token.split(' ')[1];
    if (token) {
      JWTService.verifyToken(token);
      //verification token in db
      const result = await tokenModel.findOne({ token });
      if (result) {
        next();
      } else {
        res
          .status(400)
          .json({ status: 'failed', message: 'Token is not present in DB' });
      }
    } else {
      res
        .status(400)
        .json({ status: 'failed', message: 'Token is not present in header' });
    }
  } catch (error) {
    res.json({
      status: 'token error',
      error,
    });
  }
}


module.exports = {
  isValidToken,
};
