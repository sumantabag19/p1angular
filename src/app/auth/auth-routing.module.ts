import { ResetPasswordComponent } from './_components/reset-password/reset-password.component';
import { VerifyOtpComponent } from './_components/verify-otp/verify-otp.component';
import { OtpLoginComponent } from './_components/otp-login/otp-login.component';
import { RegisterComponent } from './_components/register/register.component';
import { ForgotPasswordComponent } from './_components/forgot-password/forgot-password.component';
import { LoginComponent } from './_components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: marker('Login') } },
  { path: 'otp-login', component: OtpLoginComponent, data: { title: marker('Login') } },
  { path: 'verify', component: VerifyOtpComponent, data: { title: marker('Verify Otp') } },
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: marker('Forgot Password') } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { title: marker('Reset Password') } },
  { path: 'register', component: RegisterComponent, data: { title: marker('Register') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
