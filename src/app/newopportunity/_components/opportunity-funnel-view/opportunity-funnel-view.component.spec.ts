import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityFunnelViewComponent } from './opportunity-funnel-view.component';

describe('OpportunityFunnelViewComponent', () => {
  let component: OpportunityFunnelViewComponent;
  let fixture: ComponentFixture<OpportunityFunnelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpportunityFunnelViewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityFunnelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
