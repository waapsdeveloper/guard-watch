import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { ContactService } from 'src/app/services/contact.service';
import { AddContactsComponent } from '../add-contacts/add-contacts.component';

@Component({
  selector: 'app-contact-detail-list',
  templateUrl: './contact-detail-list.page.html',
  styleUrls: ['./contact-detail-list.page.scss'],
})
export class ContactDetailListPage extends BasePage implements OnInit {
  @Input() list: any[] = [];
  search: any;
  invitesObject: any = {
    invite_id: '',
    contacts: [],
  };  data :any= []
  constructor(injector: Injector, public contact: ContactService) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.list)
  }

  initialize() {

  }
  setItemColor(item: any) {

    if (item.selected == true) {
      return 'light'
    } else {
      return ''
    }
  }
  isListItemSelected() {
    return this.list.filter(x => x.checked == true).length > 0;

  }
  async selectedContacts() {
    let list = this.list.filter(x => x.checked == true);
    console.log('Invites Object:', this.invitesObject);
    const res = await this.invites.deleteContactsFromInvites(this.invitesObject) as any;
    console.log(res,'delteed');
    const deletedContactId = res.result;
    console.log('aaaaa',deletedContactId);

    console.log(this.list,'ddddddd');
    this.list = this.list.filter(contact => !deletedContactId.includes(contact.id));
    console.log(this.list,'bbbbbbb');
    this.modals.dismiss({ list: list });

  }

  updateSelectedItems(selectedItem: any): void {
    if (selectedItem.checked) {
      this.invitesObject.contacts.push(selectedItem);
    } else {
      this.invitesObject.contacts = this.invitesObject.contacts.filter((item: any) => item !== selectedItem);
    }
    var invite_id = localStorage.getItem('invites_id');
    this.invitesObject.invite_id = invite_id; 
  }
  async openAddContacts() {
    const res = await this.modals.present(AddContactsComponent);
    // this.contacts.push(res.data.result);
  }

  // onSearch(event: any) {
  //   const searchTerm = event.detail.value.toLowerCase();

  //   this.filteredContacts = this.contacts.filter((contact: any) => {
  //     return (
  //       contact.name.toLowerCase().includes(searchTerm) ||
  //       (contact.dial_code + contact.phone_number).includes(searchTerm)
  //     );
  //   });
  // }
}
