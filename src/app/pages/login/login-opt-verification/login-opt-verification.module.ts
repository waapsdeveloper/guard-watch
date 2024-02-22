import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginOptVerificationComponent } from './login-opt-verification.component';
import { IonicModule } from '@ionic/angular';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';
import { PinInputModule } from 'src/app/components/pin-input/pin-input.module';



@NgModule({
  declarations: [LoginOptVerificationComponent],
  imports: [
    CommonModule,
    IonicModule,
    InputBoxModule,
    PinInputModule
  ],
  exports: [
    LoginOptVerificationComponent
  ]
})
export class LoginOptVerificationModule { }
