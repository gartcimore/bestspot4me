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


var activitySchema = mongoose.Schema({
  name: {type: String, trim:true},
  description: {type: String, trim:true},
  requirements: [{id: String, mandatory: Boolean}],
  parameters: [ {level: Number, params: [mongoose.Schema.Types.Mixed]} ],
  type: [String]
});


var Activity = mongoose.model('Activity', activitySchema);

router.get('/activity/', function(req, res) {

  Activity
    .find({})
    .select({})
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

router.get('/activity/:id', function(req, res) {

  Activity
    .findOne({
      _id:req.params.id

    })
    .select({})
    .limit(100)
    .exec(function(err, activities) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          error: 'Could not retrieve activity '+req.params.id
        });
      }
      res.json(activities);
    });

});

router.post('/activity/', function(req, res) {
   var body = req.body;
   var activity = new Activity({
      name: body.name,
      description: body.description,
      requirements: body.requirements,
      parameters: body.parameters,
      type: body.type
    });

      //res.json("POST SPOT with spot:"+spot);

      activity.save(function(err) {
      if (err) throw err;

      res.json({
        activity: activity
      });
    });

});

module.exports = router;
