import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss'],
})
export class AddContactsComponent extends BasePage implements OnInit {
  obj: any = {
    name: '',
    phone_number: '',
    email: '',
    dial_code: '',
  };

  constructor(injector: Injector, public contact: ContactService) {
    super(injector);
  }

  ngOnInit() {}

  async close() {
    const res = await this.contact.addContact(this.obj);

    console.log('resssssss',res);

    this.modals.dismiss(res);
  }

  result(event: any, type: any) {
    this.obj[type] = event;
  }
}
