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
  ngOnInit() {}

  initialize(value: any) {
    console.log('test', value);
  }
}
