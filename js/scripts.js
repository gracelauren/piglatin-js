var isVowel = function(letter) {
  if (/[aeiouy]/.test(letter)) {
    return true;
  } else {
    return false;
  }
};

var piggify = function(phrase) {

  var words = phrase.split(" ");
  var newPhrase = "";

  words.forEach(function(word) {
    word = word.toLowerCase();

    var punctuation = "";
    if (/[,.!?]/.test(word)) {
      punctuation = word.match(/[,.!?]/g).join("");
      word = word.replace(/[,.?!]/g,"");
    }

    for(var i=0; i<word.length; i++) {
      if ( !isVowel(word[0]) || (word[0] === "y" && i === 0) || (word[0] === "u" && word[word.length - 1] === "q")) {
          var firstLetter = word[0];
          word = word.slice(1) + firstLetter;
        }
      }

    newPhrase = newPhrase + word + "ay" + punctuation + " ";

    debugger;

  });

  newPhrase = newPhrase.slice(0, newPhrase.length - 1);
  return newPhrase;

};


$(document).ready(function() {
  $("form#piglatin").submit(function(event) {

    $("#result p").empty();
    var phrase = $("input#word").val();
    var pigPhrase = piggify(phrase);
      $("#result p").text(pigPhrase);
      event.preventDefault();
    });
  });

// todo: punctuation, capitalization, regexp
