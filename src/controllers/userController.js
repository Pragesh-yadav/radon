const BookModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getAllBooks= async function (req, res) {
    let allBooks= await BookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getAllBooks= getAllBooks