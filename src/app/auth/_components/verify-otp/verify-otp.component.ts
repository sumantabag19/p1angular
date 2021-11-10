import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent implements OnInit {
  isLoading: false;
  error: string | undefined;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      digit1: ['', [Validators.required, Validators.pattern('/^d{1,1}$/')]],
      digit2: ['', [Validators.required, Validators.pattern('/^d{1,1}$/')]],
      digit3: ['', [Validators.required, Validators.pattern('/^d{1,1}$/')]],
      digit4: ['', [Validators.required, Validators.pattern('/^d{1,1}$/')]],
      digit5: ['', [Validators.required, Validators.pattern('/^d{1,1}$/')]],
      digit6: ['', [Validators.required, Validators.pattern('/^d{1,1}$/')]],
    });
  }
}
