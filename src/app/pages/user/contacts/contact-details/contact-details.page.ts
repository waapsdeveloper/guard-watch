import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage extends BasePage implements OnInit {

  @Input() item: any;
  name: any;
  dailCode:any;
  phoneNumber:any;
  constructor(private injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    if (this.item && this.item.name) {
      this.name = this.item.name;
      this.phoneNumber = this.item.phone_number
      this.dailCode = this.item.dial_code
      
    }
  }

  initialize(value: any) {
    // Your initialization logic here
  }
}
