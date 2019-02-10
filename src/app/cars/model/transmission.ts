import { TransmissionType } from '@app/cars/model/transmission-type';
import { DriveTrainType } from '@app/cars/model/drive-train-type';

export interface Transmission {
  type: TransmissionType;
  driveTrain: DriveTrainType;
  speeds: number;
}
