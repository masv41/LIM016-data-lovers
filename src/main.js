import data from "./data/rickandmorty/rickandmorty.js";

let arrayData = [];
arrayData = data.results;
let personaje, foto, nombre, textoNombre, status, textoStatus;
let pprincipales = document.getElementById("personajes");
navegarData();

function navegarData() {
  arrayData.map(element => imprimirPersonajes(element));
}

function imprimirPersonajes(arrayData) {
  personaje = document.createElement("div");
  pprincipales.appendChild(personaje);

  foto = document.createElement("img");
  personaje.appendChild(foto);
  foto.src = arrayData.image;

  nombre = document.createElement("p");
  personaje.appendChild(nombre);
  textoNombre = document.createTextNode(arrayData.name);
  nombre.appendChild(textoNombre);
  nombre.classList.add ("p.texto");

  status = document.createElement("p");
  personaje.appendChild(status);
  textoStatus = document.createTextNode(arrayData.status);
  status.appendChild(textoStatus);
  status.classList.add ("p-status");

}



//console.log (data.results[i].image);

//let foto = document.getElementById("personaje1");

//foto.src = data.results[0].image;
