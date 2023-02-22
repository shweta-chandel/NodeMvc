const mysql = require('mysql');
const express = require('express');
const path =require("path");
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
var validator = require("email-validator");
const bcrypt = require('bcrypt');
const otp = require('otplib');

 otp.authenticator.options = { crypto: require('crypto') };
const secret = otp.authenticator.generateSecret();

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carWasher',
  multipleStatements: true
});
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});


app.get('/',(req, res) => {
  let sql = "SELECT * FROM mobile";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results)
  });
});



app.post('/register', (req, res) => {
  console.log(req.body)
  const email = req.body.email;
  var password = req.body.password;
  const confirm = req.body.confirm;
  let data;
  if (!email|| !password) {
  return res.send('Please provide email and password');
  }
 var  isEmail = validator.validate(email);
  if(!isEmail){
    return res.send('Please insert correct email')
  }
  if (confirm !== password) {
    res.send('Password does not match');
  }

 bcrypt.hash(password, 10, function(err, hash) {
    password = hash;
    data = {email, password}
    conn.query("INSERT INTO register SET?", data, (err, results) => {
      if (err) {
        return res.send("Failed");
      }
      else {
        return res.send("success");
      }
    });
  });
})
  



app.post('/mobile', (req, res) => {
const mobile = req.body.mobile;
console.log('22222222222',mobile)
const otp = Math.floor(Math.random() * 100000);
conn.query(`INSERT INTO profile (mobile, otp) VALUES ('${mobile}', '${otp}')`, (error, results) => {
  if (error) throw error;
  console.log('OTP generated and saved to database');
});
})


app.post('/profile', (req,res) => {
  console.log(req.body)
  const full_name = req.body.full_name;
  const email = req.body.email;
  const mobile = req.body.mobile;
  const otp =req.body.otp;
  const address = req.body.address;
  const building = req.body.building;
  const society = req.body.society;
  const state =req.body.state;
  const city = req.body.city;
  const pin =req.body.pin;
  const data = { full_name, email, mobile, otp, address, building, society, state, city, pin}
  //mobile = mobile.replace(/\D/g, '');
//   if (!full_name || !email|| !mobile) {
//     console.log(full_name)
//     return res.send('Please provide major requirement');
//     }
//   var  isEmail = validator.validate(email);
//   if(!isEmail){
//     return res.send('Please insert correct email')
//   }
//   if (mobile.length == 10) {
//     return true;
// }
// console.log("Invalid phone number.");
// return false;
// })
  conn.query("INSERT INTO profile SET?", data, (err, results) => {
    if (err) {
      return res.send("Failed");
    }
    else {
      return res.send("success");
    }
  });
})









// app.post('/login', (req, res) => {
//   console.log(req.body)
//   const email = req.body.email;
//   const password = req.body.password;
//   const data = {email, password};
//   conn.query("SELECT * FROM register WHERE email = ? AND password = ?", [email, password], function (err, rows) {
//     if (rows.length > 0) {
//       return res.send("logged in")
//     }
//     else {
//       return res.send("not found");
//     }
//   })
// })

// app.post('/forgotpassword', (req, res) => {
//   const email = req.body.email;
//   var newpassword = req.body.newpassword;
//   conn.query(`SELECT * FROM register WHERE email = "${email}"`, (err, results) => {
//     if (!err) {
//       if (results.length != 0) {
//         conn.query('UPDATE register set password = ? where email =?', [newpassword, email], (err, results) => {
//           if (!err) {
//             return res.send("forget password updated")
//           }
//           else {
//             return res.send(err);
//           }
//         })
//       } else {
//         return res.send("user not found cant updated forget password");
//       }
//     } else {
//       return res.send(err);
//     }
//   })
// })



app.listen(3000, () => console.log('server'));