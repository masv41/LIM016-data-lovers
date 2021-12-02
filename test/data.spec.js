import { filterDataByGender } from '../src/data.js';
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
