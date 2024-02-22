import { Component, OnInit, Injector, AfterViewInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { log } from 'console';
import { AlertController } from '@ionic/angular';
import { FirebService } from 'src/app/services/fireb.service';
import { LoginOptVerificationComponent } from './login-opt-verification/login-opt-verification.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePage implements OnInit, AfterViewInit {
  user: any;
  isLoading = false;
  step = 1;
  obj: any = {
    phone_number: '',
    password: '',
    dial_code: '+92'
  };

  item: any = {
    "name": "Pakistan",
    "dial_code": "+92",
    "code": "PK"
  };

  constructor(injector: Injector, private fb: FirebService, private alertController: AlertController) {
    super(injector)

  }

  ngAfterViewInit(): void {
    let pn = localStorage.getItem("phone_number");
    let dc = localStorage.getItem("dial_code");
    dc = dc ? dc : this.item.dial_code
    if(pn && dc){

      this.obj.phone_number = pn;
      this.obj.dial_code = dc;
      this.verifyPhoneNumber()



      // this.step = 2;
    }
  }

  ngOnInit() {

  }



  disableSubmit(){

    if(this.isLoading){
      return true;
    }

    if(this.step == 1){
      return !this.obj.dial_code || !this.obj.phone_number
    }

    if(this.step == 2){
      return !this.obj.password;
    }

    return true;
  }

  submit(){

    if(this.step == 1){
      // this.verifyPhoneNumber()
    }

    if(this.step == 2){
      this.login()
    }
  }

  async verifyPhoneNumber(){

    if(!this.obj.dial_code){
      return;
    }

    if(!this.obj.phone_number){
      return;
    }

    this.isLoading = true;

    // sudo logic is
    // check if phone number exist in system and verified

    const deviceId = "58966";


    const ipeavod = await this.fb.isPhoneExistAndVerifiedOnDevice(this.obj.dial_code, this.obj.phone_number, deviceId )
    console.log(ipeavod)


    return;





    const res = await this.fb.verifyPhoneNumber(this.obj.dial_code, this.obj.phone_number)
    this.isLoading = false;

    const m = await this.modals.present(LoginOptVerificationComponent, {item: this.obj}, '', 0.75 )
    this.step = 2;

  }

  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }

  result(event: any, type: any) {
    this.obj[type] = event ? event : null
  }

  async login() {
    if (!this.obj.phone_number || !this.obj.password || !this.obj.dial_code) {
      console.error('Please fill in all the required fields.');
      return;
    }
    this.isLoading = true;
    let res = await this.users.login(this.obj) as any
    this.isLoading = false;

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

  changePhoneNumber(){
      this.step = 1;

  }

}
