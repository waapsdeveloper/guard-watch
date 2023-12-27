import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacesListComponent } from 'src/app/components/spaces-list/spaces-list.component';
import { InviteService } from 'src/app/services/invite.service';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.page.html',
  styleUrls: ['./invites.page.scss'],
})
export class InvitesPage extends BasePage implements OnInit {
  userId: any;
  obj: any = {
    "space_id": -1,
    "invite_count": 0,
    spaces: [],
  }

  list = [];;

  constructor(injector: Injector, public activatedRoute: ActivatedRoute) {
    super(injector)
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let spid = localStorage.getItem('space_id');
    if(spid){
      this.obj.space_id = spid;
      this.initialize()
    } else {
      // this.nav.pop();
    }
  }

  inviteDetail(item: any){
    this.userId = localStorage.getItem('user_id');
    console.log(this.userId,item.user_id);
    if(this.userId == item.user_id){
      localStorage.setItem('invites_id',item.id)
      this.nav.push('pages/user/invites/invite-detail-owner');

    }else{
      this.nav.push('pages/user/invites/invite-detail')
    }
  }

  async addInvite(){
    this.nav.push('pages/user/invites/invite-create')
    // const res = await this.modals.present(CreateInviteComponent)
    // console.log('res', res);

  }

  async initialize(){

    const res = await this.invites.getInvitesBySpaceId(this.obj.space_id) as any;
    console.log('ressssss', res);

    this.obj.space_id = res.space.id;
    this.obj.spaces = [res.space];
    this.list = res.invites;
  }

  createInvite(){
    this.nav.push('pages/user/invites/invite-create')
  }

  async openAddSpaces(){
    const res = await this.modals.present(SpacesListComponent)
    console.log('res',res);

    if(res && res.data){
      console.log(res.data)
      const d = Object.assign({}, res.data);
      this.obj.spaces = d.list;

      if(this.obj.spaces.length > 0){
        this.obj.space_id = this.obj.spaces[0].id;
        localStorage.setItem('space_id', this.obj.space_id);
        this.initialize()
      }
    }
  }

}
