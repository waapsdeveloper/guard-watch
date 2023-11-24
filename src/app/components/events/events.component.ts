import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent extends BasePage implements OnInit {
  events: any;
  filteredEvents: any;
  searchQuery: string = '';
  search: any;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.events = this.datum.getAllEvents();
  }
}
