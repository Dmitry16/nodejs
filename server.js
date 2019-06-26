let user = require('./user');
let translations = require('./user/translations');

let vasya = new user.User('Vasya');
let petya = new user.User('Petya');

petya.greets(vasya, 'sp');
// petya.greetsInAllLanguages(vasya, translations);