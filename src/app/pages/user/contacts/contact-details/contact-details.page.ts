import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage extends BasePage implements OnInit {
  private _item: any;
  @Input()
  set item(value: any) {
    this._item = value;
    this.initialize(value);
  }

  get item() {
    return this._item;
  }

  constructor(injector: Injector) {
    super(injector)
    console.log("gfhsdf", this._item);
  }
  ngOnInit() { }
  initialize(value: any){
  }
}
