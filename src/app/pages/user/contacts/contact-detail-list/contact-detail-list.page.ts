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

  constructor(injector: Injector, public contact: ContactService) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.list)
  }

  initialize() {

  }

  async getcontacts() {
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
