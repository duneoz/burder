    
var express = require("express");

var router = express.Router();

var burders = require("../models/burder.js");

router.get("/", function(req,res){
	res.redirect("burders")
});

router.get("/burders", function(req,res){
	burders.selectAll(function(data){
		var hbsObject = {
			burders: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burders/create", function(req,res){
	burders.insertOne([
		"burder_name"
		],[
			req.body.burder_name
			], function(data){
				res.redirect("/burders");
			});
});

router.put("/burders/update/:id", function(req,res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burders.updateOne({
		"devoured": req.body.devoured
	}, condition, function(data){
		res.redirect("/burders")
	});
});

module.exports = router;