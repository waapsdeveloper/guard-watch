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
  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit() {
    this.user = this.datum.getAllUsers()
  }

  async openPopover($event: any) {
    const res = await this.popover.present($event, { flag: 'PASS' });
    const data = res.data;
    console.log(data);

    if (data) {
      switch (data.param) {
        case 'CR':
          // this.nav.push('pages/call-resident');
        break;
        case 'VBG':
          // this.nav.push('pages/verified-by-guard');
          break;
        case 'PAG':
          // this.nav.push('pages/pre-approved-guest');
          break;
      }
    }
  }
}
