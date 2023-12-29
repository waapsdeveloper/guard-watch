import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { SqliteService } from './sqlite.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  list: any[] = [];

  constructor(
    public utilityProvider: UtilityService,
    public sqlite: SqliteService,
    public network: NetworkService,
    public nav: NavService,
  ) { }

  public getAllSpaces() {
    return new Promise(async resolve => {

      if (this.list.length > 0) {
        resolve(this.list);
        return;
      }

      this.network.getAllSpaces().then(async (res) => {

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

  public getSpaceAdminById(id: number) {
    return new Promise(async resolve => {
      this.network.getSpaceAdminById(id).then(async (res) => {

        let d = res.result;
        console.log('ddddddddd', d);
        if (d) {
          resolve(d);
        } else {
          resolve(null);
        }
      }, err => {
        console.log('err', err);
        resolve(null);
      });
    })
  }
  //deleteSpaceAdmin
  deleteSpaceAdmin(id: number) {
    return new Promise(async resolve => {
      this.network.deleteSpaceAdminById(id).then(async (res) => {

        // let d = res.result;
        console.log('d', res);
        if (res) {
          resolve(res);
        } else {
          resolve(null);
        }
      }, err => {
        console.log('err', err);
        resolve(null);
      });
    })
  }
  
  addSpaceAdmin(data: any) {
    return new Promise(async resolve => {

      this.network.addSpaceAdmin(data).then(
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


  addSpace(data: any) {
    return new Promise(async resolve => {

      this.network.addSpace(data).then(
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

  public getSpaceById(id: number) {
    return new Promise(async resolve => {
      this.network.getSpaceById(id).then(async (res) => {

        let d = res.result;
        console.log('d', d);
        if (d) {
          resolve(d);
        } else {
          resolve(null);
        }
      }, err => {
        console.log('err', err);
        resolve(null);
      });
    })
  }

  public getSpaceDetailsById(id: number) {
    return new Promise(async resolve => {
      this.network.getSpaceDetailsById(id).then(async (res) => {

        let d = res.result;
        console.log('d', d);
        if (d) {
          resolve(d);
        } else {
          resolve(null);
        }
      }, err => {
        console.log('err', err);
        resolve(null);
      });
    })
  }

}
