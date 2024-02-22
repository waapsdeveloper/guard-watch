import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UtilityService } from './utility.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(
    public utility: UtilityService,
    public api: ApiService,
    public router: Router
  ) {
    // console.log('Hello NetworkProvider Provider');
  }

  login(data: any) {
    return this.httpPostResponse('auth/login', data, null, true);
  }
  signUp(data: any) {
    return this.httpPostResponse('auth/register', data, null, true);
  }

  isPhoneExistAndVerifiedOnDevice(data: any){
    return this.httpPostResponse('auth/is-phone-exist-and-verified-on-device', data, null, false);
  }

  /*
  * INVITES
  */
  deleteSpaceAdminById(id: number) {

    return this.httpDeleteResponse('spaces/delete-space-admin/' + id, null, null, true, true);
  }
  getInviteById(id: number) {
    return this.httpGetResponse('invite-requests/list/space-invites/' + id, null, false, false);
  }
  ///invites/by-id/

  getinvitesByIdWithContacts(id: number) {
    return this.httpGetResponse('invites/by-id/' + id + '/with-contacts', null, false, false);
  }

  deleteContactFromInvite(data: any) {
    return this.httpPostResponse('invites/delete-invite-contacts', data, null, true);
  }
  qrCode(data: any) {
    return this.httpPostResponse('invites/scan-qrcode', data, null, false);

  }

  addInvite(data: any) {
    return this.httpPostResponse('invites/add', data, null, true);
  }
  sendInvite(data: any) {
    return this.httpPostResponse('invite-requests/add', data, null, true);
  }

  getInvitesBySpaceId(id: number) {
    return this.httpGetResponse('invites/list/by-space-id/' + id, null, false, false);
  }

  /*
  * SPACES
  */

  addSpaceAdmin(data: any) {
    return this.httpPostResponse('spaces/add-space-admin', data, null, true)
  }
  getmoderatorsByUserId() {
    return this.httpGetResponse('spaces/get-my-moderation-spaces-by-user-id', null, false, false);
  }

  addSpace(data: any) {
    return this.httpPostResponse('spaces/add', data, null, true);
  }
  deleteSpaceAdmin(data: any) {
    return this.httpPostResponse('spaces/add', data, null, true);
  }

  getInvitesReceived(active: any) {
    return this.httpGetResponse('invites/received?type=' + active, null, false, false)
  }


  getAllSpaces(params: any) {
    const str = this.serialize(params);
    return this.httpGetResponse('spaces/list?' + str, null, false, false);
  }

  getSpaceAdminById(id: number) {
    return this.httpGetResponse('spaces/get-space-admins/' + id, null, false, false);
  }

  getSpaceById(id: number) {
    return this.httpGetResponse('spaces/by-id/' + id, null, false, false);
  }

  getSpaceDetailsById(id: number) {
    return this.httpGetResponse('spaces/details/by-id/' + id, null, false, false);
  }

  getGlobalSpaces(params: any) {
    const str = this.serialize(params);
    return this.httpGetResponse('spaces/get-global-spaces?' + str, null, false, false);
  }

  /*
  * Events
  */

  getAllEvents() {
    return this.httpGetResponse('events/list', null, false, false);
  }

  addEvents(data: any) {
    return this.httpPostResponse('events/add', data, null, true);
  }

  /*
  * Contacts
  */

  addContact(data: any) {
    return this.httpPostResponse('contacts/add', data, null, true);
  }


  getAllContacts(loader = false) {
    return this.httpGetResponse('contacts/list', null, loader, false);
  }

  /*
  * SPACES
  */



  getAllusers(loader = false) {
    return this.httpGetResponse('users', null, loader, false);
  }

  getUser(loader = false) {
    return this.httpGetResponse('auth/user', null, loader, false);
  }

  serialize = (obj: { [x: string]: string | number | boolean; }) => {
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  };

  httpPostResponse(
    key: string,
    data: any,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'post',
      key,
      data,
      id,
      showloader,
      showError,
      contenttype
    );
  }

  httpGetResponse(
    key: string,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return this.httpResponse(
      'get',
      key,
      {},
      id,
      showloader,
      showError,
      contenttype
    );
  }

  httpPutResponse(
    key: string,
    data: any,
    id = "",
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return new Promise((resolve, reject) => {
      id = id ? `/${id}` : '';
      const url = key + id;

      this.api.put(key, data).subscribe((res: any) => {
        if (res.bool !== true) {
          if (showError) {
            this.utility.presentSuccessToast(res.message);
          }
          reject(null);
        } else {
          resolve(res.result);
        }
      });
    });
  }

  httpPatchResponse(
    key: string,
    data: any,
    id = '',
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return new Promise((resolve, reject) => {
      id = id ? `/${id}` : '';
      const url = key + id;

      this.api.patch(key, data).subscribe((res: any) => {
        if (res.bool !== true) {
          if (showError) {
            this.utility.presentSuccessToast(res.message);
          }
          reject(null);
        } else {
          resolve(res.result);
        }
      });
    });
  }

  httpDeleteResponse(
    key: string,
    data: any,
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json'
  ) {
    return new Promise((resolve, reject) => {
      this.api.delete(key).subscribe((res: any) => {
        console.log(res);
        if (res.bool !== true) {
          if (showError) {
            this.utility.presentSuccessToast(res.message);
          }
          reject(null);
        } else {
          resolve(res.result);
        }
      });
    });
  }

  // default 'Content-Type': 'application/json',
  httpResponse(
    type = 'get',
    key: string,
    data: {},
    id = null,
    showloader = false,
    showError = true,
    contenttype = 'application/json',
    returnFullResponse = false
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (showloader == true) {
        this.utility.showLoader();
      }
      const _id = id ? '/' + id : '';
      const url = key + _id;

      let reqOpts = {};
      const seq =
        type == 'get'
          ? this.api.get(url, {})
          : this.api.post(url, data, reqOpts);

      seq.subscribe(
        (res: any) => {
          if (showloader === true) {
            this.utility.hideLoader();
          }

          if (res.bool !== true) {
            if (showError) {
              this.utility.presentSuccessToast(res.message);
            }

            resolve(null)
          } else {

            resolve(res.result);
          }

        },
        (err) => {
          const error = err.error;
          if (showloader === true) {
            this.utility.hideLoader();
          }

          if (showError) {
            this.utility.presentFailureToast(error.message);
          }
          console.log(err);
          // if(err.status === 401){
          //   this.router.navigate(['splash']);
          // }
          if (returnFullResponse) {
            reject(err);
          } else {
            reject(null);
          }


        }
      );
    });
  }

  showFailure(err: string) {
    // console.error('ERROR', err);
    this.utility.presentFailureToast(err);
  }


}
