var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Veda Amit with Sanket and Shankar and Shubhya!');
}).listen(8080);
