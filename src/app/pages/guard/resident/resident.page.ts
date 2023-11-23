import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.page.html',
  styleUrls: ['./resident.page.scss'],
})
export class ResidentPage extends BasePage implements OnInit {

  user: any;
resident: any;
  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit() {
    this.user = this.datum.getAllUsers()
  }


}
