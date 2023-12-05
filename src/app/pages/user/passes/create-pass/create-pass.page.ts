import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { EventsPage } from './events/events.page';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.page.html',
  styleUrls: ['./create-pass.page.scss'],
})
export class CreatePassPage extends BasePage implements OnInit {

  events:any;
  title: string = "";

  constructor(injector: Injector) {
    super(injector);
   }

  ngOnInit() {
  }
  async openModal(){
    var v = await this.nav.push('/pages/user/events')
    console.log('sssssssss',v);
    // var title = await this.modals.present(EventsPage)
    // this.title = title.data.result;

  }
}
