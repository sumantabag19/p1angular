import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
})
export class ContactDetailComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  getcontactlist() {
    this.router.navigate(['/contact']);
  }
}
