var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
console.log('Server running at http://' + process.env.IP + ':' + process.env.PORT + '/');
