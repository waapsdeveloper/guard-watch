import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceSearchComponent } from './space-search.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SpaceSearchComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    SpaceSearchComponent
  ]
})
export class SpaceSearchModule { }
