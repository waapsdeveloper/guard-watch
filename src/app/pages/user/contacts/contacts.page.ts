import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { AddContactsComponent } from './add-contacts/add-contacts.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
   }

  ngOnInit() {
  }
  openAddContacts(){
    this.modals.present(AddContactsComponent);
  }

}
