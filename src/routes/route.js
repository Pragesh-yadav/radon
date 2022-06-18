const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require("../controllers/weatherController")
const memeController = require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getDistrictId", CowinController.getDistrictId)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getDistrictId", CowinController.getDistrictId)

// Weather
router.get('/weather/getWeather', weatherController.getWeather)
router.get('/weather/onlyTemp', weatherController.onlyTemp)
router.get('/weather/sortByTemp', weatherController.sortByTemp)


// Meme

router.get('/meme/getAllMemes', memeController.getAllMemes)
router.post('/meme/captionImage', memeController.captionImage)


module.exports = router;