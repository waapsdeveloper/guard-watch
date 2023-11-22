import { Component, OnInit, Injector } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
  }

  openLoginPage(){
    this.nav.push('pages/login');
  }

}
