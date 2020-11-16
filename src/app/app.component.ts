import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from './content.service';
import { Realization } from '../model/realization.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="card" *ngFor="let realization of realizations | async">
    <h2 class="card-header text-center">{{realization.title}}</h2>
    <div class="card-body">
      <img src="assets/img/{{realization.image}}" />
      <p>{{realization.descirption}}</p>
    </div>
    <div class="card-footer text-muted text-center">
      <a href="{{realization.url}}">{{realization.url}}</a>
    </div>
  </div>
`,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 100px;
        justify-content: center;
      }

      .card {
        margin: 10px;
        width: 100%;
      }

      .card-body {
        display: flex;
        align-items: center;
      }

      img {
        float: left;
        margin-right: 10px;
      }
    `,
  ],
})
export class AppComponent {
  
  public realizations: Observable<Realization[]>;

  constructor(private cs: ContentService) {}

  ngOnInit(): void {
    this.realizations = this.cs.getRealizations();
  }
}