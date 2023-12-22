import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { AddSpacesComponent } from './add-spaces/add-spaces.component';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.page.html',
  styleUrls: ['./spaces.page.scss'],
})
export class SpacesPage extends BasePage implements OnInit {

  constructor(injector: Injector) {
    super(injector)
   }

  ngOnInit() {
  }

  openAddSpaces(){
    this.modals.present(AddSpacesComponent);
  }

}
