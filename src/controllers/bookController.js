const authorModel = require("../models/authorModel")

const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body
    // let author = req.body
    // console.log(author)
    // let publisher = req.body

    if(!book.author) {
        return res.send({ status: false, error: "Author ObjectId is required"})
    }

    const checkAuthor = await authorModel.findById(book.author)
    console.log(checkAuthor)
    if(!checkAuthor) {
        return res.send({status: false, error: "This author is not exit. Please enter correct author ObjectId"})
    }

    if(!book.publisher) {
        return res.send({ status: false, error: "Publisher ObjectId is required"})
    }

    const checkPublisher = await publisherModel.findById(book.publisher)
    console.log(checkPublisher)
    if(!checkPublisher) {
        return res.send({status: false, error: "This publisher is not exit. Please enter correct publisher ObjectId"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}


const updateBooks = async function(req, res) {

    const publishId = await publisherModel.find({$or: [{name: "penguin"}, {name: "harpercollins"}]}).select({_id:1})
    
    const updateBook = await bookModel.updateMany({publisher: publishId}, {$set: {isHardCover: true}}, {new: true})

    const authorId = await authorModel.find({rating: {$gt: 3.5}})

    const UpdateBookPrice = await bookModel.updateMany({author: authorId}, {$inc: {price: 10}}, {new: true}) // Increment by 10

    res.send({msg: updateBook, UpdateBookPrice})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks = updateBooks
