var countWords = require('./count_words.js').countWords;
var prompt = require('prompt');
var moment = require('moment');
prompt.start();

prompt.get('userText', function(err, results) {
  var result = countWords("Hello, my name is Anna.  How are you today?");
  console.log(result);
});
