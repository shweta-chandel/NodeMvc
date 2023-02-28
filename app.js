require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');

const mainRouter = require('./src/index');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use('/',mainRouter);

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carWasher',
  multipleStatements: true
});
conn.connect((err) => {
  if (err) throw err;
  console.log('Mysql Connected...');
});




app.listen(3000, () => console.log('server'));