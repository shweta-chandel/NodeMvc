const mysql = require('mysql');
const express = require('express');
const app = express();



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
  let sql = "SELECT * FROM registration";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results)
  });
});


app.post('/registration', (req, res) => {
  console.log(req.body)
  const email_id = req.body.email_id;
  const mobile_no = req.body.mobile_no;
  const password = req.body.password;
  const confirm = req.body.confirm;
  let data = { email_id, mobile_no, password, confirm };
  if (!email_id || !mobile_no || !password) {
    console.log(email_id)
  return res.status(400).send('Please provide username, email, and password');
  }
  // if (confirm.value === password.value) {
  //   res.send('matched');
  // } else {
  //   res.send('Passwords do not match');
  // }
  //   conn.query("SELECT * FROM registration WHERE email_id='" + email_id + "' limit 1", (err, rows, fields) => {
  //     if (rows.length > 0) {
  //       return res.send("already exist");
  //     }
      conn.query("INSERT INTO registration SET?", data, (err, results) => {
        if (err) {
          return res.send("Failed");
        }
        else {
          return res.send("success");
        }
      });
   });

   



app.listen(3000, () => console.log('server'));