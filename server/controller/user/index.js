const signupController = require('./signup');
const loginController = require('./login');
const updateUserController = require('./updateUser')
const isAuth = require('./isAuth')
const logoutController = require('./logout')


module.exports = {
  signupController,
  loginController,
  updateUserController,
  isAuth,
  logoutController
};
