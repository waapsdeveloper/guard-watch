import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { ContactDetailListPage } from '../../contacts/contact-detail-list/contact-detail-list.page';

@Component({
  selector: 'app-invite-detail-owner',
  templateUrl: './invite-detail-owner.page.html',
  styleUrls: ['./invite-detail-owner.page.scss'],
})
export class InviteDetailOwnerPage extends BasePage implements OnInit {
  inviteId: any;
  list: any[]=[];
  item: any = [];
  invitesObject: any = {
    invite_id: '',
    contacts: [],
  };
  selectedItems: any[] = [];
  ishow = false;
  constructor(injector: Injector) {
    super(injector)
    this.inviteId = localStorage.getItem('invites_id');
    this.initialize()

  }

  ngOnInit() {
  }
  showDeleteButton(): boolean {
    return this.list.some(item => item.checked);
  }
  async initialize() {
    const res = await this.invites.getInvitesByIdWithContacts(this.inviteId) as any;
    this.list = res.contacts
    this.item = res.invite
    console.log('sssss', this.list, this.item);
    this.invitesObject.invite_id = res.invite.id;
  }
  setItemColor(item: any) {
    this.ishow = true;
    if (item.selected == true) {
      return 'light'
    } else {
      return ''
    }
  }
  updateSelectedItems(selectedItem: any): void {
    if (selectedItem.checked) {
      this.invitesObject.contacts.push(selectedItem);
    } else {
      this.invitesObject.contacts = this.invitesObject.contacts.filter((item: any) => item !== selectedItem);
    }

    console.log('Invites Object:', this.invitesObject);
  }
  async openContactlist() {
    console.log('logggg',this.list);

    const res = await this.modals.present(ContactDetailListPage, { list: this.list });
    console.log(res)
  }



  async deleteContacts(){
    const res = await this.invites.deleteContactsFromInvites(this.invitesObject) as any;
    console.log(res,'delteed');
    const deletedContactId = res.result;
    console.log('aaaaa',deletedContactId);

    console.log(this.list,'ddddddd');
    this.list = this.list.filter(contact => !deletedContactId.includes(contact.id));
    console.log(this.list,'bbbbbbb');

  }
  deletee(){
    this.deleteContacts()
  }
}
