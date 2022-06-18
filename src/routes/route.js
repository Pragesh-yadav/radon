const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const tokenMidddleware = require("../middlewares/authMiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", tokenMidddleware.tokenCheck, userController.getUserData)

router.put("/users/:userId", tokenMidddleware.tokenCheck, userController.updateUser)

router.delete("/users/:userId", tokenMidddleware.tokenCheck, userController.deleteUser)

module.exports = router;