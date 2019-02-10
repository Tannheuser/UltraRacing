import { BaseEntity } from '@app/core/model';

export interface Race extends BaseEntity {
  date: Date;
  about: string;
  entryFee: number;
  isRacing: boolean;
  image: string;
  imageDescription?: string;
}
