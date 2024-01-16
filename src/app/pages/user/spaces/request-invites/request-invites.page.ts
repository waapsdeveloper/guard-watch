import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-request-invites',
  templateUrl: './request-invites.page.html',
  styleUrls: ['./request-invites.page.scss'],
})
export class RequestInvitesPage extends BasePage implements OnInit {
  list: any;
  data: any;
  _id: any;
  @Input() get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
    console.log("tetst", value);
    this.initialize(value);

  }

  constructor(injector: Injector, private space: SpaceService) {
    super(injector)

  }

  ngOnInit() {
  }
  async initialize(value: any) {
    console.log("fgdd", value);
    let res = await this.space.getRequests(value)
    this.data = res
    this.list = this.data.result.invites;
    console.log(this.list, 'resssherere');
  }
}
