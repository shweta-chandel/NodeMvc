const mysql = require('mysql');
const express = require('express');
const path =require("path");
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
var validator = require("email-validator");
const bcrypt = require('bcrypt');



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
  let sql = "SELECT * FROM register";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results)
  });
});



app.post('/register', (req, res) => {
  console.log(req.body)
  const email = req.body.email;
  //const mobile = req.body.mobile;
  var password = req.body.password;
  const confirm = req.body.confirm;
  let data;
  if (!email|| !password) {
  return res.send('Please provide email and password');
  }
  isEmail = validator.validate(email);
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
  

app.post('/update',(req, res) => {
  console.log(req.body);
  const mobile = req.body.mobile
  let sql = "UPDATE register SET mobile='"+req.body.mobile+"', WHERE email="+req.body.email;
  let query = conn.query(sql, (err, results) => {
  if(err) throw err;
    res.send("successfully mobile updated");
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const data = {email, password};
  conn.query("SELECT * FROM register WHERE email = ? AND password = ?", [email, password], function (err, rows) {
    if (rows.length > 0) {
      return res.send("logged in")
    }
    else {
      return res.send("not found");
    }
  })
})

app.post('/forgotpassword', (req, res) => {
  const email = req.body.email;
  var newpassword = req.body.newpassword;
  conn.query(`SELECT * FROM register WHERE email = "${email}"`, (err, results) => {
    if (!err) {
      if (results.length != 0) {
        conn.query('UPDATE register set password = ? where email =?', [newpassword, email], (err, results) => {
          if (!err) {
            return res.send("forget password updated")
          }
          else {
            return res.send(err);
          }
        })
      } else {
        return res.send("user not found cant updated forget password");
      }
    } else {
      return res.send(err);
    }
  })
})



app.listen(3000, () => console.log('server'));