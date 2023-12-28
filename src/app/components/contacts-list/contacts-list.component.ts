import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { ContactService } from 'src/app/services/contact.service';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  list: any[] = [];
  @Input() flag: any;
  selectedContactId = null;
  constructor(private modals: ModalService, private contact: ContactService) { }

  ngOnInit() {
    console.log(this.flag, 'asfg');

    this.getAllcontact()
  }
  flagExists(): boolean {
    return this.flag;
  }


  getAllcontact() {
    return new Promise(async (resolve) => {

      const res = await this.contact.getAllcontact() as any[];
      console.log('ressssssssssssss', res);
      this.list = res

      resolve(res);

    })
  }

  setItemColor(item: any) {

    if (item.selected == true) {
      return 'light'
    } else {
      return ''
    }
  }

  async addContact() {
    console.log('addContact');
    const res = await this.modals.present(ContactsAddComponent);
    console.log('res', res);
    this.getAllcontact()
  }
  isListItemSelected() {
    if(this.flag){
      return this.list.filter(x => x.id == this.selectedContactId).length > 0;
    } else {
      return this.list.filter(x => x.checked == true).length > 0;
    }
  }

  selectedContacts() {
    if(this.flag){
      let list = this.list.filter(x => x.id == this.selectedContactId);
      this.modals.dismiss({ list: list });
    } else {
      let list = this.list.filter(x => x.checked == true);
      this.modals.dismiss({ list: list });
    }
  }

}
