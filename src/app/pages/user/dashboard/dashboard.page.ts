import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
const usermenu = require("./../../../data/user-menu.json")

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  userId:any;
  user:any;
  menu: any[] = [];
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.menu = usermenu;
    this.userId = localStorage.getItem('user_id');
    this.user = this.datum.getUserById(this.userId);
  }


  showDetails(){
    this.nav.push('/pages/user/pass-detail')
  }

  openPage(page: string){

    switch (page) {
      case 'spaces':
        this.nav.push('pages/user/spaces')
      break;

      case 'contact':
        this.nav.push('pages/user/contacts')
      break;

      case 'pass':
        this.nav.push('pages/user/passes')
      break;



    }
  }

}
