const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
  updateUserValidation
} = require('../middleware/validation');

const {
  signupController,
  loginController,
  updateUserController,
  isAuth,
  logoutController
} = require('../controller/user/index');

router.get('/is-auth',isAuth)
router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);
router.patch('/user', updateUserValidation,updateUserController);
router.get('/logout',logoutController)


module.exports = router;
