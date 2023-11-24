import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.page.html',
  styleUrls: ['./resident.page.scss'],
})
export class ResidentPage extends BasePage implements OnInit {
c: any;


  user: any;
resident: any;
Options = [

  {

    text: 'Call Resident',
    icon: '',
    handler: () => {
      console.log('Delete clicked');
      this.nav.push('/pages/guard/call-resident');
    }
  },
  {
    text: 'Verified by Guard',
    icon: '',
    handler: () => {
      console.log('verified clicked');
      this.nav.push('/pages/guard/verified-by-guard');
    }
  },
  {
    text: 'Pre Approved Guest',
    icon: '',
    handler: () => {
      console.log('preapp clicked');
      this.nav.push('/pages/guard/pre-approved-guest');
    }
  },
];
  constructor(injector: Injector) {
    super(injector);
   }
  ngOnInit() {
    this.user = this.datum.getAllUsers()

    console.log(this.resident,'dsafgdfhfgjd');

  }
  openResidentDetails(resident: any) {
    this.resident = resident
    localStorage.setItem('resident_id',this.resident.id);
    console.log(this.resident,'asasasassasassssssssss');
  }
}
