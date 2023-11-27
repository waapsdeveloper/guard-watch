import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage extends BasePage implements OnInit {
  user:any;
  obj: any = {
    name: '',
    email: '',
    phone_number: '',
    password: '',
    confirm_password: '',
    dial_code: ''
  };
  isLoading = false;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }
  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }
  result(event: any,type: string){
    // this.obj[type] = event
    console.log(event,type);

    this.obj[type] = event

  }


  login() {
    this.nav.setRoot('pages/login');
  }

async  signup() {
    const res = await this.users.signUp(this.obj)
    
  }
}
