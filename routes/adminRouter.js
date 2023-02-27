const express = require('express');
const app = express();
const adminController = require('../controller/adminController');

app.post('/login', adminController.login);
app.post('/vehilceCategory', adminController.vehilceCategory);

module.exports = app;