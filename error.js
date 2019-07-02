let util = require('util');
let phrases = { 
  Hello: 'Привет',
  world: 'мир'
};

function PhraseError(message, phrase) {
  this.message = message;
  this.phrase = phrase;
  Error.captureStackTrace(this, PhraseError);
};
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';

function HttpError(status, message) {
  this.status = status;
  this.message = message;
  Error.captureStackTrace(this, HttpError);
};
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function getPhrase(phrase) {
  if (!phrases[phrase]) {
    throw new PhraseError(`There is no such a phrase (${phrase})`);
  }
  // console.log('phrases::', phrases)
  return phrases[phrase];
}

function makePage(url) {
  if (url !== 'index.html') {
    throw new HttpError(404, 'There is no such a page :(')
  }
  return util.format('%s, %s!', getPhrase('Hell'), getPhrase('world'));
}

try {
  let page = makePage('index.html');
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error('Errorrrr: %s\nmessage: %s\nstack: %s', e.name, e.message, e.stack);
  }
}