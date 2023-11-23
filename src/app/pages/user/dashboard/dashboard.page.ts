import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  userId:any;
  user:any;
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.userId = localStorage.getItem('user_id');
    this.user = this.datum.getUserById(this.userId);
  }


  showDetails(){
    this.nav.push('/pages/user/pass-detail')
  }

  openPage(page: string){

    switch (page) {
      case 'contact':
        this.nav.push('pages/user/contacts')
      break;


    }
  }

}
