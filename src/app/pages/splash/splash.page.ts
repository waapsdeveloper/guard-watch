import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage extends BasePage implements OnInit {

  isLoading = false;
  msg = "fetching data ..."

  constructor(
    injector: Injector
  ) {
    super(injector);
    this.initialize();
  }

  ngOnInit() {
  }

  async initialize(){

    let res = await this.users.getUser()
    if(res){
      this.users.userFlowRedirection(res)
    }




    // setTimeout( () => {
    //   this.nav.push('pages/login')
    // }, 3000);
  }

}
