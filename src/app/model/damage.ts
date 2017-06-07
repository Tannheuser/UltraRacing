import { DamageRate } from './damageRate';
export class Damage {
  private _overall: DamageRate;
  constructor(angine: DamageRate, body: DamageRate, tires: DamageRate, brakes: DamageRate, suspension: DamageRate) {
  }

  get overall() {
    return 0;
  }
}
