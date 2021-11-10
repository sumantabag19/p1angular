import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUser } from 'src/app/user/_models/add-user';
@Component({
  selector: 'app-add-user-rightsidebar',
  templateUrl: './add-user-rightsidebar.component.html',
  styleUrls: ['./add-user-rightsidebar.component.scss'],
})
export class AddUserRightsidebarComponent implements OnInit {
  flag: boolean = false;
  adduser: FormGroup;
  au: AddUser;
  constructor(private formBuilder: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.createForm();
  }
  get form() {
    return this.adduser.controls;
  }
  createForm() {
    const pwdPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,64}$';
    const mobNumPattern = '^[0-9]{10}$';
    const zipPattern = '^[0-9]{6}$';

    this.adduser = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.maxLength(200)]],
      lastname: ['', [Validators.required, Validators.maxLength(200)]],

      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      mobile: ['', [Validators.required, Validators.pattern(mobNumPattern)]],
      jobtitle: ['', [Validators.required, Validators.maxLength(50)]],
      selectedmanager: ['', [Validators.required, Validators.maxLength(50)]],
      selectedteam: ['', [Validators.required, Validators.maxLength(50)]],
      dataaccess: ['', [Validators.required, Validators.maxLength(50)]],
      selectedaccess1: ['', [Validators.required, Validators.maxLength(50)]],
      selectedaccess2: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  onSubmit() {}
}
