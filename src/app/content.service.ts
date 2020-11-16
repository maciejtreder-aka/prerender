import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { Realization } from '../model/realization.model';
import { StateKeys } from '../model/state-keys.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private ts: TransferState) { }

  public getRealizations(): Observable<Realization[]> {
    return of(this.ts.get(StateKeys.REALIZATIONS, null))
  }
}