import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage extends BasePage implements OnInit {
  user: any;
  obj: any = {
    name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    dial_code: '+92',
  };
  isLoading = false;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() { }
  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }
  result(event: any, type: string) {
    this.obj[type] = event;
  }
  async signup() {
    if (!this.obj.name || !this.obj.phone_number || !this.obj.email || !this.obj.password || !this.obj.confirm_password || !this.obj.dial_code) {
      console.error('Please fill in all the required fields.');
      return;
    }
    const res = await this.users.signUp(this.obj);
    console.log("ssasasa", res);
    if (res) {
      this.nav.push('pages/user');
    }    
  }
  login() {
    this.nav.setRoot('pages/login');
  }
}
