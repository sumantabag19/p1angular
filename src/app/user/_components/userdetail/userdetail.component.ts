import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUser } from 'src/app/user/_models/add-user';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss'],
})
export class UserdetailComponent implements OnInit {
  flag: boolean = true;
  au: AddUser;
  adduser: FormGroup;

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
  getuserlist() {
    this.router.navigate(['/add-user']);
  }
  gethierarchy() {
    debugger;
    //this.loadScript('../../../../assets/js/d3.min.js');

    this.loadScript('../assets/js/main.js');
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
