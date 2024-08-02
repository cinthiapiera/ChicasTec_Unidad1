var preguntas = [
    "¿Con qué frecuencia realizas deporte?<br>Considera como deporte cualquier actividad que acelere tu ritmo cardiaco, como caminar rápido, andar en bicicleta, bailar o, por supuesto, practicar un deporte.",
    "¿Cuántos vasos de agua (200mL) bebes al día?<br>No consideres la ingesta de otros líquidos, como gaseosas, jugos azucarados o alcohol.",
    "¿Cuántas porciones de frutas y verduras consumes diariamente?",
    "¿Cuándo fue la última vez que fuiste al médico y/o te realizaste un chequeo general?<br>No consideres visitas por situaciones muy específicas en las que no se revisó tu estado general de salud ni siquiera de manera visual, como por ejemplo en caso de una lesión.",
    "Piensa en lo que sueles comer día a día. ¿Qué tipo de alimentos es el más frecuente en tu dieta?",
    "¿Existen antecedentes de enfermedades crónicas en tu familia?.<br>Se considera como enfermedad crónica aquella que dura 3 ó más meses y que, posiblemente, empeore con el tiempo. Ejemplos: cáncer, diabetes, hipertensión, cardiopatías, accidentes cerebrovasculares.",
    "En general, consideras que tu salud es:"
];

var opciones = [
    ["3 ó más veces por semana",
    "Entre 1 y 2 veces a la semana",
    "Al menos 4 veces al mes",
    "2 a 3 veces al mes",
    "1 vez al mes ó menos"],
    ["Al menos 8 vasos al día",
    "Entre 5 y 8, depende del día",
    "Cuando me acuerdo",
    "Solo si tengo sed",
    "No me gusta el agua, prefiero la gaseosa"],
    ["5 ó más",
    "2 a 4",
    "Al menos 1 vez al día",
    "Depende del día",
    "Solo si me obligan"],
    ["Hace menos de un mes",
    "Entre 1 y 3 meses atrás",
    "Estoy segura que fui al menos una vez en los últimos 12 meses",
    "Solo voy si hay algún hueso expuesto",
    "Nunca me enfermo, no necesito ir al médico"],
    ["Harinas y cereales",
    "Proteína de origen animal (carnes rojas, blancas o pescado)",
    "Aceites y grasas",
    "Ensaladas de verduras y/o frutas",
    "Proteínas de origen vegetal (legumbres)"],
    ["Sí, ambos padres padecen enfermedades crónicas",
    "Sí, uno de mis padres padece de una o más enfermedades crónicas",
    "Sí, al menos uno de mis hermanos",
    "Sí, pero es un tío y/o abuelo",
    "No que yo sepa"],
    ["Excelente, no recuerdo la última vez que tuve un resfrío",
    "Buena, no suelo enfermarme más de una vez al año y es de manera leve",
    "Buena, tengo alguna(s) enfermedad(es) crónica(s) pero está(n) controlada(s)",
    "Regular, me refrío siempre y/o tengo descompensaciones ocasionales de enfermedades crónicas",
    "Mala, paso resfriada, con crisis de enfermedades crónicas y/o lesionada"]
];

var puntajePorOpcion = [
    [5, 4, 3, 1, 0],
    [5, 4, 2, 1, 0],
    [5, 4, 3, 1, 0],
    [5, 4, 3, 1, 0],
    [1, 4, 0, 3, 5],
    [1, 2, 2, 3, 5],
    [5, 4, 4, 2, 0]
];

var puntaje = 0;
var i = 0;

function mostrarResultado(){
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra_progreso").value = i * 100 / (preguntas.length - 1);

    div.innerHTML += "<h3 class='resultado_titulo'>Resultado</h3>"

    /* --- RESULTADOS ---
    Estilo de vida:
    puntaje > 30 --> EXCELENTE
    puntaje <= 30 --> BUENO
    puntaje <= 25 --> ACEPTABLE
    puntaje <= 20 --> REGULAR
    puntaje <= 10 --> MALO*/

    if(puntaje > 30){
        estiloVida = "<span id='estilo-excelente'>Excelente</span>";
    }else if(puntaje > 25){
        estiloVida = "<span id='estilo-bueno'>Bueno</span>";
    }else if(puntaje > 20){
        estiloVida = "<span id='estilo-aceptable'>Aceptable</span>";
    }else if(puntaje > 10){
        estiloVida = "<span id='estilo-regular'>Regular</span>";
    }else{
        estiloVida = "<span id='estilo-malo'>Malo</span>"
    }

    div.innerHTML += `<p>Tu puntaje es de ${puntaje} por ende tu estilo de vida es ${estiloVida}</p>`
}

function actualizarPuntaje(opcion){ //4
    var indice = opcion - 1; //3
    puntaje = puntaje + puntajePorOpcion[i][indice]; //p=5, p=6
    i = i+1; //i=1, i=2
    if(i < preguntas.length){
        siguientePregunta();
    }else{
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i]; //1
    document.getElementById("op1").innerHTML = opciones[i][0]; //1 [0]
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("op5").innerHTML = opciones[i][4];

    document.getElementById("barra_progreso").value = i * 100 / preguntas.length;
}

siguientePregunta();
document.getElementById("op1").addEventListener("click", function(){
    actualizarPuntaje(1);
})
document.getElementById("op2").addEventListener("click", function(){
    actualizarPuntaje(2);
})
document.getElementById("op3").addEventListener("click", function(){
    actualizarPuntaje(3);
})
document.getElementById("op4").addEventListener("click", function(){
    actualizarPuntaje(4);
})
document.getElementById("op5").addEventListener("click", function(){
    actualizarPuntaje(5);
})