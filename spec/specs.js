describe('isVowel', function() {

  it('returns true if the letter is a vowel', function() {
    expect(isVowel("i")).to.equal(true);
  });

  it('returns false if the letter is not a vowel', function() {
    expect(isVowel("k")).to.equal(false);
  });

});

describe('piggify', function() {

  it('adds ay to end of words that start with a vowel', function() {
    expect(piggify("epicodus")).to.equal("epicodusay");
  });

  it('takes off the first letter of words that start with consonants and adds it to the end with ay after', function() {
    expect(piggify("food")).to.equal("oodfay");
  });

  it('takes off the first consonats and add to the end and add ay to the end', function() {
    expect(piggify("train")).to.equal("aintray");
  });

  it('moves qu to the end if found', function() {
    expect(piggify("squeal")).to.equal("ealsquay");
  });

  it('treats y as consonant if first letter', function() {
    expect(piggify("yawn")).to.equal("awnyay");
  });

  it('treats y as vowel if not first letter', function() {
    expect(piggify("lyric")).to.equal("yriclay");
  });

  it('works for sentences not just words', function() {
    expect(piggify("How are you")).to.equal("owhay areay ouyay");
  });

  it('works for sentences not just with punctuation', function() {
    expect(piggify("How are you??")).to.equal("owhay areay ouyay??");
  });

});
