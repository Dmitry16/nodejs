let http = require('http')
let fs = require('fs')

http.createServer(function(req, res) {
  if (req.url === '/big.html') {
    let file = new fs.ReadStream('./assets/big.html');
    sendFile(file, res);
  }
}).listen(3000);

console.log('server is listening on port 3000')

function sendFile(file, res) {
  let fileContent = file.read();
  file.on('readable', write)

  function write() {
    res.write(fileContent);
  }
}