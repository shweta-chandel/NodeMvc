const mysql = require('mysql');
const express = require('express');
const path = require("path");
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
var validator = require("email-validator");
const bcrypt = require('bcrypt');
const otp = require('otplib');
const axios = require('axios');
const otpGenerator = require('otp-generator')
const addressvalidator  = require('address-validator')
let csc = require('country-state-city').default;
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
const jwt = require('jsonwebtoken');
const jwtToken = require('./helper/jwtToken');
const multer = require('multer');
const multerStorage = multer.memoryStorage();
var storage = require('storage');







pp.post('/register', async (req, res) => {
    const mobile = req.body.mobile;
    const OTP = otpGenerator.generate(5, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false, digits: true });
    const sendOTP = await axios
      .get(`http://cloudsms.digialaya.com/ApiSmsHttp?UserId=sms@fintranxect.com&pwd=pwd2022&Message=${OTP}%20is%20verification%20otp%20for%20finnit.com.%20OTPs%20are%20SECRET.%20DO%20NOT%20disclose%20it%20to%20anyone.%20FINTRANXECT&Contacts=91${mobile}&SenderId=FTLAPP&ServiceName=SMSTRANS&MessageType=1&StartTime=&DLTTemplateId=1707166903059048617`).then((res) => {
        if (res.data.status === 'success') {
          conn.query(`INSERT INTO profile (mobile, otp) VALUES ('${mobile}', '${OTP}')`, (error, results) => {
            if (error){
              console.log('error',error)
            }
            else {
              return sendOTP
            }
          });
        }
      })
    // await axios
    // .get(`https://smtlabs.org/api/sendOTP/${OTP}/${mobile}`)
    // console.log('111111',sendOTP)
      res.status(200).json({'message':'Send OTP SuccessFully'})
  })
  
  
  app.post('/verifyOtp', async(req, res) => {
    const otp = req.body.otp;
    const CurrentTime = new Date();
    const sql = `SELECT * FROM profile WHERE otp=${otp}`;
    await conn.query(sql, (err, results) => {
      if (err) throw err;
      else {
        // console.log('results',results)
        const token = jwt.sign({ userId : results[0].id }, 'qwertyuiop', { expiresIn: '24h' })
        res.status(200).json({ 'message': 'Otp Verify SuccessFully', token })
      }
    });
  })
  
  
  app.post('/complitProfile',jwtToken.validateToken, (req, res) => {
    const full_name = req.body.full_name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const address = req.body.address;
    const building = req.body.building;
    const society = req.body.society;
    const state = req.body.state;
    const city = req.body.city;
    const pincode =  req.body.pincode;
    const pincodeRegex = /^\d{6}$/;
    const cityRegex = /^[a-zA-Z\s-]+$/;
    var regex = /^[A-Za-z]+$/;
    
    const data = { full_name, email, mobile, address, building, society, state, city, pincode }
    if (!full_name || !email) {
      console.log(full_name)
      return res.send('Please provide major requirement');
    }
     if (!full_name.match(regex)) {
      return res.send('full name should be letters only.');
     }
    var isEmail = validator.validate(email);
    if (!isEmail) {
      return res.send('Please insert correct email')
    } 
    var isState =State.getStateByCodeAndCountry(state, 'IN');
    if(!isState){
      res.send("state dosnt exist")  
    }
    const isCityValid = cityRegex.test(city);
    const isPincodeValid = pincodeRegex.test(pincode);
   if (!isCityValid){
      res.send("city dosnt exist")
   }if (!isPincodeValid)
   console.log(isPincodeValid)
    {
      res.send("wrong pincode")
   }
  conn.query(`UPDATE profile set full_name  = ?,email = ?,address = ?, building =?,society =?, state = ?, city  =?, pincode =?  where id = ?`, [full_name,email,address,building,society,state,city,pincode, mobile], (err, results) => {
    if (!err) {
      console.log(err)
      return res.send("profile updated")
    }
    else {
      return res.send(err);
    }
  })
  })
  
  app.post('/login', (req, res) => {
    const mobile = req.body.mobile;
    conn.query("SELECT * FROM profile WHERE mobile = ?", [mobile], function (err, rows) {
      if (rows.length > 0) {
        return res.send("logged in")
      }
      else {
        return res.send("not found");
      }
    })
  })
  
  
  app.get('/getProfile', (req, res) => {
    let sql = "SELECT * FROM profile where id = 24";
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.send(results)
    });
  });
  
  
  //, uploadImg.array('vehicle_image',1)
  //const uploadImg = multer({storage: storage});
  app.post('/addVehicle'),(req, res) => {
  //   if(req.files){
  //     console.log(req.files)
  //     console.log("file uploaded")
  //   }
  //   const storage = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //         cb(null, './uploads');
  //       },
  //     filename: function (req, file, cb) {
  //         cb(null, file.originalname);
  //     }
  // });
  console.log(req.body)
    const vehicle_type =  req.body.vehicle_type;
    const vehicle_model = req.body.vehicle_model;
    const vehicle_color = req.body.vehicle_color;
    const license_num = req.body.license_num;
    const parking_num = req.body.parking_num;
    const data = { vehicle_type, vehicle_model, vehicle_color, license_num, parking_num }
    conn.query("INSERT INTO customer_vehicle SET?", data, (err, results) => {
      if (err) {
        console.log(err);
        return res.send("Failed"); 
      }
      else {
        return res.send("success");
      }
    });
  };