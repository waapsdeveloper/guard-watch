import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassDateComponent } from './pass-date.component';



@NgModule({
  declarations: [PassDateComponent],
  imports: [
    CommonModule
  ],
  
  exports: [
    PassDateComponent
  ]
  
})
export class PassDateModule { }
