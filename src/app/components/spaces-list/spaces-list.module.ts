import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacesListComponent } from './spaces-list.component';
import { IonicModule } from '@ionic/angular';
import { SpacesAddModule } from './spaces-add/spaces-add.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SpacesListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SpacesAddModule
  ],
  exports: [
    SpacesListComponent
  ]
})
export class SpacesListModule { }
