import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupHeaderComponent } from './signup-header.component';



@NgModule({
  declarations: [SignupHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SignupHeaderComponent
  ]
})
export class SignupHeaderModule { }
