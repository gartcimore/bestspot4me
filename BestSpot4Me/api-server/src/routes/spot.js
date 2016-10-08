var express     = require('express');
var router      = express.Router();
var mongoose    = require('mongoose');
var timestamps  = require('mongoose-timestamp');
var bcrypt      = require('bcrypt');
var jwt         = require('jsonwebtoken');
var expressJwt  = require('express-jwt');
var fs          = require('fs');
var path        = require('path');
var Cookies     = require( "cookies" );


var spotSchema = mongoose.Schema({
  name: String,
  description: String,
  body:  String,
  activity: [{id: String, available: Boolean}],
  location: String,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var commentSchema = mongoose.Schema({
  spot: String,
  user: String,
  body:  String,
  rating: Number
});

spotSchema.plugin(timestamps);

var Spot = mongoose.model('Spot', spotSchema);

var Comment = mongoose.model('Comment', commentSchema);


router.get('/spot/', function(req, res) {

  Spot
    .find({})
    .select({})
    .limit(100)
    .exec(function(err, spots) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'Could not retrieve spots'
        });
      }
      res.json(spots);
    });

});

router.get('/spot/:id', function(req, res) {

  Spot
    .findOne({
      _id:req.params.id

    })
    .select('name description activity location')
    .limit(10)
    .exec(function(err, spots) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'Could not retrieve spot '+req.params.id
        });
      }
      res.json(spots);
    });

});

router.post('/spot/', function(req, res) {
   var body = req.body;
   var spot = new Spot({
      name: body.name.trim(),
      description: body.description.trim(),
      activity: body.activity,
      location: body.location.trim()
    });

      //res.json("POST SPOT with spot:"+spot);

      spot.save(function(err) {
      if (err) throw err;

      res.json({
        spot: spot
      });
    });

});


router.get('/spot/:id/comment', function(req, res) {
   Comment
    .find({spot:req.params.id})
    .select('user body rating')
    .limit(100)
    .exec(function(err, spots) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'Could not retrieve comments'
        });
      }
      res.json(spots);
    });

});

router.post('/spot/:id/comment', function(req, res) {
  if (!req.user._id) {
      return res.status(404).json({
        message: 'user token does not exists'
      });
    }
    process.stdout.write("user id "+req.user._id);
    process.stdout.write("spot id "+req.params.id);
    var body = req.body;
    var comment = new Comment({
      spot: req.params.id,
      user: req.user._id,
      body: body.body.trim(),
      rating: body.rating
    });

      //res.json("POST comment to spot "+req.params.id+" with comment:"+comment);

    comment.save(function(err, comment) {
      if (err) throw err;

      res.json({
        comment: comment
      });
    });

});


router.get('/spot/:id/activity', function(req, res) {
      res.json("GET activities for spot id "+req.params.id);

});


module.exports = router;
