var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var assert = require('assert');

var url = "mongodb://localhost:27017/EmployeeDB";

/* GET Employees listing. */
router.get('/employees', function(req, res, next) {
	MongoClient.connect(url, function(err,db){
		console.log("connected to mongodb......");
		db.collection("employeeDetails").find().toArray(function(e, results){
		    if (e) return next(e)
 		       res.json(results);
		});
		db.close();
	});
});

module.exports = router;

/*
db.employeeDetails.insert({"name":"Raj","city":"Mumbai"});
db.employeeDetails.find();*/