import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list.component';
import { IonicModule } from '@ionic/angular';
import { ContactsAddModule } from './contacts-add/contacts-add.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ContactsAddModule

  ],
  exports: [ContactsListComponent]
})
export class ContactsListModule { }
