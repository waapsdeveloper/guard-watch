import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-invite-detail-owner',
  templateUrl: './invite-detail-owner.page.html',
  styleUrls: ['./invite-detail-owner.page.scss'],
})
export class InviteDetailOwnerPage extends BasePage implements OnInit {
  inviteId: any;
  list: any;
  item: any = [];
  ishow = false;
  constructor(injector: Injector) {
    super(injector)

    this.inviteId = localStorage.getItem('invites_id');
    this.initialize()
  }

  ngOnInit() {
  }
  async initialize() {
    const res = await this.invites.getInvitesByIdWithContacts(this.inviteId) as any;
    this.list = res.contacts
    this.item = res.invite
    console.log('sssss', this.list, this.item);
  }
  setItemColor(item: any) {
    this.ishow = true;
    if (item.selected == true) {
      return 'light'
    } else {
      return ''
    }
  }
}
