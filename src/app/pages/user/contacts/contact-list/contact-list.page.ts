import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { AddContactsComponent } from '../add-contacts/add-contacts.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage extends BasePage implements OnInit {
  contacts: any;
  filteredContacts: any;
  search:any;
  constructor(injector: Injector) {
    super(injector);
    this.initialize();
  }

  ngOnInit() {}

  initialize() {
    this.getcontacts();
  }

  async getcontacts() {
    this.contacts = await this.contact.getAllcontact();
  }


  async openAddContacts() {
    const res = await this.modals.present(AddContactsComponent);
    this.contacts.push(res.data.result)
  }


  onSearch(event: any) {
    const searchTerm = event.detail.value.toLowerCase();

    // Filter contacts based on the search term
    this.filteredContacts = this.contacts.filter((contact: any) => {
      return (
        contact.name.toLowerCase().includes(searchTerm) ||
        (contact.dial_code + contact.phone_number).includes(searchTerm)
      );
    });
  }
}
