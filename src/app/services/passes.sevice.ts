import { Injectable, Injector } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { SqliteService } from './sqlite.service';
import { UtilityService } from './utility.service';
import { basename } from 'path';
import { BasePage } from '../pages/base-page/base-page';

@Injectable({
  providedIn: 'root'
})
export class PassesService{

  constructor(
    public utilityProvider: UtilityService,
    public sqlite: SqliteService,
    public network: NetworkService,
    public nav: NavService,
  ) { }
  public getAllEvents() {
    return new Promise(async resolve => {
      this.network.getAllEvents().then(async (res) => {
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

  addEvents(data: any) {
    return new Promise(async resolve => {

    this.network.addEvents(data).then(
      async (res) => {

        console.log('bbbbbbbbbbb', res.result);
        // res = res.result
        resolve(res);
      }, err => { });
    });

  }

}
