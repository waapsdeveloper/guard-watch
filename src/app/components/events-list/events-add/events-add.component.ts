import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.scss'],
})
export class EventsAddComponent  implements OnInit {

  isLoading = false;
  obj: any = {
    title: '',
    description: '',
  };
  constructor(private event: EventsService, private modals: ModalService) { }

  ngOnInit() {}

  result(event: any, type: any) {
    this.obj[type] = event
  }

  async save(){
    console.log('save');
    if (!this.obj.title || !this.obj.description) {
      console.error('Please fill in all the required fields.');
      return;
    }

    this.isLoading = true;
    const res = await this.event.addEvent(this.obj)
    console.log('res',res);
    this.isLoading = false;
    this.modals.dismiss(res)



  }

}
