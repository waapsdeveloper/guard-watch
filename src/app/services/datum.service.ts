import { Injectable } from '@angular/core';

const userData = require('src/app/data/users.json');

@Injectable({
  providedIn: 'root'
})
export class DatumService {
  users = userData
  constructor() { }
  getAllUsers(){
    return this.users
  }
  getUserById(userId: any){
    const user = this.users.find((user: { id: any; }) => user.id == userId);
    return user;
  }
}
