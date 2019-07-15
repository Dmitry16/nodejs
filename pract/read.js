let fs = require('fs');

fs.readFile(__filename, function(err, data){
  if (err) {
    console.error(err)
  }
  console.log(data.toString())
})