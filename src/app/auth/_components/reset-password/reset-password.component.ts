import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordMatch } from '../../_common/validations';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  error: string | undefined;
  isLoading = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  get form() {
    return this.resetPasswordForm.controls;
  }

  private createForm() {
    const pwdPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,64}$';

    this.resetPasswordForm = this.formBuilder.group(
      {
        code: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern(pwdPattern)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: confirmPasswordMatch }
    );
  }
}
