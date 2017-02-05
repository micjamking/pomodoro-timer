/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerToggleComponent } from './timer-toggle.component';

describe('TimerToggleComponent', () => {
  let component: TimerToggleComponent;
  let fixture: ComponentFixture<TimerToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
