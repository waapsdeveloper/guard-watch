import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { log } from 'console';
import { AlertController } from '@ionic/angular';

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
    dial_code: '+92'
  };
  constructor(injector: Injector, private alertController: AlertController) {
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
    let res = await this.users.login(this.obj) as any

    if (res == null) {
      return
    } else {

      console.log(res, 'assasasa');
      this.users.userFlowRedirection(res)
    }

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Select your role',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.handleAlertChoice(data);
          },
        },
      ],
      inputs: [
        {
          label: 'Guard',
          type: 'radio',
          value: 'guard',
        },
        {
          label: 'Checker',
          type: 'radio',
          value: 'checker',
        },
      ],
    });

    await alert.present();
  }

  handleAlertChoice(choice: any) {
    if (choice === 'guard') {
      this.nav.push('./pages/guard/dashboard');
    } else if (choice === 'checker') {
      this.nav.push('./pages/user/dashboard');
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
