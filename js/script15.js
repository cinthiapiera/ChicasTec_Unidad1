var clima = "nublado";
// clima = clima.toLowerCase();
// console.log(clima);

switch (clima){
    case "lluvioso":
        console.log("Recuerda llevar paraguas");
        break;
    case "soleado":
        console.log("Viste ligero");
        break;
    case "nublado":
        console.log("Sal a la calle");
        break;
    default:
        console.log("Tipo de clima desconocido");
        break;
}

/*0: domingo
1: lunes
2: martes
3: miercoles
4: jueves
5: viernes
6: sabado*/

// var dia = 2;
// switch (dia) {
//     case 0:
//         console.log("Domingo");
//         break;
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break; 
//     default:
//         console.log("Tiene que ingresar un numero del 0 a 6");
//         break;
// }

//EVENTO
function tipoDeDia() {
    var dia = new Date().getDay()
    console.log(dia);
    switch (dia) {
        case 0:
            console.log("Domingo");
            break;
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break; 
        default:
            console.log("Tiene que ingresar un numero del 0 a 6");
            break;
    }
}