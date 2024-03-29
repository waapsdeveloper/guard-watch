import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private network: NetworkService) { }

  addInvite(data: any) {
    return new Promise(async (resolve) => {

      const res = await this.network.addInvite(data);
      console.log('res', res);
      resolve(res);
    })
  }

  sendinvite(data: any) {
    return new Promise(async (resolve) => {
      const res = await this.network.sendInvite(data);
      console.log('res', res);
      resolve(res);
    })
  }

  deleteContactsFromInvites(obj: any) {
    return new Promise(async (resolve) => {
      const res = await this.network.deleteContactFromInvite(obj);
      console.log('DeleteContacts', res);
      resolve(res);
    })
  }
  getQrCodeData(data: any) {
    return new Promise(async (resolve) => {
      const res = await this.network.qrCode(data)
      console.log('ressssss', res);
      if (res.status != 200) {
        resolve(null);
        return;
      }

      resolve(res.result);
    })
  }
  getInvitesReceived(active: any) {
    return new Promise(async (resolve) => {

      const res = await this.network.getInvitesReceived(active);
      console.log('ressssss', res);
      if (res.status != 200) {
        resolve(null);
        return;
      }

      resolve(res);
    })

  }


  getInvitesByIdWithContacts(id: number) {
    return new Promise(async (resolve) => {

      const res = await this.network.getinvitesByIdWithContacts(id);
      console.log('responseinvites', res);
      if (res.status != 200) {
        resolve(null);
        return;
      }

      resolve(res.result);
    })

  }

  getInvitesBySpaceId(id: number) {
    return new Promise(async (resolve) => {

      const res = await this.network.getInvitesBySpaceId(id);
      console.log('res', res);
      if (res.status != 200) {
        resolve(null);
        return;
      }

      resolve(res.result);
    })

  }

}
