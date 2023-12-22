import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.page.html',
  styleUrls: ['./space-detail.page.scss'],
})
export class SpaceDetailPage extends BasePage implements OnInit {

  obj: any = {
    space_id: -1,

  }
  constructor(injector: Injector, public activatedRoute: ActivatedRoute, private space: SpaceService) {
    super(injector)
  }

  async ionViewDidEnter() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.obj.space_id = id;
    console.log('id', id);

    const res = await this.space.getSpaceById(id)
    console.log('res', res);

  }

  ngOnInit() {
  }



}
