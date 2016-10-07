var debug       = require('debug')('websocket-server:server');
var http        = require('http');
var jwt         = require('jsonwebtoken');
var mongoose    = require('mongoose');
var url         = require('url');

/**
 * Get port from environment and store in Express.
 */



/**
 * Create HTTP server.
 */

var server = http.createServer(function(request, response) {});
///////////////////
// Realtime Communication
///////////////////
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ 
    server: server,
    verifyClient: function (info, cb) {
        var question = url.parse(info.req.url, true, true);
        var token = question.query.token;
        console.log("Token received: " + token);
        try {
          console.log("info.req.headers : "+ JSON.stringify(info.req.headers));
        } catch (e) {
          console.log("error " + e);
        }
        if (!token)
            cb(false, 401, 'Unauthorized')
        else {
          console.log(token);
            jwt.verify(token, process.env.JWT_TOKEN, function (err, decoded) {
                if (err) {
                    cb(false, 401, 'Unauthorized')
                } else {
                    info.req.user = decoded //[1]
                    cb(true)
                }
            })
        }
    }
});


wss.on('connection', function connection(ws) {
  var user = ws.upgradeReq.user;
  ws.send('Welcome! ' + user.name);
  console.log("User Connected: " + user.name);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});

///////////////////
//
///////////////////

try {
  mongoose.connect('mongodb://'+process.env.DB_URL);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    debug('DB connected!');
  });
} catch (e) {
  console.error('connection DB Failed');
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(normalizePort(process.env.PORT));
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
