import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}
  getcontactdetail() {
    this.router.navigate(['/contact/contact-details']);
  }
  getcontacthistory() {
    this.router.navigate(['/contact/contact-history']);
  }
}
