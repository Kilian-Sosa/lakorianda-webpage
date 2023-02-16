const cerrar = document.getElementById("cerrar");
if (cerrar) {
  cerrar.addEventListener("click", () => {
    window.modal.close();
    location.reload();
  });
}

const enviar = () => {
  if (!modal.open) window.modal.showModal();
};

const soloLetras = (e) => {
  let caracter = e.charCode || e.keyCode;
  if (
    (caracter < 65 || caracter > 90) &&
    (caracter < 97 || caracter > 122) &&
    (caracter < 192 || caracter > 255) &&
    caracter != 32
  ) {
    e.preventDefault();
  }
};

const soloNumeros = (e) => {
  let caracter = e.charCode || e.keyCode;
  if (caracter < 48 || caracter > 57) {
    e.preventDefault();
  }
};
