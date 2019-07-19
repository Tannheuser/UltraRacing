import { BaseEntity } from '@app/core/model';
import { Transmission } from '@app/cars/model/transmission';

export interface Car extends BaseEntity {
  acceleration: number;
  breaking: number;
  handling: number;
  engineCapacity: number;
  manufacturer: BaseEntity;
  mileage: number;
  maxSpeed: number;
  maxPower: number;
  stability: number;
  transmission: Transmission;
  year: number;
}
