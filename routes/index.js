var express = require('express');
var router = express.Router();
var Freelancer = require("../models/Freelancer");

router.get("/", (req, res) => {
  res.send("WELCOME TO THE REST API");
});

router.get("/all_freelancer", (req, res) => {
  Freelancer.find({})
  .then((data) => {res.send(data);})
  .catch((err) => {console.log("err occured during finding");});
});

router.get("/lancer/service/:service", (req, res) => {
  Freelancer.find({lancer_service : req.params.service})
  .then((data) => {res.send(data);})
  .catch((err) => {console.log("err occur in finding");});
});

router.get("/lancer/city/:city", (req, res) => {
  Freelancer.find({lancer_city: req.params.city})
  .then((data) => { res.send(data); })
  .catch((err) => { console.log("err occur on finding city");})
});

router.get("/lancer/service/:service/city/:city", (req, res) => {
  Freelancer.find({lancer_city: req.params.city, lancer_service : req.params.service})
  .then((data) => { res.send(data); })
  .catch((err) => { console.log("error on finding both params"); })
});

router.post("/insert_freelancer", (req, res) => {
  console.log("you are here my friend");
  var obj = new Freelancer({
    lancer_name: req.body.lancer_name,
    lancer_service: req.body.lancer_service,
    lancer_address: req.body.lancer_address,
    lancer_city: req.body.lancer_city
  });
  obj.save()
  .then((data) => {console.log("data inserted successfully");})
  .catch((err) => {console.log("error occured");});
  res.send("success");
});
  
//here i am testing some mongoose logic
var User = require("../models/user");

router.post("/test", (req, res) => {
  var obj = new User({
    name : req.body.name,
    likes : req.body.likes
  });
  obj.save()
  .then((data) => { res.send("success on saving"); })
  .catch((err) => { console.log("error on saving"); });
});

router.get("/test", (req, res) => {
  User.find({})
  .then((data) => { res.send(data); })
  .catch((err) => { console.log("error occur on finding data"); })
})

router.post("/test/:id", (req, res) => {
  User.findOne({_id : req.params.id})
  .then((data) => {
    data.comment.push(req.body.comment);
    res.send(data);
    data.save();
  })
  .catch((err) => { console.log("error"); });  
});


module.exports = router;
