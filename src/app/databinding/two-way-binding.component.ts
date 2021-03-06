import {
  Component ,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy



}
from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name">
    <input type="text" [(ngModel)]="person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent implements  OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  ngOnChanges() {
    console.log('ngOnchange')
  }
  ngOnInit() {
    console.log('OnInit')
  }
  ngDoCheck() {
    console.log('DoCheck')
  }
  ngAfterContentInit() {
    console.log('ngOnchange')
  }
  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }
  ngAfterViewInit() {
    console.log('AfterViewInit')
  }
  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')

  }
person = {
  name :'max',
  age:29
}

}
