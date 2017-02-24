import { Component,Output, OnInit,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-bindding',
  template: `
  <button (click)="onClicked()" [ngStyle]="{width: '200px',height:'100px'}"></button>
  `,
  styles: []
})
export class EventBinddingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output('clickAble') clicked=new EventEmitter<string>()
 onClicked() {
   // alert('it is work clicked')
    this.clicked.emit('it works');
  }
}
