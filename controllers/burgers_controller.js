var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

//Setup Routes

// Index Redirect
router.get('/', function (req, res) 
{
  res.redirect('/index');
});

// Index Page 
router.get('/index', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsOb = { burgers: data };
    //console.log(hbsOb);
    res.render('index', hbsOb);
  });
});

// Create a New Burger
router.post('/burger/create', function (req, res) 
{
  burger.insertOne(req.body.burger_name, function() 
  {
    res.redirect('/index');
  });
});

// Devour a Burger
router.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

// Export routes for server.js to use.
module.exports = router;
