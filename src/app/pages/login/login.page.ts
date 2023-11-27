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
    phone_number: '',
    password: '',
    dia_code: ''
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
