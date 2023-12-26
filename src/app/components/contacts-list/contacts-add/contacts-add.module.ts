import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsAddComponent } from './contacts-add.component';
import { IonicModule } from '@ionic/angular';
import { InputBoxModule } from '../../input-box/input-box.module';
import { CountrySelectionBoxModule } from '../../country-selection-box/country-selection-box.module';



@NgModule({
  declarations: [ContactsAddComponent],
  imports: [
    CommonModule,
    IonicModule,
    InputBoxModule,
    CountrySelectionBoxModule
  ],
  exports: [ContactsAddComponent]
})
export class ContactsAddModule { }
