import data from "./data/rickandmorty/rickandmorty.js";

let arrayData = [];
arrayData = data.results;
let pprincipales = document.getElementById("personajes");
navegarData();



function navegarData() {
 let perfiles=''
  arrayData.forEach(function(element){
     perfiles+=
    `<div class= "cont-personajes">
      <div class= "card">
        <img src=${element.image}></img>
      </div>
      <div class="info">
        <ul>
          <p><b>Nombre:<b> ${element.name}</p>
          <p><b>Estado:<b> ${element.status}</p>
          <p><b>Especie:<b> ${element.specie}</p>
          <p><b>Genero:<b> ${element.gender}</p>
          <p><b>Origen:<b> ${element.origin.name}</p>
        </ul>
      </div>
    </div>`
  })
  return perfiles
}


let formatoPersonajes = navegarData(pprincipales)
document.getElementById("perfiles").innerHTML=formatoPersonajes


verTodo.addEventListener('clik', showAll);
function showAll() {
  arrayData;
}


/*
let personaje, foto, nombre, textoNombre, status, textoStatus;
function navegarData() {
  arrayData.forEach(element => imprimirPersonajes(element));
}

function imprimirPersonajes(arrayData) {
  personaje = document.createElement("div");
  pprincipales.appendChild(personaje);
  pprincipales.classList.add("p-personaje");

  foto = document.createElement("img");
  personaje.appendChild(foto);
  foto.src = arrayData.image;
  foto.classList.add("p-imagen");

  nombre = document.createElement("p");
  personaje.appendChild(nombre);
  textoNombre = document.createTextNode(arrayData.name);
  nombre.appendChild(textoNombre);
  nombre.classList.add("p-texto");

  status = document.createElement("p");
  personaje.appendChild(status);
  textoStatus = document.createTextNode(arrayData.status);
  status.appendChild(textoStatus);
  status.classList.add("p-status");
}




//console.log (data.results[i].image);

//let foto = document.getElementById("personaje1");

//foto.src = data.results[0].image;
