import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-dashboard-header-top',
  templateUrl: './dashboard-header-top.component.html',
  styleUrls: ['./dashboard-header-top.component.scss'],
})
export class DashboardHeaderTopComponent  implements OnInit {

  constructor(private nav: NavService) { }

  ngOnInit() {}

  openProfile(){
    this.nav.push('pages/user/profile')
  }

}
