import { Injectable } from '@angular/core';

const userData = require('src/app/data/users.json');

const eventsData = require('src/app/data/events.json');

@Injectable({
  providedIn: 'root'
})
export class DatumService {
  users = userData
  events = eventsData
  constructor() { }
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
