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

  /*
  this is the 'bad' version of the function write because it writes all the big data
  the res obj. so if the client has slow connection we can face the RAM saturation
  holding all the big data in the res obj to be consumed
    
  function write() {
    let fileContent = file.read();
    console.log('zzz::', fileContent.length);
    if (fileContent)
      res.write(fileContent);
  }
  */

  /*
  this is the good one :)
  by removeListener command we stop writing to the buffer of the res object
  if the data is not consumed by client (e.g. when connection is very slow)
  this way we prevent the big file data been hang in the RAM 
  */
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