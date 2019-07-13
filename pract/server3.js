let http = require('http');
let url = require('url');

let server = new http.Server(function(req, res) {
  console.log( req.headers );
  debugger;

  let urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
    res.statusCode = 200;
    res.end(urlParsed.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found :(');
  }
});

server.listen(1337, '127.0.0.1');
console.log('server zzzzzz')