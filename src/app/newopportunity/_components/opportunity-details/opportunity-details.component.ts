import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity-details',
  templateUrl: './opportunity-details.component.html',
  styleUrls: ['./opportunity-details.component.scss'],
})
export class OpportunityDetailsComponent implements OnInit {
  calllog: boolean = true;
  journal: boolean = true;

  constructor(public router: Router) {}

  ngOnInit(): void {}
  getopportunitylist() {
    this.router.navigate(['/opportunity']);
  }
}
