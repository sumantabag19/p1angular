import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-history',
  templateUrl: './account-history.component.html',
  styleUrls: ['./account-history.component.scss'],
})
export class AccountHistoryComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  getaccountlist() {
    this.router.navigate(['/account']);
  }
  getaccountdetail() {
    this.router.navigate(['/account/account-details']);
  }
}
