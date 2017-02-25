import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy

} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements  OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

//export class LifecycleComponent implements OnInit {

  constructor() { }
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
}
