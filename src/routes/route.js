const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMiddleware = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authMiddleware.checkAuthorization, userController.getUserData)
router.put("/users/:userId",authMiddleware.checkAuthorization, userController.updateUser)
router.delete('/users/:userId',authMiddleware.checkAuthorization, userController.deleteUser)

module.exports = router;