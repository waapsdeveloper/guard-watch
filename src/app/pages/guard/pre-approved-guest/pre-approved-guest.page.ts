import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-pre-approved-guest',
  templateUrl: './pre-approved-guest.page.html',
  styleUrls: ['./pre-approved-guest.page.scss'],
})
export class PreApprovedGuestPage extends BasePage implements OnInit {
  list: any;
  search:any;
  Options = [
    {
      text: 'Delete',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');

      }
    },
    {
      text: 'Cancel',
      icon: 'close',
      handler: () => {
        console.log('Cancel clicked');

      }
    },
    // Add more options as needed
  ];
  constructor(injector: Injector) {
    super(injector)
   }

  ngOnInit() {
    this.list = this.datum.getAllApprovedGuest()
  }

}
