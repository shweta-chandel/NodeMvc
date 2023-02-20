const mysql = require('mysql');
const express = require('express');
const path =require("path");
const bodyparser = require('body-parser');
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
  let sql = "SELECT * FROM users";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(results)
  });
});


app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send('Please provide username, email, and password');
  }
    conn.query("SELECT * FROM users WHERE email='" + email + "' limit 1", (err, rows, fields) => {
      if (rows.length > 0) {
        return res.send("already exist");
      }
      conn.query("INSERT INTO users SET?", data, (err, results) => {
        if (err) {
          return res.send("Failed");
        }
        else {
          return res.send("success");
        }
      });
    });
  })
  



app.listen(3000, () => console.log('server'));