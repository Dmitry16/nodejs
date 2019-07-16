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
    if (fileContent)
      console.log('zzz::', fileContent.length);

    if (fileContent && !res.write(fileContent)) {

      file.removeListener('readable', write);

      res.once('drain', function() {
        file.on('readable', write);
        write();
      });
    }
  }
}