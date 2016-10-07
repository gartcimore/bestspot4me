
var fs = require('fs');
var path = require('path');

var postmark = require("postmark")(process.env.POSTMARK_TOKEN);
var async = require('async');
var crypto = require('crypto');



if (!process.env.POSTMARK_FROM) {
  console.log('Please set: FROM_EMAIL environment variable. This is a validated email address to send emails from to other users for email verification, reset pwd etc')
  process.exit();
}

function sendWelcomeEmail(user, host, finalCB) {
  host = host.indexOf('localhost') >= 0 ? 'http://' + host : 'https://' + host;

  async.waterfall([
      function(done) {
        crypto.randomBytes(15, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        user.verifyEmailToken = token;
        user.verifyEmailTokenExpires = Date.now() + 3600000 * 24; // 24 hours

        user.save(function(err) {
          done(err, user);
        });
      },
      function(user, done) {
        postmark.sendEmailWithTemplate({
          "From": process.env.POSTMARK_FROM,
          "To": user.email,
          "TemplateId": 924542,
          "TemplateModel": {
            "product_name": "BestSpot4me",
            "name": user.name,
            "action_url": host + '/validateEmail/' + user.verifyEmailToken,
            "username": user.username,
            "sender_name": "BestSpot4Me Team",
            "product_address_line1": "",
            "product_address_line2": ""
          }
        }, done);
      }
    ],
    function(err) {
      if (err) {
        console.log('Could not send welcome email to: ' + user.email);
        console.error(err);
        if (finalCB) {
          finalCB({
            message: 'Could not send welcome email to: ' + user.email
          });
        }
      } else {
        if (finalCB) {
          finalCB();
        }
      }
    });

}

module.exports = {
  sendWelcomeEmail: sendWelcomeEmail
};