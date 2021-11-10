import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.scss'],
})
export class OtpLoginComponent implements OnInit {
  isLoading: false;
  error: string | undefined;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  initiateLogin() {}

  private createForm() {
    const mobNumPattern = '^[0-9]{10}$';

    this.loginForm = this.formBuilder.group({
      mobile: ['', [Validators.required, Validators.pattern(mobNumPattern)]],
    });
  }
}
