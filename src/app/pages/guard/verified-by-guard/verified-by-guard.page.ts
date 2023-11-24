import { Component, Injector, OnInit } from '@angular/core';
import { log } from 'console';
import { BasePage } from '../../base-page/base-page';
import { EventsComponent } from 'src/app/components/events/events.component';

@Component({
  selector: 'app-verified-by-guard',
  templateUrl: './verified-by-guard.page.html',
  styleUrls: ['./verified-by-guard.page.scss'],
})
export class VerifiedByGuardPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
   }

  ngOnInit() {
  }

  OpenModal(){
    console.log('modal');
    this.modals.present(EventsComponent);
  }
}
