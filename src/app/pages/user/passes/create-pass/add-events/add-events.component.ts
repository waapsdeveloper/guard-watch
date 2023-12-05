import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss'],
})
export class AddEventsComponent extends BasePage implements OnInit {
  obj: any = {
    title: '',
    description: ''
    };
  constructor(injector:Injector) {
    super(injector)
   }

  ngOnInit() {}
  result(event: any, type: any) {
    this.obj[type] = event;
  }

  async close() {
    const res = await this.passes.addEvents(this.obj);

    console.log('resssssss',res);

    this.modals.dismiss(res);
  }

}
