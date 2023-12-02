const d = document;

let botonElem = d.getElementById("boton-cambiar-cita");
let citaElem = d.getElementById("cita");
let autorElem = d.getElementById("autor");

function generarEnteroAleatorio(min, max) {
  // Sin incluir max en los valores posible
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
  let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener("click", cambiarCita);
