import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-opportunity',
  templateUrl: './add-opportunity.component.html',
  styleUrls: ['./add-opportunity.component.scss'],
})
export class AddOpportunityComponent implements OnInit {
  opportunityForm: FormGroup;
  isLoading = false;
  isCollapsed = true;
  isPositionCollapsed = true;
  isCapabilityCollapsed = true;
  isProfileCollapsed = true;
  isPersonCollapsed = true;
  myDateValue: Date;
  minDate: Date;
  maxDate: Date;
  constructor(private fb: FormBuilder, public router: Router) {}
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  }

  ngOnInit() {
    this.myDateValue = new Date();
    //console.log(this.myDateValue);
    this.minDate = new Date(1900, 1, 1);
    this.maxDate = new Date(2022, 11, 1);
    this.initForm();
  }

  get form() {
    return this.opportunityForm.controls;
  }

  initForm() {
    this.opportunityForm = this.fb.group({
      opportunityname: ['', [Validators.required]],
      opportunityowner: ['', [Validators.required]],
      revenue: ['', [Validators.required]],
      address: ['', [Validators.required]],
      cityname: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      // salutation: ['Mr', [Validators.required]],
      // firstName: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      // email: ['', [Validators.required]],
      // mobile: ['', [Validators.required]],
      // account: ['', [Validators.required]],
      // designation: ['', [Validators.required]],
      // address: ['', [Validators.required]],
      // city: ['', [Validators.required]],
      // state: ['', [Validators.required]],
      // country: ['', [Validators.required]],
      // zip: ['', [Validators.required]],
      // contactOwner: ['', [Validators.required]],
    });
  }
  onSubmit() {
    //this.router.navigate(['/account/account-details']);
  }
}
