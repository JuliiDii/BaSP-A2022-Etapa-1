//Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.//
var animals =['cat', 'dog', 'pig', 'cow', 'chicken'];
for (i = 0 ; i <=4 ; i ++) {
   alert('5-a animals: ' +animals[i])
}
//Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.//
for ( i = 0; i < animals.length; i++) {
    var cuteAnimals = animals[i].substring(0,1).toUpperCase() + animals[i].substring(1).toLowerCase();
    alert('5-b cuteAnimals: ' +cuteAnimals);
}
//Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.//
for (i = 0 ; i < animals.length; i ++){
    var sentence=[];
    sentence.push(animals);
    alert('5-c sentence: ' +sentence)
}
//Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).//
for (i = 0 ; i <10 ; i ++){
var empty =[];
empty.push(i);
console.log('5-d empty: ' +empty);1
}