const router = require('express').Router();

const {
  loginValidation,
  signupValidation,
} = require('../middleware/validation');

const {
  signupController,
  loginController,
} = require('../controller/user/index');


router.post('/signup', signupValidation, signupController);
router.post('/login', loginValidation, loginController);


module.exports = router;
