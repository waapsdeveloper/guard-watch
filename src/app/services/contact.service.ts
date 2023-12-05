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
    return new Promise(async resolve => {

    this.network.addContact(data).then(
      async (res) => {

        console.log('bbbbbbbbbbb', res.result);
        // res = res.result 
        resolve(res);
      }, err => { });
    });

  }

  public getAllcontact() {
    return new Promise(async resolve => {
      this.network.getAllContacts().then(async (res) => {
        console.log('sdsdsdsd', res);

        res = res.result;
        if (res) {
          console.log(res, 'jjjjjjjjjjjjjjj');

          resolve(res);
        } else {
        }
      }, err => {
      });
    })
  }
}
