import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-property-bindding',
  template: `
    <p>
      property-bindding Works!{{result}}
    </p>
  `,
  styles: []
})
export class PropertyBinddingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 @Input() result:number=1

}
