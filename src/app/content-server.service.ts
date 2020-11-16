import { Injectable } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import * as fs from 'fs';
import { Observable } from 'rxjs';
import { Realization } from '../model/realization.model';
import { StateKeys } from '../model/state-keys.model';

@Injectable({
  providedIn: 'root'
})
export class ContentServerService {

  constructor(private ts: TransferState) { }

  public getRealizations(): Observable<Realization[]> {
    return new Observable(subject => {
      fs.readFile(`${process.cwd()}/src/assets/realizations.json`, 'utf8', (err, data) => {
        const realizations = JSON.parse(data);
        this.ts.set(StateKeys.REALIZATIONS, realizations);
        subject.next(realizations);
        subject.complete();
      });
    });
  }
}