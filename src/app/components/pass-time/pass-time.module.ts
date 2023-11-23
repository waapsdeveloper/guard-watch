import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassTimeComponent } from './pass-time.component';



@NgModule({
  declarations: [PassTimeComponent],
  imports: [
    CommonModule
  ],
  exports: [PassTimeComponent]
})
export class PassTimeModule { }
