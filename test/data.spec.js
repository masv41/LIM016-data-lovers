import { filterDataByGender, filterDataByStatus, filterDataBySpecies, filterDataByOrigin, sort_az, sort_za, compareStrings} from '../src/data.js';
const data = [{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",

  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": "2017-11-04T18:48:46.250Z"
},
{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",

  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
},
{
  "id": 3,
  "name": "Summer Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Female",
  "origin": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
  "episode": [
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",

  ],
  "url": "https://rickandmortyapi.com/api/character/3",
  "created": "2017-11-04T19:09:56.428Z"
},]

const result1 = [data[0],data[1]]
describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterDataByGender).toBe('function');

  });

  it('returns `example`', () => {
    expect(filterDataByGender(data, "Male")).toStrictEqual(result1);
  });
});

const result2 = [data[2]]
describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterDataByGender).toBe('function');

  });

  it('returns `example`', () => {
    expect(filterDataByGender(data, "Female")).toStrictEqual(result2);
  });
});

const result3 = [data[0],data[1],data[2]]
describe('filterByStatus', () => {
  it('is a function', () => {
    expect(typeof filterDataByStatus).toBe('function');

  });

  it('returns `example`', () => {
    expect(filterDataByStatus(data, "Alive")).toStrictEqual(result3);
  });
});

const result4 = [data[0],data[1],data[2]]
describe('filterBySpecies', () => {
  it('is a function', () => {
    expect(typeof filterDataBySpecies).toBe('function');

  });

  it('returns `example`', () => {
    expect(filterDataBySpecies(data, "Human")).toStrictEqual(result4);
  });
});

const result5 = [data[0],data[1]]
describe('filterByOrigin', () => {
  it('is a function', () => {
    expect(typeof filterDataByOrigin).toBe('function');

  });

  it('returns `example`', () => {
    expect(filterDataByOrigin(data, "Earth (C-137)")).toStrictEqual(result5);
  });
});

const result6 = [data[2]]
describe('filterByOrigin', () => {
  it('is a function', () => {
    expect(typeof filterDataByOrigin).toBe('function');

  });

  it('returns `example`', () => {
    expect(filterDataByOrigin(data, "Earth (Replacement Dimension)")).toStrictEqual(result6);
  });
});

const result7 = [data[1], data[0], data[2]]
describe('sort_az', () =>{
  it('is a function', ()=> {
    expect(typeof sort_az).toBe('function');
  });

  it('returns `example`', () => {
    expect(sort_az(data)).toStrictEqual(result7);
  })
});

const result8 = [data[2], data[0], data[1]]
describe('sort_za', () =>{
  it('is a function', ()=> {
    expect(typeof sort_za).toBe('function');
  });

  it('returns `example`', () => {
    expect(sort_za(data)).toStrictEqual(result8);
  })
});

describe('compareStrings', () =>{
  it('is a function', ()=> {
    expect(typeof compareStrings);
  });

  it('returns `example`', () => {
    expect(compareStrings("Morty","Summer")).toStrictEqual(-1);
  });

  it('returns `example`', () => {
    expect(compareStrings("Summer","Morty")).toStrictEqual(1);
  });

  it('returns `example`', () => {
    expect(compareStrings("Rick","Rick")).toStrictEqual(0);
  });
});
