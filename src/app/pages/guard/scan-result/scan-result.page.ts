import { Component, Injector, Input, OnInit } from '@angular/core';
import { expand } from 'rxjs';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.page.html',
  styleUrls: ['./scan-result.page.scss'],
})
export class ScanResultPage extends BasePage implements OnInit {
  _object: any;
  name: any;
  phoneNumber: any;
  dailCode: any;
  sendername: any;
  senderphoneNumber: any;
  senderdailCode: any;
  visitortype: any;
  space: any;
  startdate: any;
  enddate: any;
  @Input()
  public get object(): any {
    return this._object;
  }
  public set object(value: any) {
    this._object = value;

    this.initialize(value);
  }

  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() { }

  initialize(value: any) {
    console.log('test', value);
    if (this.object && this.object.name) {
      this.name = this.object.name;
      this.phoneNumber = this.object.phone_number;
      this.dailCode = this.object.dial_code;
      this.sendername = this.object.invite.name;
      this.senderphoneNumber = this.object.invite.phone_number;
      this.senderdailCode = this.object.invite.dial_code;
      this.visitortype = this.object.invite.visitor_type;
      this.space = this.object.invite.space;
      this.startdate = this.object.invite.start_date;
      this.enddate = this.object.invite.end_date;
    }
  }

}
