import { Car, DriveTrainType, TransmissionType } from '@app/cars/model';

export const Cars: Car[] = [
  {
    id: 1,
    name: 'A100',
    acceleration: 0.3,
    breaking: 0.2,
    handling: 0.3,
    engineCapacity: 2.2,
    manufacturer: { id: 1, name: 'Audi'},
    mileage: 189435,
    maxSpeed: 220,
    maxPower: 162,
    stability: 0.3,
    transmission: { type: TransmissionType.Manual, driveTrain: DriveTrainType.Front, speeds: 5 },
    year: 1991
  },
  {
    id: 2,
    name: 'Corolla AE (86)',
    acceleration: 0.2,
    breaking: 0.2,
    handling: 0.3,
    engineCapacity: 1.6,
    manufacturer: { id: 2, name: 'Toyota'},
    mileage: 212012,
    maxSpeed: 180,
    maxPower: 120,
    stability: 0.3,
    transmission: { type: TransmissionType.Manual, driveTrain: DriveTrainType.Rear, speeds: 5 },
    year: 1987
  },
  {
    id: 3,
    name: 'Golf II GTI',
    acceleration: 0.3,
    breaking: 0.3,
    handling: 0.3,
    engineCapacity: 1.8,
    manufacturer: { id: 3, name: 'Volkswagen'},
    mileage: 205403,
    maxSpeed: 200,
    maxPower: 139,
    stability: 0.3,
    transmission: { type: TransmissionType.Manual, driveTrain: DriveTrainType.Front, speeds: 5 },
    year: 1987
  },
  {
    id: 4,
    name: 'M3',
    acceleration: 0.3,
    breaking: 0.3,
    handling: 0.3,
    engineCapacity: 1.8,
    manufacturer: { id: 4, name: 'BMW'},
    mileage: 193400,
    maxSpeed: 235,
    maxPower: 200,
    stability: 0.3,
    transmission: { type: TransmissionType.Manual, driveTrain: DriveTrainType.Front, speeds: 5 },
    year: 1988
  },
  {
    id: 5,
    name: 'RX7',
    acceleration: 0.3,
    breaking: 0.3,
    handling: 0.3,
    engineCapacity: 1.3,
    manufacturer: { id: 5, name: 'Mazda'},
    mileage: 235600,
    maxSpeed: 220,
    maxPower: 185,
    stability: 0.3,
    transmission: { type: TransmissionType.Manual, driveTrain: DriveTrainType.Rear, speeds: 5 },
    year: 1988
  }
];
