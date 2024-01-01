import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { ContactService } from 'src/app/services/contact.service';
import { ContactsAddComponent } from '../../contacts-list/contacts-add/contacts-add.component';
import { ContactsListComponent } from '../../contacts-list/contacts-list.component';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-space-admin',
  templateUrl: './space-admin.component.html',
  styleUrls: ['./space-admin.component.scss'],
})
export class SpaceAdminComponent implements OnInit {
  spaceId: any;
  roleId: any;
  obj: any = {
    contact_id: ''
  };
  objd: any = {
    id: '',
    space_id: ''
  };
  selectedItem: any;

  selectedItems: any[] = [];
  selectedContactId = null;

  list: any;
  constructor(private modals: ModalService, private contact: ContactService, private space: SpaceService) { }

  ngOnInit() {
    this.initialize()
  }
  async initialize(){
  this.spaceId = localStorage.getItem('space_id');
    const res = await this.space.getSpaceAdminById(this.spaceId) as any;
    console.log(res, 'abdullah');
    this.list = res

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
    const res = await this.modals.present(ContactsListComponent, { flag: 'true' });
    console.log('Selected Contact', res.data.list[0].id);
    this.spaceId = localStorage.getItem('space_id');
    this.roleId = localStorage.getItem('role_id');
    this.obj.role_id = this.roleId;
    this.obj.space_id = this.spaceId;
    this.obj.contact_id = res.data.list[0].id
    const result = await this.space.addSpaceAdmin(this.obj);
    this.initialize();

  }

  async importContact() {
    console.log('importContact');
  }
  onRadioSelect(item: any) {
    this.selectedItem = item;
  }
  isListItemSelected() {
    if (this.list && Array.isArray(this.list)) {
      return this.list.filter((x: { id: null }) => x.id == this.selectedContactId).length > 0;
    }
    return false;
  }
  
  async selectedContacts() {
      let list = this.list.filter((x: { id: null; }) => x.id == this.selectedContactId);
      var id = list[0].id
      const res = await this.space.deleteSpaceAdmin(id);
      const updatedList = this.list.filter((x: { id: null }) => x.id != this.selectedContactId);

      console.log(res,updatedList.length,'abdullllll');
      localStorage.setItem('space_length', updatedList.length);
      this.modals.dismiss({res: res, length: updatedList.length})
    }
  }

