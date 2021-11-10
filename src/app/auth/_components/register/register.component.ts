import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { confirmPasswordMatch } from '../../_common/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading: false;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  get form() {
    return this.registerForm.controls;
  }

  createForm() {
    const pwdPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,64}$';
    const mobNumPattern = '^[0-9]{10}$';
    const zipPattern = '^[0-9]{6}$';

    this.registerForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(25)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
        mobile: ['', [Validators.required, Validators.pattern(mobNumPattern)]],
        organizationName: ['', [Validators.required, Validators.maxLength(50)]],
        loginId: ['', [Validators.required, Validators.minLength(6)]],
        city: ['', [Validators.required]],
        zip: ['', [Validators.required, Validators.pattern(zipPattern)]],
        state: ['', [Validators.required]],
        country: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.pattern(pwdPattern)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: confirmPasswordMatch }
    );
  }
  register() {}
}
