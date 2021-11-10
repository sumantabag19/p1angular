import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  isLoading = false;
  isCollapsed = true;
  isPositionCollapsed = true;
  isCapabilityCollapsed = true;
  isProfileCollapsed = true;
  isPersonCollapsed = true;
  flag: boolean = false;

  constructor(private fb: FormBuilder, public router: Router) {}
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit() {
    this.initForm();
  }

  get form() {
    return this.contactForm.controls;
  }

  initForm() {
    this.contactForm = this.fb.group({
      salutation: ['Mr', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      account: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      contactOwner: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.router.navigate(['/contact/contact-details']);
  }
}
