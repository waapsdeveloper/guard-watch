import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private network: NetworkService) { }

  addInvite(data: any){
    return new Promise(async (resolve) => {

      const res = await this.network.addInvite(data);
      console.log('res',res);
      resolve(res);
    })

  }
  getInvitesByIdWithContacts(id: number){
    return new Promise(async (resolve) => {

      const res = await this.network.getinvitesByIdWithContacts(id);
      console.log('responseinvites',res);
      if(res.status != 200){
        resolve(null);
        return;
      }

      resolve(res.result);
    })

  }

  getInvitesBySpaceId(id: number){
    return new Promise(async (resolve) => {

      const res = await this.network.getInvitesBySpaceId(id);
      console.log('res',res);
      if(res.status != 200){
        resolve(null);
        return;
      }

      resolve(res.result);
    })

  }

}
