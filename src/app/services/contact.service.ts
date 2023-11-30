import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { SqliteService } from './sqlite.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    public utilityProvider: UtilityService,
    public sqlite: SqliteService,
    public network: NetworkService,
    public nav: NavService,
  ) { }

  addContact(data: any) {

    this.network.addContact(data).then(
      async (res) => {

        console.log('bbbbbbbbbbb', res);


      }, err => { });

  }

}
