/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComponentHostComponent } from './component-host.component';

describe('ComponentHostComponent', () => {
  let component: ComponentHostComponent;
  let fixture: ComponentFixture<ComponentHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
