const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, World! Neeraj Here!!!! The date today is ${today.getDate()}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);