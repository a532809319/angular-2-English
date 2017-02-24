/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventBinddingComponent } from './event-bindding.component';

describe('EventBinddingComponent', () => {
  let component: EventBinddingComponent;
  let fixture: ComponentFixture<EventBinddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBinddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBinddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
