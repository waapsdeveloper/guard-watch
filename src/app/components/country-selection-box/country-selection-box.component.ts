import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountrySelectionComponent } from './country-selection/country-selection.component';
import { ModalService } from 'src/app/services/basic/modal.service';

@Component({
  selector: 'app-country-selection-box',
  templateUrl: './country-selection-box.component.html',
  styleUrls: ['./country-selection-box.component.scss'],
})
export class CountrySelectionBoxComponent  implements OnInit {


  @Output() dialCodeSelected = new EventEmitter<string>();


  item: any = {
    "name": "Pakistan",
    "dial_code": "+92",
    "code": "PK"
  };
  constructor(public modals: ModalService) { }

  ngOnInit() {}

  async openCountries(){
    const res = await this.modals.present(CountrySelectionComponent)
    console.log(res)
    if(res.data){
      const c = res.data;
      console.log(c);
      this.item = c;
    }
    this.dialCodeSelected.emit(this.item.dial_code);

  }

}
