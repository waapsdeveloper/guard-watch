import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-public-space',
  templateUrl: './public-space.component.html',
  styleUrls: ['./public-space.component.scss'],
})
export class PublicSpaceComponent extends BasePage implements OnInit {
  obj: any = {
    date: "25/12/2023",
    comment: "dgfs",
  }
  name: any;
  dial_code: any;
  phone_number: any;
  _id: any;
  @Input()
  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
    console.log("shdfjhj", value);

    this.initialize(value);
  }

  constructor(injector: Injector) {
    super(injector)

  }

  ngOnInit() { }

  initialize(value: any) {
    console.log('test', value);

  }
  result(event: any, type: string): void {
    this.obj[type] = event;
    console.log("Value changed:", this.obj[type]);
  }
  async submit() {
    if (!this.obj.date || !this.obj.comment) {
      console.error('Please fill in all the required fields.');
      return;
    }
    this.name = localStorage.getItem('username');
    this.dial_code = localStorage.getItem('dail_code');
    this.phone_number = localStorage.getItem('phone_number');

    let data = {
      space_id: this.id,
      date: this.obj.date,
      comments: this.obj.comment,
      dial_code: this.dial_code,
      name: this.name,
      phone_number: this.phone_number
    }
    let res = await this.invites.sendinvite(data) as any
  }

}
