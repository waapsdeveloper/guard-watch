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
  obj: any = {
    phone_number: '3418273826',
    password: '123456',
    dial_code: '+92'
  };
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {

  }
  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }

  result(event: any, type: any) {
    this.obj[type] = event
  }

  async login() {
    if (!this.obj.phone_number || !this.obj.password || !this.obj.dial_code) {
      console.error('Please fill in all the required fields.');
      return;
    }
    // this.obj.phone_number = '3418273826';
    // this.obj.password = '123456';
    // this.obj.dial_code = '+92';
    let res = await this.users.login(this.obj) as any

    if (res == null) {
      return
    } else {

      console.log(res, 'assasasa');
      localStorage.setItem("user_id", res.id)

      localStorage.setItem("role_id", res.role_id)
      if (res.role_id == 3) {
        console.log('guard');
        this.nav.push('./pages/guard/dashboard');
      } else {
        console.log('resident');
        this.nav.push('./pages/user/dashboard');
      }
    }

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
