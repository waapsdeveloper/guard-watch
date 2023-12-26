import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { EventsService } from 'src/app/services/events.service';
import { EventsAddComponent } from './events-add/events-add.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent  implements OnInit {

  list: any[] = [];
  selection: any;
  constructor(private events: EventsService, private modals: ModalService) { }

  ngOnInit() {
    this.getEvents()
  }

  async getEvents(){
    return new Promise(async (resolve) => {

      const res = await this.events.getAllEvents() as any[];
      console.log('res',res);
      this.list = res
      resolve(res);

    })


  }

  async addEvent(){
    const res = await this.modals.present(EventsAddComponent);
    console.log('res',res);
    if(res && res.data){
      this.list.unshift(res.data);
    }
  }
  setSelection(item: any){
    this.modals.dismiss(item);
  }

  setItemColor(item: any){
    if(item.id == this.selection){
      return 'light'
    }else{
      return ''
    }
  }

}
