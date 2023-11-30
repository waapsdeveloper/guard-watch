import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss'],
})
export class AddContactsComponent extends BasePage implements OnInit {

  obj: any = {
    name: '',
    phone_number: '',
    email:'',
    dial_code: ''
  }

  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit() {}
  close(){

    const res = this.contact.addContact(this.obj);
    console.log(res);

    // this.modals.dismiss()
  }
  result(event: any, type: any){

    this.obj[type] = event

    console.log(this.obj);
  }

}
