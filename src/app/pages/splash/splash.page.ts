import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage extends BasePage implements OnInit {

  isLoading = false;
  constructor(
    injector: Injector
  ) {
    super(injector);
    this.initialize();
  }

  ngOnInit() {
  }

  initialize(){
    setTimeout( () => {
      this.nav.push('pages/tutorial')
    }, 3000);
  }

}
