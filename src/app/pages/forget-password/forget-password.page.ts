import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage extends BasePage implements OnInit {

  isLoading = false;
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  login() {
    this.nav.setRoot('pages/login');
  }

  submit(){

  }

}
