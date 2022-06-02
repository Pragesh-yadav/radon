const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formate  = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    logger.welcome()
    helper.printDate()
    helper.printMoth()
    helper.getBatchInfo()
    formate.removeSapce()
    formate.changetoLowerCase()
    formate.changetoUpperCase()
    res.send('Problem 1 API')
});

router.get('/test-me1', function (req, res) {
    
    res.send('Problem 2 API')
});

router.get('/test-me2', function (req, res) {
    
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason