var express = require("express");
const AuthController = require("../../controllers/api/AuthController");

var router = express.Router();

router.post("/mobile", AuthController.mobile);
router.post("/verify-otp", AuthController.verifyOtp);
router.post("/complete-profile", AuthController.completeprofile);
router.post("/login", AuthController.login);
router.post("/add-vehicle", AuthController.addvehicle);

module.exports = router;
