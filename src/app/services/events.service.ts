import { Injectable } from '@angular/core';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private list: any[] = [];

  constructor(private network: NetworkService) { }

  getAllEvents() {
    return new Promise(async (resolve) => {

      if(this.list.length > 0){
        resolve(this.list);
        return;
      }

      const res = await this.network.getAllEvents();
      console.log('res',res);

      if(res.status != 200){
        resolve([])
        return;
      }

      this.list = res.result;
      resolve(res.result);

    })

  }

  addEvent(data: any) {
    return new Promise(async (resolve) => {

      const res = await this.network.addEvents(data);
      console.log('res',res);

      if(res.status != 200){
        resolve([])
        return;
      }

      this.list.unshift(res.result);

      resolve(res.result);
    })
  }
}
