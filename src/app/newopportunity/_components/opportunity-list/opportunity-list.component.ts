import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss'],
})
export class OpportunityListComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  getfunnelview() {
    this.router.navigate(['/opportunity/opportunity-funnel']);
  }
  getopportunitydetail() {
    this.router.navigate(['/opportunity/opportunity-details']);
  }
}
