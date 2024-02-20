import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit, ViewWillEnter {

  constructor(private nav: NavService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    localStorage.clear();
    this.nav.setRoot('/')
  }


}
