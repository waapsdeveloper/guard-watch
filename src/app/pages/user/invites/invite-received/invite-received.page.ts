import { Component, Injector, OnInit } from '@angular/core';
import { log } from 'console';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-invite-received',
  templateUrl: './invite-received.page.html',
  styleUrls: ['./invite-received.page.scss'],
})
export class InviteReceivedPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit() {
    this.initialize()
  }
  async initialize(){
    const res = await this.invites.getInvitesReceived('active');
    console.log(res);
    
  }

}
