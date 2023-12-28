import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { SpaceService } from 'src/app/services/space.service';
import { ContactListPage } from '../../contacts/contact-list/contact-list.page';
import { ContactsListComponent } from 'src/app/components/contacts-list/contacts-list.component';

@Component({
  selector: 'app-space-detail',
  templateUrl: './space-detail.page.html',
  styleUrls: ['./space-detail.page.scss'],
})
export class SpaceDetailPage extends BasePage implements OnInit {

  obj: any = {
  }
  constructor(injector: Injector, public activatedRoute: ActivatedRoute, private space: SpaceService) {
    super(injector)
  }

  ionViewDidEnter() {
    this.initialize()
  }

  async initialize(){
    let id = this.activatedRoute.snapshot.params['id'];
    if (!id) {
      this.nav.pop();
      return
    }
    const res = await this.space.getSpaceDetailsById(id)
    console.log('res', res);
    this.obj = res;


  }

  ngOnInit() {
  }

  openInviteList() {
    console.log("openInviteList", this.obj.id);
    localStorage.setItem('space_id', this.obj.id);
    this.nav.push('/pages/user/invites');
  }

  // openAdminList(){
  //   this.modals.present(ContactListPage)

  // }
  async openAddContacts(){
    const res = await this.modals.present(ContactsListComponent)
    console.log('res',res);

    if(res && res.data){
      console.log(res.data)
      const d = Object.assign({}, res.data);
      this.obj.contacts = d.list;
    }
  }


}
