var http = require('http');
httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('qwertyuiopqwertyuiopqwertyuiopqwertyuioqwertyuiopqwertyuiopqwertyuiopqwertyuiop');
});
httpServer.listen(8080, "127.0.0.1");
console.log('http server listening on 127.0.0.0:8080');
