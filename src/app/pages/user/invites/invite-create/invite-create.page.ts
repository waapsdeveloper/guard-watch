import { Component, Injector, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ContactsListComponent } from 'src/app/components/contacts-list/contacts-list.component';
import { EventsListComponent } from 'src/app/components/events-list/events-list.component';
import { SpacesListComponent } from 'src/app/components/spaces-list/spaces-list.component';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { InviteService } from 'src/app/services/invite.service';
import { SpaceService } from 'src/app/services/space.service';


@Component({
  selector: 'app-invite-create',
  templateUrl: './invite-create.page.html',
  styleUrls: ['./invite-create.page.scss'],
})
export class InviteCreatePage extends BasePage implements OnInit {

  events:any;
  title: string = "";
  extras: any = {
    "tn-note-789678": false,
    "invite-created": false,
  }
  obj: any = {
    event_id: -1,
    space_id: -1,
    validity: 60,
    start_date: '',
    end_date: '',
    visitor_type: 'guest',
    pass_type: 'one-time',
    contacts: [],
    spaces: [],
    comments: '',
  }

  constructor(injector: Injector, private invite: InviteService, private space: SpaceService) {
    super(injector);
   }

  ngOnInit() {

    // check note to visible
    this.extras['tn-note-789678'] = localStorage.getItem('tn-note-789678') == 'true' ? true : false;

    // setDate and Times of the event
    this.obj.start_date = moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    this.obj.end_date = moment().add(1, 'hour').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    this.obj.visitor_type = 'guest';
    this.obj.pass_type = 'one-time';
    this.obj.validity = 60;

  }

  ionViewDidEnter() {
    let spid = localStorage.getItem('space_id');
    if(spid){
      this.obj.space_id = spid;
      this.initializeSpace()
    } else {
      this.nav.pop();
    }
  }

  async initializeSpace(){
    let id = this.obj.space_id;
    const res = await this.space.getSpaceById(id)
    console.log('res', res);
    if(res){
      this.obj.spaces = [res];
      if(this.obj.spaces.length > 0){
        this.obj.space_id = this.obj.spaces[0].id;
      }
    }

  }

  async selectEvent(){
    // var v = await this.nav.push('/pages/user/events')
    // console.log('sssssssss',v);
    const res = await this.modals.present(EventsListComponent)
    console.log('res',res);
    if(res && res.data){
      this.obj.event_id = res.data.id;
      this.title = res.data.title;
    }

  }



  timeSelection(type: string, $event: any){
    console.log('type',type);
    console.log('$event', $event);
    this.obj[type] = $event.detail.value;

    if(type == 'start_date'){
      this.obj.end_date = moment(this.obj.start_date).add(this.obj.validity, 'minute').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    }

    if(type == 'end_date'){
      this.obj.start_date = moment(this.obj.end_date).subtract(this.obj.validity, 'minute').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
    }

  }

  async openAddContacts(){
    const res = await this.modals.present(ContactsListComponent)
    console.log('res',res);

    if(res && res.data){
      console.log(res.data)
      const d = Object.assign({}, res.data);
      this.obj.contacts = d.list;
    }
  }

  async openAddSpaces(){
    const res = await this.modals.present(SpacesListComponent)
    console.log('res',res);

    if(res && res.data){
      console.log(res.data)
      const d = Object.assign({}, res.data);
      this.obj.spaces = d.list;

      if(this.obj.spaces.length > 0){
        this.obj.space_id = this.obj.spaces[0].id;
      }
    }
  }



  async addInvite(){
    if (this.obj.event_id == -1){
      this.utility.presentFailureToast('Please select an event');
      return;
    }

    if(this.obj.contacts.length == 0){
      this.utility.presentFailureToast('Please add contacts');
      return;
    }

    if(!this.obj.comments){
      this.utility.presentFailureToast('Please add comments');
      return;
    }


    console.log('obj',this.obj);

    const res = await this.invite.addInvite(this.obj)
    console.log('res',res);

    this.extras['invite-created'] = true;
    this.utility.presentSuccessToast('Invite created successfully');
    this.extras["invite-created"] = true;

    setTimeout(() => {
      this.nav.pop()
    }, 1000);



  }

  hideNotes(key: string){
    this.utility.presentConfirm('I have Read it', 'May be',  'Do you like to view this node again?').then((res)=>{
      console.log('res',res);
      if(res){
        localStorage.setItem(key, 'true');
      }

      this.extras['tn-note-789678'] = true;


    })

  }

}

