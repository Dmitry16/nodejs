let fs = require('fs');

fs.readFile('zzz', function(err, data){
  if (err && err.code === 'ENOENT') {
    let subStr = err.message.substring(err.message.search(',')+1);
    let errStr = err.message.replace(subStr, '');
    console.error(errStr.replace('ENOENT', `Error when${subStr}`).replace(',',''));
  }
  if (data)
    console.log(data.toString());
});