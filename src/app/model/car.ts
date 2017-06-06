import {Engine} from './engine';
import {Damage} from './damage';

export class Car {
  manufacturer: string;
  model: string;
  color: string;
  issued: Date;
  maxSpeed: number;
  acceleration: number;
  mileage: number;
  imagePath: string;
  engine: Engine;
  damage: Damage;
}
