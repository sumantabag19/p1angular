import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRightsidebarComponent } from './add-user-rightsidebar.component';

describe('AddUserRightsidebarComponent', () => {
  let component: AddUserRightsidebarComponent;
  let fixture: ComponentFixture<AddUserRightsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserRightsidebarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
