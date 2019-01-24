import {Race} from '@app/races/model';

export const Races: Race[] = [{
  id: '1',
  name: 'Daytona thunderdome',
  date: new Date('2019-02-28T14:00:00'),
  about: 'Race through the ruins of an ancient Florida battle arena.',
  entryFee: 1100,
  isRacing: false,
  image: '/assets/img/daytona_thunderdome.jpg',
  imageDescription: 'Race track with laser lanes'
}, {
  id: '2',
  name: 'San Francisco ruins',
  date: new Date('2019-02-14T23:00:00'),
  about: 'Drift down the streets of a city almost sunk under the ocean.',
  entryFee: 500,
  isRacing: true,
  image: '/assets/img/san_francisco.jpg',
  imageDescription: 'Golden Gate Bridge with lasers'
}, {
  id: '3',
  name: 'New York City skyline',
  date: new Date('2019-02-11T21:00:00'),
  about: 'Fly between buildings in the electronic sky.',
  entryFee: 1500,
  isRacing: true,
  image: '/assets/img/new_york_city_skyline.jpg',
  imageDescription: 'Bridge overlooking New York City'
}, {
  id: '4',
  name: 'London royal race',
  date: new Date('2019-02-05T02:00:00'),
  about: 'Royal wagon with 300 HP under the hood.',
  entryFee: 1700,
  isRacing: true,
  image: '/assets/img/london.jpg',
  imageDescription: 'Neon styled panorama of London'
},
{
  id: '5',
  name: 'Kremlin rage (Moscow city)',
  date: new Date('2019-01-28T00:00:00'),
  about: 'Vodka, matryoshka and portion of adrenaline.',
  entryFee: 2000,
  isRacing: true,
  image: '/assets/img/moscow_city.jpg',
  imageDescription: 'Moscow city'
}];
