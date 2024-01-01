import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ContactsAddComponent } from 'src/app/components/contacts-list/contacts-add/contacts-add.component';
import { ContactService } from 'src/app/services/contact.service';
import { ContactDetailsPage } from './contact-details/contact-details.page';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage extends BasePage implements OnInit {
  list: any[] = [];

  constructor(injector: Injector, private contact: ContactService) {
    super(injector);
    this.getAllcontact()
  }

  ngOnInit() {

  }

  getAllcontact() {
    return new Promise(async (resolve) => {

      const res = await this.contact.getAllcontact() as any[];
      console.log('res', res);
      this.list = res
      resolve(res);

    })
  }

  setItemColor(item: any) {

    this.modals.present(ContactDetailsPage, { item: item });
    console.log("testt", item);

    if (item.selected == true) {
      return 'light'
    } else {
      return ''
    }
  }

  async openAddContacts() {
    console.log('addContact');
    const res = await this.modals.present(ContactsAddComponent);
    console.log('res', res);

    this.getAllcontact()
  }

  async importContact() {
    console.log('importContact');
  }

  isListItemSelected() {
    return this.list.filter(x => x.checked == true).length > 0;
  }

  selectedContacts() {
    let list = this.list.filter(x => x.checked == true);
    this.modals.dismiss({ list: list });
  }


}
