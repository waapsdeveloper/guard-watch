import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebService {

  constructor() { }

  verifyPhoneNumber(dial_code: string, phone_number: string){

    return new Promise( resolve => {

      setTimeout( () => {
        resolve(true)
      }, 3000)
    })


  }
}
