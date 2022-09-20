//Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.//
var numer= Math.random();
if (numer <= 0,5){
    alert('4-a alert: '+numer + 'Greater than 0,5' );
}else{
    alert('4-a alert: ' +numer + 'Lower than 0,5');
}
//Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//Bebe si la edad es menor a 2 años;
//Niño si la edad es entre 2 y 12 años;
//Adolescente entre 13 y 19 años;
//Joven entre 20 y 30 años;
//Adulto entre 31 y 60 años;
//Adulto mayor entre 61 y 75 años;
//Anciano si es mayor a 75 años.//

var age= 25;
if (age<2){
    console.log('4-b Is a baby: '+age + 'Is a baby');
} else if ((age>2)&&(age<12)){
    console.log('4-b Is a boy: '+age + 'Is a boy');
}else if ((age>13)&&(age<19)){
    console.log('4-b Is a teenanger: '+age + 'Is a teenager');
}else if((age>20)&&(age<30)){
    console.log('4-b Is young: '+age + 'Is young');
}else if((age>31)&&(age<60)){
    console.log('4-b Is an adult: '+age + 'Is an adult');
}else if((age>61)&&(age<75)){
    console.log('4-b Is an old adult: '+age + 'Is an old adult');
}else if (age<75){
    console.log('4-b Is an elderly: '+age + 'Is an elderly');
}

