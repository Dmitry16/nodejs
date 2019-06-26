let translations = require('./translations');

function User(name) {
  this.name = name;

  console.log('a new user ' + this.name + ' is created');
}

User.prototype.greets = function(user, locale) {

  console.log(`${translations[locale].Hello}, ${user.name}!`);
}

exports.User = User;