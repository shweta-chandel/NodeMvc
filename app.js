const router = require('express').Router();
const UserController = require('../Controller/UserController');
console.log(UserController)
router.post("/mobile", UserController.mobile);
router.post("/verify-otp", AuthController.verifyOtp);
router.post("/complete-profile", AuthController.completeprofile);
router.post("/login", AuthController.login);
router.post("/add-vehicle", AuthController.addvehicle);

module.exports = router;
