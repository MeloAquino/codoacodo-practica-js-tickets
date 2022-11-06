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







