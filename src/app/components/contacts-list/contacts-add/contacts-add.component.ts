import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { ContactService } from 'src/app/services/contact.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.scss'],
})
export class ContactsAddComponent  implements OnInit {

  isLoading: boolean = false;
  obj: any = {
    name: '',
    phone_number: '',
    dial_code: '+92'
  }
  constructor(private utility: UtilityService, private contact: ContactService, private modals: ModalService) { }

  ngOnInit() {}

  result(event: any, type: any) {
    this.obj[type] = event
  }

  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }

  async save(){
    console.log('save', this.obj);
    if(!this.obj.name || !this.obj.phone_number){
      this.utility.presentFailureToast('Please fill in all the required fields.');
      return;
    }

    const res = await this.contact.addContact(this.obj);
    console.log('res',res);
    this.modals.dismiss(this.obj);
  }

}
