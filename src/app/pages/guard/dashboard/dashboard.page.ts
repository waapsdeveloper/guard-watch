import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  userId:any;
  user:any;
  showOptions = false;
  constructor(injector: Injector, public actionSheet: ActionSheetController) {
    super(injector)

  }

  ngOnInit() {
    this.userId = localStorage.getItem('user_id');
    this.user = this.datum.getUserById(this.userId);
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  scan() {
    this.showOptions = false;
    console.log('Scan clicked');
  }

  showPerson() {
    this.showOptions = false;
    console.log('Person clicked');
    this.nav.push('/pages/guard/resident')
  }
}
