import { Race } from '../models';

export class RacesService {
  static getRaces(): Race[] {
    return races;
  }
}

const races = [{
  id: '1',
  name: 'Paris taxi competition',
  date: new Date('2019-02-18T14:00:00'),
  about: 'Beat the record of Daniel from \'Taxi\' movie.',
  entryFee: 1100,
  isRacing: false,
  image: '/assets/img/paris.png',
  imageDescription: 'Paris neon panorama'
}, {
  id: '2',
  name: 'San Francisco ruins',
  date: new Date('2019-02-24T23:00:00'),
  about: 'Drift down the streets of a city almost sunk under the ocean.',
  entryFee: 500,
  isRacing: true,
  image: '/assets/img/san_francisco.jpg',
  imageDescription: 'San Francisco neon panorama'
}, {
  id: '3',
  name: 'New York City skyline',
  date: new Date('2019-02-11T21:00:00'),
  about: 'Fly between buildings in the electronic sky.',
  entryFee: 1500,
  isRacing: true,
  image: '/assets/img/new_york.png',
  imageDescription: 'New York neon panorama'
}, {
  id: '4',
  name: 'London royal race',
  date: new Date('2019-02-05T02:00:00'),
  about: 'Royal wagon with 300 HP under the hood.',
  entryFee: 1700,
  isRacing: true,
  image: '/assets/img/london.png',
  imageDescription: 'Neon styled panorama of London'
},
  {
    id: '5',
    name: 'Kremlin rage',
    date: new Date('2019-01-28T00:00:00'),
    about: 'Race from the old walls of Kremlin to modern skylines of City.',
    entryFee: 2000,
    isRacing: true,
    image: '/assets/img/moscow.png',
    imageDescription: 'Moscow city'
  }];
