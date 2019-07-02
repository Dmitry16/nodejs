// module.exports === exports === this
let db = require('db');
db.connect();

let log = require('logger')(module);

let User = require('./user');
// let translations = require('./user/translations');

function run(locale) {
  let vasya = new User('Vasya');
  let petya = new User('Petya');

  petya.greets(vasya, locale);
  // petya.greetsInAllLanguages(vasya, translations);

  log(db.getPhrase('Run successful!', locale));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
