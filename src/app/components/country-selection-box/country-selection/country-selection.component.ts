import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
const countries = require('./../../../data/countries.json')
@Component({
  selector: 'app-country-selection',
  templateUrl: './country-selection.component.html',
  styleUrls: ['./country-selection.component.scss'],
})
export class CountrySelectionComponent  implements OnInit {

  list = countries;
  constructor(public modals: ModalService) { }

  ngOnInit() {}

  selection(item: any){
    this.modals.dismiss(item)
  }

}
