const express = require('express');
const app = express();
const customerController = require('../controller/customerController');
const jwtToken = require('../helper/verifyToken');

app.post('/register',customerController.register);
app.post('/verifyOtp', customerController.otpVerify);
app.post('/login',customerController.login);
app.get('/getProfile',jwtToken.validateToken, customerController.getProfile);
app.post('/complitProfile', jwtToken.validateToken, customerController.complitProfile);
app.get('/getVehilceType', jwtToken.validateToken, customerController.getVehilceType);
app.get('/getState', customerController.getState);
app.get('/getCity/:stateID', customerController.getCity);
app.post('/getPincode', customerController.getPincode);
app.post('/addVehilcle', customerController.addVehilcle);
module.exports = app;