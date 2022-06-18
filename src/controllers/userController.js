const userModel= require("../models/userModel")




// const basicCode= async function(req, res, next) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
//     }

const createUser= async function (req, res) {
    
    let data= req.body
    let saveUser = await userModel.create(data)
    res.send(saveUser)
    
}



module.exports.createUser= createUser
