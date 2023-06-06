const Errorhandler = require('./utils/ErrorHandler')
const sendToken = require('./utils/jwt')
class Auth extends Errorhandler {
  async registerUser(req, res, next, Model, Body) {
    try {
      const user = await Model.create(Body);
      await user.save({ validateBeforeSave: false });
      sendToken(user, 201, res,'User Registration Success');
    } catch (error) {
      next(new Errorhandler("User Registration Falied", 401));
    }
  }
}

module.exports = Auth