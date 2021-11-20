import data from "./data/rickandmorty/rickandmorty.js";

console.log(data.results);
let arrayData = [];
arrayData = data.results;
let personaje, foto, nombre, textoNombre;
let pprincipales = document.getElementById("personajes");
navegarData ();

function navegarData (){
  arrayData.map(element => imprimirPersonajes(element));
}

function imprimirPersonajes (arrayData){
  console.log("arreglo", arrayData);
  console.log("id", pprincipales);
  personaje = document.createElement("div");
  pprincipales.appendChild(personaje);
  foto = document.createElement("img");
  personaje.appendChild(foto);
  foto.src = arrayData.image;
  nombre = document.createElement("p");
  personaje.appendChild(nombre);
  textoNombre = document.createTextNode(arrayData.name);
  nombre.appendChild(textoNombre);

}


//console.log (data.results[i].image);

//let foto = document.getElementById("personaje1");

//foto.src = data.results[0].image;
