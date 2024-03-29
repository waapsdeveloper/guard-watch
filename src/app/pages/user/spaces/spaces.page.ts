import { Component, Injector, OnInit } from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';
import { BasePage } from '../../base-page/base-page';
import { AddSpacesComponent } from './add-spaces/add-spaces.component';
import { RequestInvitesPage } from './request-invites/request-invites.page';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.page.html',
  styleUrls: ['./spaces.page.scss'],
})
export class SpacesPage extends BasePage implements OnInit {

  list: any = [];

  constructor(injector: Injector, public spaces: SpaceService) {
    super(injector)
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.list = await this.spaces.getAllSpaces();
  }

  async openAddSpaces() {
    const res = await this.modals.present(AddSpacesComponent);
    this.list = await this.spaces.getAllSpaces();
  }

  openDetails(item: any) {
    console.log(item.id, 'item.id');
    localStorage.setItem('space_id', item.id)
    let url = `/pages/user/spaces/details/${item.id}`
    this.nav.push(url);
  }



}
