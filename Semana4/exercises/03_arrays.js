//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).//
var meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('3-a months: ' +meses [4] +meses[10]);
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).//
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.sort();
console.log('3-b months in order: ' +meses);
//Agregar un elemento al principio y al final del array (utilizar unshift y push).//
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.unshift('first');
meses.push('last');
console.log('3-c add words: ' +meses);
//Quitar un elemento del principio y del final del array (utilizar shift y pop)//
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.shift('Enero');
meses.pop('Diciembre');
console.log('3-d take off words: ' +meses);
//Invertir el orden del array (utilizar reverse).//
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log('3-e months in reverse: '+meses);
//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).//
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var join= meses.join('-');
console.log('3-f hypen: '+join);
//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).//
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2= meses.slice(4,11);
console.log('3-g may to november: '+meses2);




