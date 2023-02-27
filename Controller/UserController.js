exports.mobile = async (req, res, next) => {
    console.log("ankit")
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
      res.status(200).json({'message':'Send OTP SuccessFulllly'})
  }
