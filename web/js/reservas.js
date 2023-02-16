const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const fecha = document.getElementById("fecha");
const form = document.getElementById("form");

nombre.addEventListener("keypress", soloLetras);
telefono.addEventListener("keypress", soloNumeros);
fecha.setAttribute("min", new Date().toISOString().split("T")[0]);

form.addEventListener("submit", enviar);
