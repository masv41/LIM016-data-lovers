import { filterDataByGender, sortAZData, sortZAData } from "./data.js";



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
