'use strict'; /* Hacer estricta la sintaxis */

var txt = 'jeqs';

console.log(txt);

var my_object = new Object();

my_object = {
	firtName: 'Jose',
	lastName: 'Quispe',
	phone: 6658990
};

console.log(my_object);

var key;
for (key in my_object){
	console.log(my_object[key]);
}

function test(){
	console.log ('Ejecutando');
}

test();

// Funcion anonima
var bye_bye = function() {
	console.log('Texto fds');
}

bye_bye();

/* usuar compara == comparacion con corrección de tipo */

/* con comparación extricta */

console.log(("" !== 0));
console.log("" != 0);

console.log("Ejercicio");

var d, minutes, time, hours, message;

d =  new Date();

hours = d.getHours();
minutes = d.getMinutes();

alert("la hora es: " + hours);
alert("los minutos es: " + minutes);

alert("el tipo de dato de los minutos: " + typeof(minutes.toString()));
alert("el tipo de dato de los horas: " + typeof(hours));

