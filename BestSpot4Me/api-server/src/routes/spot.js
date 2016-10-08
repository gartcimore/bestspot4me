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
  Spot
    .find({spot:req.params.id})
    .select('activity')
    .limit(100)
    .exec(function(err, activities) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'Could not retrieve activities'
        });
      }
      res.json(activities);
    });
});


router.post('/spot/:id/activity', function(req, res) {
  Spot
  .findOne({_id:req.params.id})
  .select('activity')
  .exec(function(err, spot) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: 'Could not retrieve activities from spot'+req.params.id
      });
    }
    process.stdout.write("new activities are "+req.body.activity);

    if(!spot) {
      process.stdout.write("spot not found");
      return res.status(404).json({
        message: 'does not exists: spot '+req.params.id});
    }
    process.stdout.write("previous activities were "+spot.activity);
    spot.activity = req.body.activity
    spot.save(function(err) {
      if (err) throw err;

      res.json({
        spot: spot
      });
    });

  });
});


module.exports = router;
