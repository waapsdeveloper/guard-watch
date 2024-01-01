import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { SpaceSearchComponent } from 'src/app/components/space-search/space-search.component';
const usermenu = require("./../../../data/user-menu.json")

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  userId:any;
  user:any;
  menu: any[] = [];

  searchList = [
    {
      id: 2,
      search: "ERRRRR"
    },
    {
      id: 3,
      search: "ERRRRRt43463"
    }
  ]
  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() {
    this.menu = usermenu;
    this.userId = localStorage.getItem('user_id');
    this.user = this.datum.getUserById(this.userId);
  }


  showDetails(){
    this.nav.push('/pages/user/pass-detail')
  }

  openPage(page: string){

    switch (page) {
      case 'spaces':
        this.nav.push('pages/user/spaces')
      break;

      case 'contacts':
        this.nav.push('pages/user/contacts')
      break;

      case 'invites':
        this.nav.push('pages/user/invites')
      break;

      case 'pass':
        this.nav.push('pages/user/passes')
      break;



    }
  }
  goToContects(){
    this.nav.push('pages/user/contacts')
  }

  async handleGlobalInput($event: any){
    let v = $event.target.value;
    const res = await this.modals.present(SpaceSearchComponent, {
      search: v
    }, '', 0.75)

    console.log(res);
    if(res.data && res.data.item){
      let t = res.data.item;
      console.log(t);
      this.nav.push('/pages/user/spaces/public-space-by-id/' + t.id)
    }

  }


}
