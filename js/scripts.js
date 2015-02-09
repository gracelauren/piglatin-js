var isVowel = function(letter) {
  if (/[aeiouy]/.test(letter)) {
    return true;
  } else {
    return false;
  }
};

var piggify = function(word) {

  word = word.toLowerCase();

  for(var i=0; i<word.length; i+=1) {
    if ( !isVowel(word[0]) || (word[0] === "y" && i === 0) ) {
      if (word[0] === "q" && word[1] === "u") {
        word = word.slice(2) + "qu";
      } else {
        var firstLetter = word[0];
        word = word.slice(1) + firstLetter;
      }
    } else {
      return word + "ay"
    }
  }

};

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {

    $("#result p").empty();
    var phrase = $("input#word").val();
    var words = phrase.split(" ");

    words.forEach(function(word) {
      var pigWord = piggify(word) + " ";
      $("#result p").append(pigWord);
    });

    event.preventDefault();

  });
});

// todo: punctuation, capitalization, regexp
