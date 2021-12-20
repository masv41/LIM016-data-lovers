

//data y value son  parametros no es relevante el nombre que se le asigne
//"arrayData.filter(person => person.gender === (e.target.value));"
export const filterDataByGender = (data, value) => data.filter(person => person.gender === value);
export const filterDataBySpecies = (data, value) => data.filter(person => person.species === value);
export const filterDataByStatus = (data, value) => data.filter(person => person.status === value);
export const filterDataByOrigin = (data, value) => data.filter(person => person.origin.name === value);

export function compareStrings(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
//operador ternario
  return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export const sort_az = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(a.name, b.name);
})
};

export const sort_za = (arraytosort) => {
  return arraytosort.sort(function(a, b) {
    return compareStrings(b.name, a.name);
})
};
