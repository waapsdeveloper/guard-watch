import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceAdminComponent } from './space-admin.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactsAddModule } from '../../contacts-list/contacts-add/contacts-add.module';



@NgModule({
  declarations: [SpaceAdminComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ContactsAddModule
  ],exports: [
    SpaceAdminComponent
  ]
})
export class SpaceAdminModule { }
