const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
// First problem GET/movies
router.get('/movies', function(req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(movies)
})

// Second problem GET/movies/indexNumber
router.get('/movies/:indexNumber', function(req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    const  moviesIndex = movies[req.params.indexNumber]
    res.send(moviesIndex)
    
})


// Third problem with conditions

router.get('/movies/:indexNumber', function(req, res) {
    const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    if(req.params.indexNumber < movies.length) {
        const  moviesIndex = movies[req.params.indexNumber]
        res.send(moviesIndex)
    }
    else {
        res.send("Please enter a vailid index number")
    }
})
const filmsArray = [{'id': 1,'name': "The Shining"},
                    {'id': 2,'name': "Incendies"},
                    {'id': 3,'name': "Rang De Basanti"},
                    {'id': 4,'name': "Finding Nemo"}]

// Problem 4 GET/films 
router.get('/films', function(req, res) {
    res.send(filmsArray)

})

// Problem 5 GET/films/filmId

router.get('/films/:filmId', function(req, res) {
    for(let i = 0; i < filmsArray.length; i++) {
        if(filmsArray[i]== req.params.filmId){
            res.send(filmsArray[i])
        }
        else {
            res.send('No movie exists with this id')
        }
    }
    

})

router.get('/hello', function (req, res) {

    res.send('Hello there!')
});

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason