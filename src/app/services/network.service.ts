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

  /*
  * SPACES
  */

  addSpace(data: any) {
    return this.httpPostResponse('spaces/add', data, null, true);
  }

  getAllSpaces() {
    return this.httpGetResponse('spaces/list', null, false, false);
  }

  getSpaceById(id: number) {
    return this.httpGetResponse('spaces/by-id/' + id, null, false, false);
  }


  addContact(data: any) {
    return this.httpPostResponse('contacts/add', data, null, true);
  }
  addEvents(data: any) {
    return this.httpPostResponse('events/add', data, null, true);
  }
  getAllEvents(loader = false) {
    return this.httpGetResponse('events/list', null, loader, false);
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
    return this.httpGetResponse('user', null, loader, false);
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
          } else {
            resolve(res);
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
