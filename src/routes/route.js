const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook )
router.post("/createAuthor", BookController.createAuthor)
router.get("/getBookByBhagat", BookController.bookByBhagat)
router.get("/getAuthorOf", BookController.authorOfTwo)
router.get("/getbookAuthor", BookController.bookAuthor)

//router.get("/getBooksData", BookController.getBooksData)
// router.get("/bookList", BookController.getBooksList)
// router.post("/getBooksInYear", BookController.getBooksInYear)
// router.post("/getParticularBooks", BookController.getParticularBooks)
// router.get("/getXINRBooks", BookController.getXINRBooks)
// router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;