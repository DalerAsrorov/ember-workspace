console.log('regex practice running...');

/* Probme 1 */
// 1. car and cat
// 2. pop and prop
// 3. ferret, ferry, and ferrari
// 4. Any word ending in ious
// 5. A whitespace character followed by a dot, comma, colon, or semicolon
// 6. A word longer than six letters
// 7. A word without the letter e

// 1.
var testStr1 = 'Car are so different from cats because there is only one cat and not two cats, but one car.';
var regex1 = /\b(car|cat)\b/gi;
console.log(testStr1.match(regex1));

// 2.
var testStr2 = 'Pop music is very populars, pos and dogs, props and pops. One prop to you and two pros to me.';
var regex2 = /(pop|prop)\b/gi;
console.log(testStr2.match(regex2));
// 3.
// same thing as part 1 & 2 but with different words

// 4.
var testStr4 = 'Glorious, various attempts to make a sandwich but is it delicious?';
var regex4 = /\b\w+(ious)\b/g;
console.log(testStr4.match(regex4));

// 5.
var testStr5 = ' . is just a dot but , is a comma, and d : is a colon :, but it\' not exactly ; because programmers love ;.';
var regex5 = /\s+[(.,;:)]/g;
console.log(testStr5.match(regex5)); // [" .", " ,", " :", " :", " ;", " ;"]

// 6.
var testStr6 = 'Daler 123456 is a nice guy. He loves eating chocolate and programming and tries to combine both activities to not to get fat.';
var regex6 = /\b\w{6,}\b/gi; // note: in w{#,}, placing comma translates it to w{#,infinity}
console.log(testStr6.match(regex6));

// 7.
var testStr7 = 'Daler 123456 is a nice guy. He loves eating chocolate and programming and tries to combine both activities to not to get fat.';
var regex7 = /\b\w+[^e]+\b/gi;
console.log(testStr7.match(regex7));


/* PART 2 */

function fromSingleToDoubleQuote(text) {
  var regex = /()/;
  var replacedText = text.replace(regex);
};

var randomText = "We aren't 'Hello' type of people who're always 'afraid' of going back to 'school' and learn how to use 'double' quotes" ;
fromSingleToDoubleQuote(randomText);
