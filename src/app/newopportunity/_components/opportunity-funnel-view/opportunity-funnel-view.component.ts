import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity-funnel-view',
  templateUrl: './opportunity-funnel-view.component.html',
  styleUrls: ['./opportunity-funnel-view.component.scss'],
})
export class OpportunityFunnelViewComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  getlistview() {
    this.router.navigate(['/opportunity']);
  }
  getopportunitydetails() {
    this.router.navigate(['/opportunity/opportunity-details']);
  }
}
