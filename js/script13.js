let nombre = 'Ana';
let me = 'Hola, '+ nombre + '¡Bienvenida a JavaScript.';
console.log(me);

let nombre2 = 'Lucia';
let me2 = `Hola, ${nombre2} ¡Bienvenida a JavaScript!`;
console.log(me2);

var frase = `Hola: \namiga`;
console.log(frase);

var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
console.log(txt.length);

var ultimo =  "Lorem";
console.log(ultimo[ultimo.length-1]);

//**recordar como crear variables del tipo string
var lenguaje = "Python";
var ciudad = "Lima";
var mensaje = "¡Bienvenidos a la mi sitio web!"

const single = 'comillas simple';
const double = "comillas dobles";
const backticks = `backticks`; //comillas invertidas

console.log(single);
console.log(double);
console.log(backticks);


//**Seleccionar una letra de los strings
var animal = "gato"; //comentar a las estudiantes que el orden es: primer letra ubicación o indice 0, segunda letra ubicación 1, etc.
console.log(animal.charAt(2)) // devuelve t en la consola del navegador
console.log(animal[1]) // devuelve a en la consola del navegador



//**Comillas o tildes invertidas:
const saludo = 'Mundo';
//assert permite que salga un mensaje de error si ambas frases son diferentes
//en la comparación. Si son iguales no muestra mensaje en consola.
//atención con el uso de: ${saludo} para poder utilizar la variable saludo.
//cambiar el texto dentro de 'Hola Mundo' para mostrar el error a las estudiantes
console.assert(`Hola ${saludo}` === 'Hola Mundo'); 

//**Caracteres especiales
var frase1 =  `Hola:
                amiga 1`;
alert(frase1);
//el \n genera un salto de linea
var frase2 =  `Hola:\namiga 2`;
alert(frase2);

//UTILIZANDO String.length
var letras = "abcd";
var cant_let = letras.length;
alert(cant_let);

//Accediendo al último caracter
var ultimo = letras[letras.length - 1];
//variamos el uso de alert y console para que se acostumbre a ambos
console.log(ultimo);  //saldra d

//convertir minusculas a mayusculas
var minus = "peru";
alert(minus.toUpperCase()); //pasa a mayuscula
//ejemplo con comprobación usando assert 
console.assert('Interface'.toUpperCase() === 'INTERFACE');
console.assert('Interface'.toLowerCase() === 'interface');
console.assert('Interface'[0].toLowerCase() === 'i');

//substrings:
str = 'primero segundo tercero';
texto_1 = str.indexOf('primero');
alert(texto_1);
console.assert(str.indexOf('primero') === 0);
console.assert(str.indexOf('primero') === -1); //saldra error porque seria -1 si no existiera la palabra: primero
console.assert(str.indexOf('tercero') === 1); //saldra error debe ser: segundo
