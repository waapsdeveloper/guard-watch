import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage extends BasePage implements OnInit {

  isLoading = false;
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  login() {
    this.nav.setRoot('pages/login');
  }

  signup(){

  }

  submit(){

  }

}
