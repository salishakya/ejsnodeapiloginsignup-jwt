const { Router } = require('express');
const authController = require('../controllers/authControllers');
const { body } = require('express-validator');

var validate =  [// username must be an email
body('email').isEmail(),
// password must be at least 5 chars long
body('password').isLength({ min: 5 })]

const router = Router();

router.get('/signup',validate , authController.signup_get);
router.post('/signup', validate , authController.signup_post);
router.get('/login', validate ,authController.login_get);
router.post('/login',  validate , authController.login_post);
router.get('/logout' , authController.logout_get);

module.exports = router;