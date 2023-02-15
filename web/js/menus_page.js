const tabs = document.getElementById("tabs");
const desayunos = document.getElementById("Desayunos");
const almuerzos = document.getElementById("Almuerzos");

desayunos.addEventListener("click", () =>
  abrirTab("Desayunos", "showDesayunos")
);

almuerzos.addEventListener("click", () =>
  abrirTab("Almuerzos", "showAlmuerzos")
);

function abrirTab(tab, nombre) {
  quitar(desayunos.firstChild.nextSibling);
  quitar(almuerzos.firstChild.nextSibling);

  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(nombre).style.display = "block";

  seleccion(tab);
}

const quitar = (nodo) => nodo.classList.remove("seleccionado");

const seleccion = (nodo) => {
  const n = document.getElementById(nodo).firstChild.nextSibling;
  n.classList.add("seleccionado");
};

window.addEventListener("load", desayunos.click());
