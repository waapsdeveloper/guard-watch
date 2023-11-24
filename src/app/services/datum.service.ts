import { Injectable } from '@angular/core';

const userData = require('src/app/data/users.json');

const eventsData = require('src/app/data/events.json');
const pre_approved_guest = require('src/app/data/pre-approved-guest.json');
@Injectable({
  providedIn: 'root'
})
export class DatumService {
  users = userData
  events = eventsData
  pre_approved_guest = pre_approved_guest
  constructor() { }
  getAllApprovedGuest(){
    return this.pre_approved_guest;
  }
  getAllEvents(){
    return this.events;
  }
  getAllUsers(){
    return this.users
  }
  getUserById(userId: any){
    const user = this.users.find((user: { id: any; }) => user.id == userId);
    return user;
  }
}
