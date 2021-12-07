

//data y value son  parametros no es relevante el nombre que se le asigne
//"arrayData.filter(person => person.gender === (e.target.value));"
export const filterDataByGender = (data, value) => data.filter(person => person.gender === value);
export const filterDataBySpecies = (data, value) => data.filter(person => person.species === value);
export const filterDataByStatus = (data, value) => data.filter(person => person.status === value);
export const filterDataByOrigin = (data, value) => data.filter(person => person.origin.name === value);

export const sortAZData = (data) => {
  return data.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB){
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
  });
  }

  export const sortZAData = (data) => {
    return data.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB){
      return 1
    }
    if (nameA > nameB) {
      return -1
    }
  });
  }
