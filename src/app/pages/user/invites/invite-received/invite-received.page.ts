import { Component, Injector, OnInit } from '@angular/core';
import { log } from 'console';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { InviteReceivedBarcodeComponent } from './invite-received-barcode/invite-received-barcode.component';

@Component({
  selector: 'app-invite-received',
  templateUrl: './invite-received.page.html',
  styleUrls: ['./invite-received.page.scss'],
})
export class InviteReceivedPage extends BasePage implements OnInit {
  listt: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.initialize()
  }
  async initialize() {
    const res = await this.invites.getInvitesReceived('active') as any;
    this.listt = res.result;
  }
  openModal(item: any) {
    console.log(item, 'abdullah');
    this.modals.present(InviteReceivedBarcodeComponent, { item }, '', 0.50)
  }
}
