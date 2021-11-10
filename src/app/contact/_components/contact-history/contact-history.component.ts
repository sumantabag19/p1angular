import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.scss'],
})
export class ContactHistoryComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  getcontactlist() {
    this.router.navigate(['/contact']);
  }
  getcontactdetail() {
    this.router.navigate(['/contact/contact-details']);
  }
}
