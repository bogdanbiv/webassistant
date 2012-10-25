
var express = require('express'),
  expressApp = express(),
  server = require('http').createServer(expressApp);

// The server-side store syncs data over Socket.IO
var store = require('derby').createStore({listen: server});

expressApp.use(express.static(__dirname + '/public'))
  // The store creates models for incoming requests
  .use(store.modelMiddleware())
  // App routes create an Express middleware
  .use(require('./hello').router());

server.listen(process.env.PORT, process.env.IP);
console.log(process.env.IP + ":" + process.env.PORT)
