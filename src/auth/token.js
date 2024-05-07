const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()



const generateAccessToken = (user) => {

console.log(user)
    
    // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY);

    const accessToken = jwt.sign(JSON.parse(JSON.stringify(user)), 'rhufbadghjfb', {expiresIn: '24h'})

    return accessToken
}

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Forbidden')
        req.user = user
        next()
    })


}

module.exports.generateAccessToken = generateAccessToken
module.exports.authenticateToken = authenticateToken