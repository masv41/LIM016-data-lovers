import { filterDataByGender, sortAZData, sortZAData, multiplerFilter } from "./data.js";



function filtradoPorOrden(seleccion, localData) {
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

   /*Aplicar todos los filtros*/

   function(data){
    let person = data.results
    let alive=func.filterData(person, "none", "none", "Alive")
    let dead=func.filterData(person, "none", "none", "Dead")
    let unknown=func.filterData(person, "none", "none", "unknown")
    let porcentageA=multiplerFilter.computeData(person, alive)
    let porcentageD=multiplerFilter.computeData(person, dead)
    let porcentageU=multiplerFilter.computeData(person, unknown)

   let personFormat=renderData(person)
   document.getElementById("profiles").innerHTML=personFormat
   document.getElementById("numberOfResults").innerHTML=person.length + " resultados"

   let getResults=document.getElementById("applyFilters")
   getResults.addEventListener('click',() =>{
       let genderChoice=document.getElementById("gender").value
       let speciesChoice=document.getElementById("species").value
       let statusChoice=document.getElementById("status").value
       let filterResults=func.filterData(person, genderChoice, speciesChoice, statusChoice)
       let numberResults=filterResults.length
       document.getElementById("numberOfResults").innerHTML=numberResults + " resultados"
       let orderChoice=document.getElementById("alphabet").value
       let orderedResults=func.sortData(filterResults, orderChoice)
       let renderedData=renderData(orderedResults)
       document.getElementById("profiles").innerHTML=renderedData
   })

let clean = document.getElementById("clean")
clean.addEventListener('click',() => {
   location.reload()
})
