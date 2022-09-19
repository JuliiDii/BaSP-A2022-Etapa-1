//Exercise 4-a//
var numer= Math.random();
if (numer <= 0,5){
    alert('4-a: '+numer + 'Greater than 0,5' );
}else{
    alert('4-a: ' +numer + 'Lower than 0,5');
}
//Exercise 4-b//
var age= 25;
if (age<2){
    console.log('4-b: '+age + 'Is a baby');
} else if ((age>2)&&(age<12)){
    console.log('4-b: '+age + 'Is a boy');
}else if ((age>13)&&(age<19)){
    console.log('4-b: '+age + 'Is a teenager');
}else if((age>20)&&(age<30)){
    console.log('4-b: '+age + 'Is young');
}else if((age>31)&&(age<60)){
    console.log('4-b: '+age + 'Is an adult');
}else if((age>61)&&(age<75)){
    console.log('4-b: '+age + 'Is an old adult');
}else if(age<75){
    console.log('4-b: '+age + 'Is an elderly');
}

