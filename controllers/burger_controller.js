//requiring files
var burger = require("../models/burgerdat.js");
var express = require("express");
var app = express();

var db=require("../models");

// //creating routes so for the right function to be called
// module.exports = function (app) {
//   app.get("/", function (req, res) {
//     db.burgers.findAll().then(function(result){
//       res.render("index", {burgerList: result});
//     })
//     // burger("all", res);
//   });

//   app.post("/", function (req, res) {
//     db.burgers.create({burger_name: req.body.burger_name}).then(function(){
//       res.redirect('/');
//     })
//     // burger("insert", res, req.body.burger_name);
//   });

//   app.put("/", function (req, res) {
//     db.burgers.update({devoured: true},{
//       where :{
//         id: req.body.id
//       }
//     }).then(function(){
//       res.redirect("/")
//     })
//     // burger("update", res, req.body.id);
//   });
// }
module.exports = function(app){

  app.get("/", function(req, res) {
    db.burgers.findAll().then(function(result){
      res.render("index", { burgerList: result });
    });
  });

  app.get("/favicon.ico", function(req, res){
    res.send(204);
  });
  
  app.post("/", function(req, res) {
    db.burgers.create({burger_name: req.body.burger_name}).then(function(){
      res.redirect("/");
    });
  });

  app.put("/", function(req, res) {
    db.burgers.update({devoured: true}, {
      where:{
        id: req.body.id
      }
    }).then(function(){
      res.redirect("/");
    });
  });


}
