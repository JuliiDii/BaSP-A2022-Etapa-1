//Exercise 2a//
var text= 'javascript'
console.log('2-a javascript: ' +text.toUpperCase());
//Exercise 2b//
var letters= 'learn javascript';
console.log('2-b first word: '+letters.substring(-1,5));
//Exercise 2c//
var phrase='javascript in vsc';
console.log('2-c new word: '+phrase.substring(14,17));
//Exercise 2d//
var trackgenix= 'trackgenix';
var newTrackgenix= (trackgenix.substring(0,1).toUpperCase() + trackgenix.substring(1,10). toLowerCase());
console.log ('2-d word: ' +newTrackgenix);
//Exercise 2e//
var words= 'hello world';
var spaceWords= (words.indexOf(' '));
console.log ('2-e space: ' +spaceWords);
//Exercise 2f//
var twoWords= 'learning javascript';
var exercisef= (twoWords.substring(0,1).toUpperCase() + twoWords.substring(1,twoWords.indexOf(' ')). toLowerCase() +' '+ twoWords.substring(9,10).toUpperCase() + twoWords.substring(10,19). toLowerCase());
console.log('2-f: ' +exercisef)

