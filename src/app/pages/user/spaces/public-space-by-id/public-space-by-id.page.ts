import { Component, Injector, Input, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { PublicSpaceComponent } from 'src/app/components/public-space/public-space.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-space-by-id',
  templateUrl: './public-space-by-id.page.html',
  styleUrls: ['./public-space-by-id.page.scss'],
})
export class PublicSpaceByIdPage extends BasePage implements OnInit {

  id: number = 0;

  constructor(injector: Injector, public activatedRoute: ActivatedRoute) {
    super(injector)

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('ID from route:', id);
      this.id = id;
    });
  }

  ngOnInit() {
  }
  initialize(value: any) {
    console.log('test', value);
  }
  SendRequest() {
    console.log("button clickedd", this.id);
    this.modals.present(PublicSpaceComponent, {
      id: this.id,
    })

  }
}
