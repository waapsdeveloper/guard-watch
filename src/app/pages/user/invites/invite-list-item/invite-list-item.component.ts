import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-invite-list-item',
  templateUrl: './invite-list-item.component.html',
  styleUrls: ['./invite-list-item.component.scss'],
})
export class InviteListItemComponent implements OnInit {
  private _item: any;

  @Input()
  set item(value: any) {
    this._item = value;
    this.setup(value);
  }

  get item() {
    return this._item;
  }

  constructor() {}

  ngOnInit() {}

  setup(value: any) {
    console.log('setup', this.item);
    this.item.date = this.dateToFromNowDaily(this.item.start_date);
  }

  // call this function, passing-in your date
  dateToFromNowDaily(myDate: any) {
    // get from-now for this date
    var fromNow = moment(myDate).fromNow();

    // ensure the date is displayed with today and yesterday
    return moment(myDate).calendar(null, {
      // when the date is closer, specify custom values
      lastWeek: '[Last] dddd',
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      // when the date is further away, use from-now functionality
      sameElse: function () {
        return '[' + fromNow + ']';
      },
    });
  }
}
