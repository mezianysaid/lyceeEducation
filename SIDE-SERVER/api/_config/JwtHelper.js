const Jwt = require('jsonwebtoken');
// require('dotenv/config');
const config = require('./config')

module.exports.verifyJwtToken = (req, res, next) => {
    var token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided' });
    else {
        Jwt.verify(token, config.JWT_Secret,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed' })
                else {
                    req._id = decoded._id;
                    next();
                }
            })
    }
}