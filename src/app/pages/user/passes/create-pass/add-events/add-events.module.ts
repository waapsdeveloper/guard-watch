import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventsComponent } from './add-events.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';



@NgModule({
  declarations: [AddEventsComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    InputBoxModule
  ],exports:[AddEventsComponent]
})
export class AddEventsModule {

 }
