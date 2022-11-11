const TICKET = 200;
const estudiante = 0.2;
const trainee = 0.5;
const junior = 0.85;
const sinCategoria = 1;

const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const email = document.querySelector("#mail");
const cantidad = document.getElementById("cantidadTickets");
const categoria = document.getElementById("categoriaSelect");

let totalPago = document.querySelector("#totalPago");

const btnResumen = document.querySelector("#btnResumen");
const btnClear = document.querySelector("#btnBorrar");

btnClear.addEventListener("click", limpiarRegistro)
function limpiarRegistro(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    totalPago.textContent = "";
}

btnResumen.addEventListener("click", calcularMonto);
function calcularMonto() {
    totalPago.textContent = cantidad.value * TICKET;
}

function calcularDescuento() {
    switch (categoria.value){
    case "0":
    return sinCategoria;
     case "1":
    return estudiante;

     case "2":
    return trainee;
      
    case "3":
    return junior;
}

}
function calcularMonto() {
    totalPago.textContent =  TICKET * calcularDescuento() * cantidad.value;
}



btnResumen.addEventListener("click", validar);
function validar() {
if(nombre.value === null || nombre.value === "" ){
alert("Ingresa un nombre");
return false;
}
if(apellido.value === null || apellido.value === "" ){
 alert("Ingresa un Apellido");
 return false; }


 if(nombre.value.length > 30){
    alert("Ingrese un nombre mas corto");
    return false; }
 if(apellido.value.length > 30){
    alert("Ingrese un Apellido mas corto");
    return false; }

const emailValido = (mail) => {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);};

}
