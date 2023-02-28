const jwt = require('jsonwebtoken');
const jwtToken = require('./helper/jwtToken');




module.exports.adminLogin = async(req,res) => {
    console.log(req.body)
    const email = req.body.email;
    var password = req.body.password;
    const confirm = req.body.confirm;
    let data;
    if (!email || !password) {
      return res.send('Please provide email and password');
    }
    var isEmail = validator.validate(email);
    if (!isEmail) {
      return res.send('Please insert correct email')
    }
    if (confirm !== password) {
      res.send('Password does not match');
    }
    bcrypt.hash(password, 10, function (err, hash) {
      password = hash;
      data = { email, password }
      
      conn.query("INSERT INTO register SET?", data, (err, results) => {
        if (err) {
          return res.send("Failed");
        }
        else {
          return res.send("success");
        }
      });
    });
  }


 app.post('/vehilceCategory', (req, res) => {
    const { title, vehicle_type } = req.body;
    const image = req.files.image;
        if (!req.body.title) {
            res.status(400).json({ 'message': 'title is required' });
        }
        else {
            console.log(req.body.title)
        }
        if (!req.body.vehicle_type) {
            res.status(400).json({ 'message': 'vihelce_type is required' });
        }
        if (!req.files.image) {
            res.status(400).json({ 'message': 'image is required' });
        }
        const data = { title, vehicle_type, image };
        conn.query("INSERT INTO register SET?", data, (err, results) => {
            if (err) {
              return res.send("Failed");
            }
            else {
              return res.send("success");
            }
          });
        });
      
    