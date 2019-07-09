let http = require('http');
let server = new http.Server();

server.listen(1337, '127.0.0.1');
console.log('Server running at 127.0.0.1:1337')

let count = 0;
//redefining the emit method
let emit = server.emit;
server.emit = function(event) {
  console.log(event);
  emit.apply(server, arguments);
}

server.on('request', function(req, res) {
  res.end('Count: ' + ++count);
});

