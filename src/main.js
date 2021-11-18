import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results[0].name);

let foto = document.getElementById("personaje1");
  foto.src = data.results[0].image;
