// comentario simple
/* comentarios extensos .... */ 

// Declaración de variables
var edad;

// Inicialización de variables
edad = 18;

// Se pueden declarar e inicializar variables en una sola línea
var num = 3;
num = 5;
console.log(num);

let casa = "lugar favorito";
casa = "+ChicasTec";
console.log(casa);

const lista = 100;
// lista = 120; error las variables de tipo const no pueden cambiar su valor
console.log(lista);

// TIPOS DE DATOS PRIMITIVOS
// Undefined: las varoables estan declaradas pero no inicializadas con ningun valor
var nota_ciencias;
console.log(typeof(nota_ciencias));

// Boolean
var luz = true; //false
console.log(typeof(luz));

// Number
var altura = 1.65;
console.log(typeof(altura));

// String
var parrafo = 'Lorem ipsum, dolor sit amet "hola" consectetur adipisicing elit.';
console.log(parrafo);
console.log(typeof (parrafo));

var trabalengua = "Como quieres que te quiera" + "\nsi el que quiero que me quiera" + "\nno me quiere como quiero que me quiera";
console.log(trabalengua);

// var nombre  = "Cinthia";
// var apellido = "Maldonado";
// console.log(nombre + apellido);

var nombreabuelo = "Juan"
var nombreabuela = "María"
console.log(
  "El nombre de tu abuelo es: " + nombreabuelo + "\nEl nombre de tu abuela es: " + nombreabuela
);

var precio = 32;
var promocion = 1;
console.log("La promoción: "+ promocion + " de producto, tiene un precio de: "+ precio);


var a = 3;
var b = 5;
var respuesta = a + b;
console.log(respuesta);
console.log(a+b);

var c = 8;
console.log(c-4);

var d = 2;
console.log(d*300);

var e = 10;
console.log(e/3);

var f = 8;
console.log(f%2);

var g = 13;
console.log(13%2);

var p = 5;
console.log(p**4);

console.log(8=="8");
console.log(8==="8");
console.log(8!="8");
console.log(8!=="8");

console.log(4<3);
console.log(4<=4);
console.log(10>4);
console.log(10>=8);

//operador lógico: "&&"=AND "||"=OR "!"=NOT 

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(!true);

console.log(4>3 && 3>2);
var z = 8;
var y = 100;
console.log(!(z>20 && y=="100"));
console.log(z>20 || y=="100");
var x = true;
console.log(!x);

var nombre = "Damaris";
console.log(`Hola: ${nombre}`);
console.log(`Los valores de z es ${z},y es ${y} y el de x es ${x}`);

// var text = "Hola\tMundo";
// console.log(text);

// var text = "Hola\rMundo";
// console.log(text);

// var text = "Hola\fMundo";
// console.log(text);

var txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, veritatis sapiente?"

console.log(txt.length);
console.log(txt[txt.length-1]);

console.log(txt.toLowerCase());
console.log(txt.toUpperCase());


