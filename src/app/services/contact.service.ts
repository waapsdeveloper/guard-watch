import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { SqliteService } from './sqlite.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  filter(arg0: (contact: any) => any): any {
    throw new Error('Method not implemented.');
  }

  list: any[] = [];

  constructor(
    public utilityProvider: UtilityService,
    public sqlite: SqliteService,
    public network: NetworkService,
    public nav: NavService,
  ) { }

  public getAllcontact() {
    return new Promise(async resolve => {

      if (this.list.length > 0) {
        resolve(this.list);
        return;
      }

      this.network.getAllContacts().then(async (res) => {

        if (res.status == 200) {
          this.list = res.result;
          resolve(this.list);
        } else {
          resolve([]);
        }
      }, err => {
        console.error('err', err);
        resolve([]);
      });
    })
  }

  addContact(data: any) {
    return new Promise(async resolve => {

    this.network.addContact(data).then(
      async (res) => {

        if (res.status == 200) {
          this.list.unshift(res.result);
          resolve(res);
        } else {
          resolve(null);
        }
      }, err => {
        console.error('err', err);
        resolve(null);
      });
    });

  }
}
