import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {
  user: any;
  isLoading = false;
  obj = {
    email_or_phone: 'alice@email.com',
    password: 'Password123',
  };
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.user = this.datum.getAllUsers();
  }
  onEmailChange(email: string) {
    this.obj.email_or_phone = email;
    console.log(email);

  }

  onPasswordChange(password: string) {
    this.obj.password = password;
  }
  async login() {
    console.log(this.user, 'assasasa');

    if (!this.obj.email_or_phone || !this.obj.password) {
      alert("Email and Password are required");
      return;
    }

    const matchingUser = this.user.find((u: { email: string; password: string; role_id: number }) =>
      u.email === this.obj.email_or_phone && u.password === this.obj.password
    );

    console.log(matchingUser);

    if (matchingUser) {
      localStorage.setItem('user_id', matchingUser.id);

      if (matchingUser.role_id === 8) {
        this.nav.push('pages/guard');
      } else {
        this.nav.push('pages/user');
      }

      this.isLoading = false;
    } else {
      alert("Invalid email or password");
      return;
    }
    // this.submitAttemptLogin = true;
    // const formdata = this.aForm.value;
    // formdata.register_with_phonenumber = true;
    // formdata.dial_code = formdata.dial_code == 'HN' ? '+504' : '+92';
    // formdata.phone_number = this.utility.getOnlyDigits(formdata.phone_number);
    // this.isLoading = true;
    // await this.users.login(formdata);
  }

  switchToForgetPassword() {
    // this.aForm.reset();
    // this.setupForgetPassForm();
    // this.showLogin = false;
    // this.showForgetPass = true;
    // this.showSignUp = false;
    this.nav.push('pages/forget-password');
  }

  switchToSignUp() {
    // this.aForm.reset();
    this.nav.push('pages/signup');
    // this.setupSignUpForm();
    // this.showLogin = false;
    // this.showForgetPass = false;
    // this.showSignUp = true;
  }

}
