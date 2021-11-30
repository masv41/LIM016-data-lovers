import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataByGender, filterDataBySpecies,filterDataByStatus, sortAZData, sortZAData } from "./data.js";
//import { filterData, example} from './data.js';


let arrayData = [];
arrayData = data.results;
let mainCharacters = document.getElementById("characters");
printData(arrayData);
SortBy(data);


// tample string para poder dar estilo en CSS
function printData(data) {
 let profiles=''
  data.forEach(function(element){
    profiles+=
    `<div class= "cont-personajes">
      <div class= "card">
        <img src=${element.image}></img>
      </div>
      <div class="info">
        <ul>
          <p><b>Nombre:<b> ${element.name}</p>
          <p><b>Estado:<b> ${element.status}</p>
          <p><b>Especie:<b> ${element.species}</p>
          <p><b>Genero:<b> ${element.gender}</p>
          <p><b>Origen:<b> ${element.origin.name}</p>
          <p><b>Locación:<b> ${element.location.name}</p>
        </ul>
      </div>
    </div>`
  })
  //imprimir en mainCharacters(personajes de HTML)la data de profiles
  mainCharacters.innerHTML = profiles;
}


//let getResults = document.getElementById("applyFilters")

let genderChoice = document.getElementById("gender")

//evento que cambia segun la seleccion en la barra de navegación. (e.target.value) obtener el valor de los cambios del select
genderChoice.addEventListener('change',(e) =>{

//filterDataByGender from data.js --- (arrayData, (e.target.value)) son argumentos
//"let filterGender = arrayData.filter(person => person.species === (e.target.value));" funcion llevada a Data.js
let filterGender = filterDataByGender(arrayData, (e.target.value));

  printData(filterGender);
})

let specieChoice = document.getElementById("species")
specieChoice.addEventListener('change',(e) =>{
let filterSpecie = filterDataBySpecies(arrayData, (e.target.value));

printData(filterSpecie);
    })

let statusChoice = document.getElementById("status")
statusChoice.addEventListener('change',(e) =>{
let filterStatus = filterDataByStatus(arrayData, (e.target.value));
  printData(filterStatus);
})

function SortBy(seleccion, localData) {
    let filtrarOrden;
    switch (seleccion) {
        case 'az':
            filtrarOrden = sortAZData(localData, 'name');
            break;
        case 'za':
            filtrarOrden = sortZAData(localData, 'name');
            break;
        default:
            break;
    }
    return (filtrarOrden)
   }
