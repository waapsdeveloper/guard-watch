import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { ContactService } from 'src/app/services/contact.service';
import { ContactsAddComponent } from '../../contacts-list/contacts-add/contacts-add.component';
import { ContactsListComponent } from '../../contacts-list/contacts-list.component';
// import { ContactsAddComponent } from './contacts-add/contacts-add.component';

@Component({
  selector: 'app-space-admin',
  templateUrl: './space-admin.component.html',
  styleUrls: ['./space-admin.component.scss'],
})
export class SpaceAdminComponent  implements OnInit {


  list: any[] = [];
  constructor(private modals: ModalService, private contact: ContactService) {}

  ngOnInit() {
    // this.getAllcontact()
  }

  getAllcontact(){
    return new Promise(async (resolve) => {

      const res = await this.contact.getAllcontact() as any[];
      console.log('ressssssssssssss',res);
      this.list = res
      resolve(res);

    })
  }

  setItemColor(item: any){

    if(item.selected == true){
      return 'light'
    }else{
      return ''
    }
  }

  async addContact(){
    console.log('addContact');
    const res = await this.modals.present(ContactsListComponent,{flag:'true'});
    console.log('Selected Contact',res);

    // this.getAllcontact()
  }

  async importContact(){
    console.log('importContact');
  }

  isListItemSelected(){
    return this.list.filter(x => x.checked == true).length > 0;
  }

  selectedContacts(){
    let list = this.list.filter(x => x.checked == true);
    this.modals.dismiss({list: list});
  }
}
