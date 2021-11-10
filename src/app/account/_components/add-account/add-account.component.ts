import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss'],
})
export class AddAccountComponent implements OnInit {
  accountForm: FormGroup;
  isLoading = false;
  isCollapsed = true;
  isPositionCollapsed = true;
  isCapabilityCollapsed = true;
  isProfileCollapsed = true;
  isPersonCollapsed = true;

  constructor(private fb: FormBuilder, public router: Router) {}
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit() {
    this.initForm();
  }

  get form() {
    return this.accountForm.controls;
  }

  initForm() {
    this.accountForm = this.fb.group({
      salutation: ['Mr', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      account: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      website: ['', [Validators.required]],

      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      contactOwner: ['', [Validators.required]],
    });
  }
  onSubmit() {
    this.router.navigate(['/account/account-details']);
  }
}
