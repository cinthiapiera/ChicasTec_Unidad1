var frutas = [
    "uva",
    "fresa",
    "mango",
    "manzana",
    "sandia",
    "mandarina"
];
// console.log(frutas);
// console.log(frutas[0]);
console.log(frutas);
console.log(frutas.push("pera"));
console.log(frutas);
console.log(frutas.unshift("kiwi"));
console.log(frutas[0]);
console.log(frutas);
console.log(frutas.pop());
console.log(frutas);
console.log(frutas.shift());
console.log(frutas);


document.getElementById("miboton").addEventListener("click",function(){
    console.log("Haz realizado un evento clic");
})