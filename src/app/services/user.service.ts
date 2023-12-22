import { Injectable } from '@angular/core';
import { NavService } from './nav.service';
import { NetworkService } from './network.service';
import { SqliteService } from './sqlite.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _user: any;
  avatar = null

  constructor(
    public utilityProvider: UtilityService,
    public sqlite: SqliteService,
    public network: NetworkService,
  ) { }

  login(user: any) {

    this.network.login(user).then(
      async (res) => {
        var token = res.result.token
        localStorage.setItem('token',token)
        console.log('bbbbbbbbbbb', res.result.token, token);
        if(res.role_id == 3){
          console.log('guard');
          this.nav.push('./pages/guard/dashboard')
        }else{
          console.log('resident');

          this.nav.push('./pages/user/dashboard')
        }

      }, err => { });

  }

  signUp(data: any) {

    this.network.signUp(data).then(
      async (res) => {

        // validations;

        this.nav.push('pages/user');



      }, err => { });

  }



  async logout(sw = null) {
    // this.menuCtrl.enable(false, 'authenticated');
    // await this.sqlite.setLogout();
    localStorage.removeItem('token');
    if (!sw) {
      // this.nav.setRoot('pages/tutorial');
      this.nav.setRoot('pages/login');
    } else {
      this.nav.setRoot('pages/login', { switchUser: true, phone_number: sw['phone_number'] });
    }

  }

  public getAllUsers() {
    return new Promise(async resolve => {
      this.network.getAllusers().then(async (res) => {
        console.log('sdsdsdsd', res);

        res = res.user;
        if (res) {
          await this.processUserData(res, false);
          resolve(res);
        } else {
          // redirect to steps
          this.logout();
        }
      }, err => {
        this.logout();
      });
    })
  }


  public getActiveUser() {
    // return this.sqlite.getActiveUser();
  }

  public getUser() {

    return new Promise(async resolve => {
      this.network.getUser().then(async (user: any) => {

        user = user.user;
        if (user) {
          await this.processUserData(user, false);
          resolve(user);
        } else {
          // redirect to steps
          this.logout();
        }
      }, err => {
        this.logout();
      });
    })

  }


  async processUserData(user: any, showResetPass = false) {

    return new Promise(async (resolve) => {
      // const _user = user
      // localStorage.setItem('token', user.access_token);
      // user.fcm_token = await this.firebaseService.getFCMToken();
      // this.user_role_id = parseInt(_user['role_id']);
      // this.utilityProvider.setKey('user_role_id', this.user_role_id);

      // const saveduser = await this.sqlite.setUserInDatabase(user);
      // // this.menuCtrl.enable(true, 'authenticated');
      // if (!saveduser) {
      //   this.logout();
      //   return;
      // }

      // this.setUser(saveduser);
      console.log('dsbfjvhbnvjkbhufkdh');

      if (!showResetPass) {

        this.nav.setRoot('pages/tabs');
        resolve(true);
      } else if (showResetPass) {
        // this.nav.setRoot('pages/update-password', { user: saveduser });
        resolve(false);
      }
      // this.canBeResident = (parseInt(saveduser["can_user_become_resident"]) == 1);
      // this.canShowSettings = parseInt(saveduser["role_id"]) != 7

      // let currentUrl = this.nav.router.url;
      // console.log(currentUrl);

      // if (currentUrl == '/1/DashboardPage') {
      //   this.events.publish('dashboard:initialize');
      // } else {
      //   this.nav.setRoot('1/DashboardPage',
      //     {
      //       showelcome: showelcome,
      //       animate: true,
      //       direction: 'forward'
      //     }
      //   );
      // }
    })


  }


  setUser(user: any) {
    this._user = user;
  }

  getCurrentUser() {
    return this._user;
  }

  update(data: any, token: any) {
    return {
      data,
      token
    };
  }









}
