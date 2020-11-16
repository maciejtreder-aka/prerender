import { makeStateKey, StateKey } from '@angular/platform-browser';
import { Realization } from './realization.model';

export class StateKeys {
  public static get REALIZATIONS(): StateKey<Realization[]> {
    return makeStateKey<Realization[]>('realizations');
  }
}