const { count } = require("console");
const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");
const { updateMany } = require("../models/bookModel");

const createBook = async function (req, res) {
  let newBookdata = req.body;
  let savedData = await bookModel.create(newBookdata);
  res.send({ Books: savedData });
};

const createAuthor = async function(req, res) {
  let authorData = req.body
  let saveAuthor = await authorModel.create(authorData)
  res.send({Authors: saveAuthor})
}

const bookByBhagat = async function(req, res)  {
        let getBook = await authorModel.find({author_name: "Chetan Bhagat"}).select("author_id")
        let bookBy = await bookModel.find({author_id: getBook[0].author_id})
        res.send({msg: bookBy})
}

const authorOfTwo = async function(req, res) {
  let authorOf =  await bookModel.findOneAndUpdate({bookName: "Two States "}, {$set:{price: 100}}, {new: true})
  let authorData = await authorModel.find({author_id:authorOf.author_id}).select("author_name")
  let  updatePrice = authorOf.price
  res.send({msg: authorData, updatePrice})
}

const bookAuthor = async function(req, res) {
  let author = []
  let books = await bookModel.find({price: {$gte:50,$lte:100}}).select({author_id:1})
  ///console.log(book)
  for(let i = 0; i< books.length; i++) {
    let authorNameId = await authorModel.find({author_id:books[i].author_id}).select({author_name:1, _id:1})
    //console.log(authorNameId)
    author.push(authorNameId)
  }
  res.send(author)
}


module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor
module.exports.bookByBhagat = bookByBhagat
module.exports.authorOfTwo = authorOfTwo
module.exports.bookAuthor = bookAuthor

// const getBooksList = async function (req, res) {
//   let allBooks = await bookModel
//     .find()
//     .select({ bookName: 1, authorName: 1, _id: 0 });
//   res.send(allBooks);
// };
// const getBooksInYear = async function (req, res) {
//   let allBooksData = req.body;
//   let getBooksByYear = await bookModel.find({ year: allBooksData.year });
//   res.send({ msg: getBooksByYear });
// };
// const getParticularBooks = async function (req, res) {
//   let bookData = req.body
//   console.log(bookData)
//   let selectBooks = await bookModel.find({ bookData })
//   res.send(selectBooks);
// };
// const getXINRBooks = async function (req, res) {
//   let getBookINR = await bookModel.find({
//     'prices.indianPrice': { $in: ["100INR", "200INR", "500INR","1080"] },
//   });
//   res.send(getBookINR);
// };
// const getRandomBooks = async function (req, res) {
//   let books = await bookModel.find({
//     $or: [{ stockAvailable: true }, { totalPages: { $gt: 500 } }],
//   });
//   res.send(books);
// };
// module.exports.getBooksList= getBooksList
// module.exports.getBooksInYear= getBooksInYear
// module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINRBooks= getXINRBooks
// module.exports.getRandomBooks= getRandomBooks

