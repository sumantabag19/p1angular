import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubteamsComponent } from './subteams.component';

describe('SubteamsComponent', () => {
  let component: SubteamsComponent;
  let fixture: ComponentFixture<SubteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubteamsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
