import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit {

  isLoading = false;
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  async login() {
    // this.submitAttemptLogin = true;
    // const formdata = this.aForm.value;
    // formdata.register_with_phonenumber = true;
    // formdata.dial_code = formdata.dial_code == 'HN' ? '+504' : '+92';
    // formdata.phone_number = this.utility.getOnlyDigits(formdata.phone_number);
    // this.isLoading = true;
    // await this.users.login(formdata);
    this.nav.push('pages/user')
    this.isLoading = false;
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
