export const filterDataBySpecies = (data, value) => data.filter(person => person.species === value);
export const filterDataByStatus = (data, value) => data.filter(person => person.status === value);
export const filterDataByType = (data, value) => data.filter(person => person.type === value);
export const filterDataByOrigin = (data, value) => data.filter(person => person.origin.name === value);
export const filterDataByLocation = (data, value) => data.filter(person => person.location.name === value);

export const sortAZData = (data) => {
    return data.results.sort((a, b) => {
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
    return data.results.sort((a, b) => {
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

  const multipleFilter={
    filterData:function(list, choice1, choice2, choice3){
      let resultFilterGen=list.filter((person)=>{
        if(person.gender===choice1){
          return true
        }else{
          if(choice1==="none")
          return list
        }
      })
      let resultFilterSpecies=resultFilterGen.filter((person)=>{
        if(person.species===choice2){
          return true
        }else{
          if(choice2==="none")
          return resultGen
        }
      })
      let finalResult=resultFilterSpecies.filter((person)=>{
        if(person.status===choice3){
          return true
        }else{
          if(choice3==="none")
          return resultFilterSpecies
        }
      })
      return finalResult
    },
  