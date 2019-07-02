let EE = require('events').EventEmitter;
let db = new EE();

function Request() {
  let self = this;

  this.bigData = new Array(1e6).join('q');

  this.send = function(data) {
    console.log('datttaaa:::', data);
  }

  this.onError = function() {
    self.send('we got a problem...');
  }

  function onData(info) {
    self.send(info);
  };

  this.end = function() {
    db.removeListener('data', onData);
  }

  db.on('data', onData);
}

setInterval(function() {
  let request = new Request();
  //...
  request.end();
  console.log('memoryUsage:::', process.memoryUsage().heapUsed)
  // console.log('db::::', db);
}, 200);
