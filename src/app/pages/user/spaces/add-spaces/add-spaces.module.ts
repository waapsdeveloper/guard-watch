import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSpacesComponent } from './add-spaces.component';
import { IonicModule } from '@ionic/angular';
import { InputBoxModule } from 'src/app/components/input-box/input-box.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddSpacesComponent],
  imports: [CommonModule, InputBoxModule, IonicModule, FormsModule],
  exports: [AddSpacesComponent],
})
export class AddSpacesModule {}
