import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Realization } from '../model/realization.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  public getRealizations(): Observable<Realization[]> {
      return this.http.get<Realization[]>('/prerender/assets/realizations.json');
  }
}