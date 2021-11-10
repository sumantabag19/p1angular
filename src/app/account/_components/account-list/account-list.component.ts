import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  getaccountdetail() {
    this.router.navigate(['/account/account-details']);
  }
  getaccounthistory() {
    this.router.navigate(['/account/account-history']);
  }
}
