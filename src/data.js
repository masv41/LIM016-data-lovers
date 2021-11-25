

export const filterData = (data, seleccion) => {
  return data.results.filter((filtro) => filtro.gender == seleccion);
};

//data y value son  parametros no es relevante el nombre que se le asigne
//"arrayData.filter(person => person.gender === (e.target.value));"
export const filterDataByGender = (data, value) => data.filter(person => person.gender === value);



