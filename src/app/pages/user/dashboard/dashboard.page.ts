import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }


  showDetails(){
    this.nav.push('/pages/user/pass-detail')
  }

}
