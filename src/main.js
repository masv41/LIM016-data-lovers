import data from "./data/rickandmorty/rickandmorty.js";
import { filterDataByGender, filterDataBySpecies, filterDataByStatus, sortAZData, sortZAData } from "./data.js";

let gender = '';
let status = '';
let species = '';
let arrayData = [];
arrayData = data.results;
let mainCharacters = document.getElementById("characters");
printData(arrayData);
SortBy(arrayData);


// tample string para poder dar estilo en CSS
function printData(data) {
  let profiles = ''
  data.forEach(function (element) {
    profiles +=
      `<div class= "cont-personajes">
      <div class="name">
        <ul>
          <p> ${element.name}</p>
        </ul>
      </div>
      <div class= "card">
        <img src=${element.image}></img>
      </div>
      <div class="info">
        <ul>
          <p><b>Estado:<b> ${element.status}</p>
          <p><b>Especie:<b> ${element.species}</p>
          <p><b>Genero:<b> ${element.gender}</p>
          <p><b>Origen:<b> ${element.origin.name}</p>
        </ul>
      </div>
    </div>`
  })
  //imprimir en mainCharacters(personajes de HTML)la data de profiles
  mainCharacters.innerHTML = profiles;
}

/*Aplicar todos los filtros*/

let genderChoice = document.getElementById("gender")
//evento que cambia segun la seleccion en la barra de navegación. (e.target.value) obtener el valor de los cambios del select
genderChoice.addEventListener('change', (e) => {
  gender = (e.target.value);
  let result = arrayData;
  if (species !== '' && species !== "none") {
    result = filterDataBySpecies(result, species);
  }
  if (status !== '' && status !== "none") {
    result = filterDataByStatus(result, status);
  }
  //filterDataByGender from data.js --- (arrayData, (e.target.value)) son argumentos
  //"let filterGender = arrayData.filter(person => person.species === (e.target.value));" funcion llevada a Data.js
  if (e.target.value == "none") {
    printData(result);
  } else {
    result = filterDataByGender(result, gender);

    printData(result);
  }
})


let specieChoice = document.getElementById("species")
specieChoice.addEventListener('change', (e) => {
  species = (e.target.value);
  let result = arrayData;
  if (gender !== '' && gender !== "none") {
    result = filterDataByGender(result, gender);
  }
  if (status !== '' && status !== "none") {
    result = filterDataByStatus(result, status);
  }
  if (e.target.value == "none") {
    printData(result);
  } else {
    result = filterDataBySpecies(result, species);

    printData(result);
  }
});

let statusChoice = document.getElementById("status")
statusChoice.addEventListener('change', (e) => {
  status = (e.target.value);
  let result = arrayData;
  if (gender !== '' && gender !== "none") {
    result = filterDataByGender(result, gender);
  }
  if (species !== '' && species !== "none") {
    result = filterDataBySpecies(result, species);
  }
  if (e.target.value == "none") {
    printData(result);
  } else {
    result = filterDataByStatus(result, status);

    printData(result);
  }
});

function SortBy(arrayData) {
  let filterSort;
  switch (arrayData) {
    case 'az':
      filterSort = sortAZData(arrayData, 'name');
      break;
    case 'za':
      filterSort = sortZAData(arrayData, 'name');
      break;
    default:
      break;
  }

  return (filterSort)
}

/*Limpiar datos*/

let clean = document.getElementById("clean")
clean.addEventListener('click', () => {
  location.reload()
})
