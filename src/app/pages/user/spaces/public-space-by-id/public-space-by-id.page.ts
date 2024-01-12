import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { PublicSpaceComponent } from 'src/app/components/public-space/public-space.component';

@Component({
  selector: 'app-public-space-by-id',
  templateUrl: './public-space-by-id.page.html',
  styleUrls: ['./public-space-by-id.page.scss'],
})
export class PublicSpaceByIdPage extends BasePage implements OnInit {
  _object: any;

  @Input()
  public get object(): any {
    return this._object;
  }
  public set object(value: any) {
    this._object = value;

    this.initialize(value);
  }
  constructor(injector: Injector) {
    super(injector)

  }

  ngOnInit() {
  }
  initialize(value: any) {

  }
  SendRequest() {
    console.log("button clickedd", this.object);


    this.modals.present(PublicSpaceComponent)

  }
}
