import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login, EVAAuthorizeUserRequest, EVAConnectTokenResponse } from '../../_models/login';
import { InvalidUserCode } from '../../../constant/application.constant';
import { AuthenticationService } from '@app/auth/_services/authentication.service';
import { Router } from '@angular/router';
import { CredentialsService } from '@app/auth/_services/credentials.service';
import { Credentials } from '@app/auth/_models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  // version: string | null = environment.version;
  error: string | null;
  loginForm!: FormGroup;
  isLoading = false;
  loginModel: Login;
  tokenDetails: EVAConnectTokenResponse;
  credentials: Credentials;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  ngOnDestroy() {}

  initiateLogin() {
    this.loginModel = this.loginForm.value;
    sessionStorage.removeItem('redirectUrlAfterAD');
    this.isLoading = true;
    if (this.loginForm.value.email !== '' && this.loginForm.value.password !== '') {
      var userDetails: EVAAuthorizeUserRequest = {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.authenticationService.authorizeUser(userDetails).subscribe(
        (code: any) => {
          this.isLoading = false;
          // this.showLoginForm = true;
          // localStorage.setItem('activeSession', 'sso');
          this.credentials.user = this.loginForm.value.email;
          this.getAccessToken(code);
        },
        (error) => {
          this.isLoading = false;
          if (error === InvalidUserCode) {
            console.log('LOGIN.Permission_Access_Denied');
          } else {
            let ExceMsg = error.error;
            if (!ExceMsg || (ExceMsg && ExceMsg.includes('Attempt completed'))) {
              console.log('LOGIN.ENTER_VALID_USERNAME_&_PASSWORD');
            } else if (ExceMsg.includes('Your Account has been locked. Please contact admin')) {
              console.log('LOGIN.Account_Lock');
            } else if (ExceMsg && ExceMsg.includes('password for this user has expired')) {
              console.log('LOGIN.Password_Expiry');
            } else {
              console.log(ExceMsg);
              if (ExceMsg.includes('Session Expired')) {
                this.credentialsService.setCredentials();
                this.loginForm.reset();
                // this.showLoginForm = true;
              }
            }
          }
        }
      );
    } else {
      this.isLoading = false;
      console.log('LOGIN.ENTER_VALID_USERNAME_&_PASSWORD');
    }
  }
  getAccessToken(code: any) {
    if (code) {
      this.authenticationService.getAccessToken(code).subscribe(
        (tokenDetails: EVAConnectTokenResponse) => {
          if (tokenDetails) {
            console.log(tokenDetails);
            this.credentials.token = tokenDetails.access_token;
            this.credentials.refresh_token = tokenDetails.refresh_token;
            this.credentials.expires_in = tokenDetails.expires_in;
            this.credentialsService.setCredentials(this.credentials, true);
            this.router.navigate(['/dashboard']);
          } else {
            console.log('Token details not found');
            this.credentialsService.setCredentials();
          }
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          sessionStorage.clear();
          console.log(error);
        }
      );
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
