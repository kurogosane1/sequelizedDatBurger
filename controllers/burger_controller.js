//requiring files
var burger = require("../models/burgerdat.js");
var express = require("express");
var app = express();

var db = require("../models");

module.exports = function(app){

  app.get("/", function(req, res) {
    db.burgers.findAll().then(function(result){
      res.render("index", { burgerList: result });
    });
  });

  // app.get("/iam", function(req, res){
  //   res.send(204);
  // });
  
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


};
