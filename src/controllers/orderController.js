const { count } = require("console")
const orderModel= require("../models/orderModel")

const createOrder= async function (req, res) {
    let data = req.body
    let authorData = await orderModel.create(data)
    // //if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

    // //let savedData= await authorModel.create(data)
    // res.send({data: authorId})
    req.send({msg: authorData})
}

module.exports.createOrder= createOrder
