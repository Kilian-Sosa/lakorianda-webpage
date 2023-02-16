const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const asunto = document.getElementById("asunto");
const form = document.getElementById("form");

nombre.addEventListener("keypress", soloLetras);
asunto.addEventListener("keypress", soloLetras);
telefono.addEventListener("keypress", soloNumeros);

form.addEventListener("submit", enviar);
