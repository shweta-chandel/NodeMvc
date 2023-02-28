const jwt = require('jsonwebtoken');
const secretKey = 'qwertyuiop';
module.exports.validateToken = async(req, res, next)=> {
    try {
        const token = req.headers['authorization'];
        console.log(token)
        if(!token){
            res.status(400).json({'status':'false', 'message':'please Enter a valide token'});
        }
        else{
            const splitToken = token.split(' ').pop();
            const veryifyToken = jwt.verify(splitToken, secretKey);
            req.userId = veryifyToken.userId
            // console.log('tokenNum',veryifyToken)
            next();
        }
    } catch (error) {
        console.log('DecodeToken Error', error);
        res.status(401).json({'status':'false',error})
    }
}