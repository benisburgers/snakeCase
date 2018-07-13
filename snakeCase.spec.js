var snakeCase = require('./snakeCase')

describe('snakeCase', function() {
  it('works with simple lowercased phrases', function() {
    expect(snakeCase('hello world')).toEqual('hello_world');
    /*Replaec space with underline*/
  });
  it('works with Caps and punctuation', function() {
    expect(snakeCase('Hello, World???')).toEqual('hello_world');
    /*Replace coma and space with underline. Make sure there is no more than one underline*/
  });
  it('works with longer phrases', function() {
    expect(snakeCase('This is the song that never ends....')).toEqual('this_is_the_song_that_never_ends');
    /*Replace space with _ What about ...?*/
  });
  it('works with camel case', function() {
    expect(snakeCase('snakeCase')).toEqual('snake_case');
    /*Insert underline before capitalized letters*/
  });
  it('works with kebab case', function() {
    expect(snakeCase('snake-case')).toEqual('snake_case'); /*Replace - with _ */
  });
  it('works with WTF case', function() {
    expect(snakeCase('SnAkE..CaSe..Is..AwEsOmE')).toEqual('snake_case_is_awesome');
  });

});
