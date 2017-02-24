import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  constructor() { }
@Output() clicked= new EventEmitter<string>()
  a:string='数据啊a';
  b:string='数据啊b';
  ontest=function () {
    //this.cliced.emit('it is work')

    return false;
  }
  onClicked(value:string){
    alert(value);
  }

}
