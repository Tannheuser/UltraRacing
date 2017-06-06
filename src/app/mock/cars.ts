import {Car} from '../model/car';
import {Engine} from '../model/engine';

export const CARS: Car[] = [{
  manufacturer: 'VW',
  model: 'Golf II GTI',
  color: 'yellow',
  issued: new Date('1991-07-15'),
  maxSpeed: 220,
  acceleration: 8.1,
  mileage: 59768,
  imagePath: '/assets/img/c/golf2.jpg',
  engine: new Engine('1.8 GTI 16v', 1.8, 137, 168),
  damage: null
}, {
  manufacturer: 'Audi',
  model: '100',
  color: 'red',
  issued: new Date('1990-02-22'),
  maxSpeed: 260,
  acceleration: 11.0,
  mileage: 61057,
  imagePath: '/assets/img/c/a100_91.jpg',
  engine: new Engine('2.3 L I-5', 2.3, 134, 160),
  damage: null
}, {
  manufacturer: 'Toyota',
  model: 'Corolla Levin',
  color: 'blue storm',
  issued: new Date('1987-04-28'),
  maxSpeed: 220,
  acceleration: 8.1,
  mileage: 44113,
  imagePath: '/assets/img/c/ae_86.jpg',
  engine: new Engine('1.6 GT (4A-GEU)', 1.6, 130, 149),
  damage: null
}, {
  manufacturer: 'BMW',
  model: 'M3',
  color: 'silver',
  issued: new Date('1985-11-14'),
  maxSpeed: 240,
  acceleration: 9.3,
  mileage: 73678,
  imagePath: '/assets/img/c/m3_85.jpg',
  engine: new Engine('2.0 I6 (M20B20)', 2.0, 129, 174),
  damage: null
}, {
  manufacturer: 'Mazda',
  model: 'RX7 Savanna',
  color: 'cherry',
  issued: new Date('1988-09-15'),
  maxSpeed: 180,
  acceleration: 7.8,
  mileage: 39560,
  imagePath: '/assets/img/c/rx7_c.jpg',
  engine: new Engine('1.3 GT (13B)', 1.3, 185, 245),
  damage: null
}];
