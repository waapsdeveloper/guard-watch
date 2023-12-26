import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteListItemComponent } from './invite-list-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InviteListItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [InviteListItemComponent]
})
export class InviteListItemModule { }
