// Condicionales - if...else

var nombre = "Angelica";
if(nombre.length > 7){
    console.log("¡Que nombre tan largo tienes!");
}else{
    console.log("¡Que nombre tan corto tienes!");
}


var edad = 16;
if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}


// Condicionales multiples 

var num = 5;
if(num < 10){
    console.log("Diste un número pequeño");
}else if(num < 100){
    console.log("Diste un número mediano");
}else{
    console.log("Diste un número grande");
}

var nota = 85;
if(nota >= 90){
    console.log("Excelente");
}else if(nota >= 70){
    console.log("Bueno");
}else{
    console.log("Necesita mejorar");
}

//condiciones anidadas

var temperatura = 27;
if (temperatura > 10){
    if(temperatura < 26){
        console.log("temperatura es moderada");
    }else if(temperatura >= 26){
        console.log("temperatura es alta");
    }
}else{
    console.log("hace mucho frio en tu ciudad");
}

var usuario = "admin";
var constrasena = 123;
if(usuario === "admin"){
    if(constrasena === 123){
        console.log("Bienvenido, admin");
    }else{
        console.log("COntraseña incorrecta");
    }
}else{
    console.log("usuario no encontrado");
}


// Pedir al usuario un numero desde el mavegador(prompt, alert) | parseInt(convierte un string a numero)

var num = parseInt(prompt("Ingrese un numero: ")) // var num = -5;
if(num == 0){
    alert("Es cero"); // console.log("Es cero");
}else if(num > 0){
    alert("Es positivo"); // console.log("Es positivo");
}else{
    alert("Negativo"); // console.log("Negativo");
}

