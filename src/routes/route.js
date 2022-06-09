const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

/// Post Request
router.post("/createAuthor", authorController.createAuthor  )

router.post("/createBook", bookController.createBook  )

router.post("/createPublisher", publishController.createPublisher)


// GET Request
router.get("/getAuthorsData", authorController.getAuthorsData)

router.get("/getBooksData", bookController.getBooksData)

router.put("/updateBooks", bookController.updateBooks)

module.exports = router;