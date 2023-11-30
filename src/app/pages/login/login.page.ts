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
    dia_code: '+92'
  };
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {

  }
  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }

  result(event: any, type: any){
    this.obj[type] = event
  }

  async login() {
    this.obj.phone_number = '3418273826';
    this.obj.password = '123456';
    this.obj.dia_code = '+92';
    const res = this.users.login(this.obj)
    console.log(res, 'assasasa');

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
