import { Component, Injector, Input, OnInit } from '@angular/core';
import { expand } from 'rxjs';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.page.html',
  styleUrls: ['./scan-result.page.scss'],
})
export class ScanResultPage extends BasePage implements OnInit {
  _choise: any;
  @Input()
  public get choise(): any {
    return this._choise
  };
  public set choise(value: any) {
    this._choise = value;
  }
  constructor(injector: Injector) {
    super(injector)
    console.log("test", this.choise);
  }
  ngOnInit() {
  }

}
