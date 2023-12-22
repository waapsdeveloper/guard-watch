import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { SqliteService } from './sqlite.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(
    public utilityProvider: UtilityService,
    public sqlite: SqliteService,
    public network: NetworkService,
    public nav: NavService,
  ) { }

  addSpace(data: any) {
    return new Promise(async resolve => {

    this.network.addSpace(data).then(
      async (res) => {
        // res = res.result
        resolve(res);
      }, err => { });
    });

  }

  public getAllSpaces() {
    return new Promise(async resolve => {
      this.network.getAllSpaces().then(async (res) => {

        let d = res.result;
        console.log('d', d);
        if (d) {
          resolve(d);
        } else {
          resolve([]);
        }
      }, err => {
        console.log('err', err);
        resolve([]);
      });
    })
  }
}
