import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactsComponent } from './add-contacts.component';
import { InputBoxModule } from "../../../../components/input-box/input-box.module";
import { FormsModule } from '@angular/forms';
import { CountrySelectionModule } from "../../../../components/country-selection-box/country-selection/country-selection.module";
import { CountrySelectionBoxModule } from "../../../../components/country-selection-box/country-selection-box.module";
import { IonicModule } from '@ionic/angular';



@NgModule({
    declarations: [AddContactsComponent],
    exports: [
        AddContactsComponent
    ],
    imports: [
        CommonModule,
        InputBoxModule,
        IonicModule,
        FormsModule,
        CountrySelectionModule,
        CountrySelectionBoxModule
    ]
})
export class AddContactsModule { }
