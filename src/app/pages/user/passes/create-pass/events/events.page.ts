import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { AddEventsModule } from '../add-events/add-events.module';
import { AddEventsComponent } from '../add-events/add-events.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage extends BasePage implements OnInit {
  event:any;
  title:any;
search: any;
  constructor(injecor:Injector) {
    super(injecor);
    this.initialize();
   }

  ngOnInit() {
  }
  async initialize(){
    this.event = await this.passes.getAllEvents();
    console.log(this.event,'oooooooooo');

  }
  onTitleClick(selectedTitle: any) {
    console.log('Selected Title:', selectedTitle);
    this.nav.pop1({ selectedTitle });
  }
  async openAddEvents(){
    console.log('aaaaaa');
    var d = await this.modals.present(AddEventsComponent);
    this.event.push(d.data.result);
   }

}
