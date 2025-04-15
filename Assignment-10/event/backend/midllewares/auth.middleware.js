const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization')
    console.log(authHeader)
    if(!authHeader){
        return res.status(401).send({message: "Token not provided."})
    }
    let token = authHeader.split(" ")[1]
    console.log(token)
    try{
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded)
        req.user = decoded
        next()
    } catch(error){
        return res.status(401).send({message: "Invalid Token"})
    }
}

module.exports = verifyToken