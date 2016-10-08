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

if (!process.env.JWT_TOKEN) {
  console.error('ERROR!: Please set JWT_SECRET before running the app. \n run: export JWT_SECRET=<some secret string> to set JWTSecret. ')
  process.exit();
}

var activitySchema = mongoose.Schema({
  name: String,
  description: String,
  requirements: [{id: String, mandatory: Boolean}]
});

//activitySchema.plugin(timestamps);

var Activity = mongoose.model('Activity', activitySchema);


router.get('/activity/', function(req, res) {
      res.json("activity");

});

module.exports = router;
