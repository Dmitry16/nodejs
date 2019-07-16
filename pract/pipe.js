let http = require('http')
let fs = require('fs')

new http.Server(function(req, res) {
  if (req.url === '/big.html') {
    let file = new fs.ReadStream('/Users/macbookpro/Downloads/sarmats.html');
    sendFile(file, res);
  }
}).listen(1313);

console.log('server is listening on port 1313')

function sendFile(file, res) {
  
  file.on('readable', write)
  
  function write() {
    let fileContent = file.read();
    console.log('zzz::', fileContent);
    if (fileContent)
      res.write(fileContent);
  }
}