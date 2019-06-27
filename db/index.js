let phrases;

exports.connect = function() {
  console.log('db connected!)))')
  phrases = require('./translations');
}

exports.getPhrase = function(phrase, locale) {

  if (!phrases[locale][phrase]) {
    throw new Error('There is no such a phrase: ', phrase);
  }
  // console.log('phrases::', phrases)

  return phrases[locale][phrase];
}