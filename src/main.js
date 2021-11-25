import data from "./data/rickandmorty/rickandmorty.js";
import { filterGender } from './data.js';


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
  pprincipales.innerHTML = perfiles; //imprimir en pprincipales(personajes de HTML)la data de perfiles
}

/*let getResults = document.getElementById("applyFilters")
getResults.addEventListener('click',() =>{
  let genderChoice = document.getElementById("gender").value
  let speciesChoice = document.getElementById("species").value
  let statusChoice = document.getElementById("status").value
  let filterResults = func.filterData(person, genderChoice, speciesChoice, statusChoice)
  let numberResults = filterResults.length
  document.getElementById("numberOfResults").innerHTML = numberResults + " resultados"
  let orderChoice = document.getElementById("alphabet").value
  let orderedResults = func.sortData(filterResults, orderChoice)
  let renderedData = navegarData(orderedResults)
  document.getElementById("perfiles").innerHTML=renderedData
 })




/*verTodo.addEventListener('clik', showAll);
function showAll() {
  showAll (arrayData);
}
document.addEventListener('click', (e) =>){

}

function filtrarGenero(seleccion, arrayData){
  let filterGender;
switch (seleccion) {
  case 'male':
    filterGender= filterGender(arrayData,'male');
    break;
  case 'female':
    filterGender= filterGender(arrayData,'female');
    break;
  case 'unknown':
    filterGender= filterGender(arrayData,'unknown');
    break;
  default:
    console.log('default');
  }
}*/
