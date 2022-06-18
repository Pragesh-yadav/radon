const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const checkToken = async function (req,res,next) {

    let token = req.headers["x-auth-token" || "X-Auth-Token"]
    if (!token) {
        return res.send({ error: "no token found" })
    }

    let decodedToken = jwt.verify (token, "functionup-radon");
        req.decodedToken = decodedToken
    
    if (!decodedToken) {
        return res.send({ status: false, msg: "token is invalid" });
    }
    next ()
}


const checkAuthorization = function(req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-radon");
     let userToBeModified = req.params.userId
     let userLoggedIn = decodedToken.userId
      if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
 
    next()
}
module.exports.checkToken = checkToken
module.exports.checkAuthorization = checkAuthorization