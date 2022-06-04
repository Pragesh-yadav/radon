const express = require("express");
const router = express.Router();
let players = [
  {
    name: "Sheryas",
    dob: "10/6/1990",
    gender: "male",
    city: "Mumbai",
    sports: ["cricket"],
  },
  {
    name: "Umesh",
    dob: "10/6/1989",
    gender: "male",
    city: "Lucknow",
    sports: ["cricket"],
  },
  {
    name: "Sunil",
    dob: "10/6/1990",
    gender: "male",
    city: "Mumbai",
    sports: ["Football"],
  },
];
router.post("/players", function (req, res) {
  let newPlayers = req.body;
  const IsPlayer = players.some((player) => player.name === newPlayers.name);
  if (!IsPlayer) {
    players.push(newPlayers);
    res.send({ data: players, status: true });
  }
  else {
    res.send("This player alredy exit")
  }
});

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })
// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })
module.exports = router;
