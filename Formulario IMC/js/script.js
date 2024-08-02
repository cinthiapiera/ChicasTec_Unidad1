function datos(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var f = document.getElementById("femenino").checked;
    var m = document.getElementById("masculino").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    var mensaje = "Nombres: " + nombre 
    + "\nApellidos: " + apellidos
    + "\nCorreo electrónico: " + email
    + "\nFecha de nacimiento: " + fechaNacimiento
    + "\nEs mujer: " + f
    + "\nEs hombre: " + m
    + "\nEstatura: " + estatura + " m"
    + "\nPeso: " + peso + " kg"
    + "\nHace deporte: " + deporte;


    // console.log(mensaje);
    var imc = peso / (estatura**2);
    var obesidad = imc >= 30;
    alert("IMC: " + imc + "\nEs obeso: " + obesidad);
}