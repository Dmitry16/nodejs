let translations = require('./translations');

function User(name) {

  this.name = name;
  console.log('a new user ' + this.name + ' is created');
}

User.prototype.greets = function(user, locale) {

  console.log(`${translations[locale].Hello}, ${user.name}!`);
}

User.prototype.greetsInAllLanguages = function(user, translations) {

  for (let locale in translations) {
    console.log(`${translations[locale].Hello}, ${user.name}`);
  }
}

console.log('user/index.js was required');

module.exports = User;

// console.log(module.exports);