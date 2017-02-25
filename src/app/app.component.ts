import { Component } from '@angular/core';
import {DatabindingComponent} from './databinding';
@Component({
  selector: 'app-root',
  template:'<h1>Root componet</h1>' +
  '<app-lifecycle></app-lifecycle>'
  ,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app aaworks!';
}
