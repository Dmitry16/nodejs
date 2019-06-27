// module.exports === exports === this
let db = require('./db');
db.connect();

let User = require('./user');
// let translations = require('./user/translations');

function run() {
  let vasya = new User('Vasya');
  let petya = new User('Petya');

  petya.greets(vasya, 'sp');
  // petya.greetsInAllLanguages(vasya, translations);

  // console.log(db.getPhrase("Run successful!"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
