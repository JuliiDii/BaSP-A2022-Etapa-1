//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).//
var text= 'javascript'
console.log('2-a javascript: ' +text.toUpperCase());
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).//
var letters= 'learn javascript';
console.log('2-b first word: '+letters.substring(-1,5));
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).//
var phrase='javascript in vsc';
console.log('2-c new word: '+phrase.substring(14,17));
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).//
var trackgenix= 'trackgenix';
var newTrackgenix= (trackgenix.substring(0,1).toUpperCase() + trackgenix.substring(1,10). toLowerCase());
console.log ('2-d word: ' +newTrackgenix);
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).//
var words= 'hello world';
var spaceWords= (words.indexOf(' '));
console.log ('2-e space: ' +spaceWords);
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).//
var twoWords= 'learning javascript';
var exercisef= (twoWords.substring(0,1).toUpperCase() + twoWords.substring(1,twoWords.indexOf(' ')). toLowerCase() +' '+ twoWords.substring(9,10).toUpperCase() + twoWords.substring(10,19). toLowerCase());
console.log('2-f two words: ' +exercisef)

