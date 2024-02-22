import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class FirebService {

  constructor(public network: NetworkService) { }

  isPhoneExistAndVerifiedOnDevice( dialCode: string, phoneNumber: string, deviceId: string){

    return new Promise( async resolve => {

      let obj = {
        "dial_code": dialCode,
        "phone_number": phoneNumber,
        "device_id": deviceId
      }
      const res = await this.network.isPhoneExistAndVerifiedOnDevice(obj)



      setTimeout(() => {
        resolve(res)
      }, 1000);

    });

  }

  verifyPhoneNumber(dial_code: string, phone_number: string){

    return new Promise( resolve => {

      setTimeout( () => {
        resolve(true)
      }, 3000)
    })


  }
}
