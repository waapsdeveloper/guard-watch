import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { PublicSpaceComponent } from 'src/app/components/public-space/public-space.component';

@Component({
  selector: 'app-public-space-by-id',
  templateUrl: './public-space-by-id.page.html',
  styleUrls: ['./public-space-by-id.page.scss'],
})
export class PublicSpaceByIdPage extends BasePage implements OnInit {

  constructor(injector:Injector) {
    super(injector)
   }

  ngOnInit() {
  }
  SendRequest(){
    console.log("button clickedd");

    this.modals.present(PublicSpaceComponent)

  }
}
