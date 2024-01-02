import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { SpaceSearchComponent } from 'src/app/components/space-search/space-search.component';
import { SpaceService } from 'src/app/services/space.service';
import { AlertController } from '@ionic/angular';
const usermenu = require("./../../../data/user-menu.json")

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  userId: any;
  user: any;
  menu: any[] = [];
  list: any;
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
  constructor(injector: Injector, private space: SpaceService, private alertController: AlertController) {
    super(injector)
  }

  ngOnInit() {
    this.initialize()
    this.menu = usermenu;
    this.userId = localStorage.getItem('user_id');
    this.user = this.datum.getUserById(this.userId);
  }
  async initialize() {
    const res = await this.space.getmoderatorsByUserId();
    this.list = res
    console.log(this.list, 'resssherere');

  }
  async setItemColor(item: any) {
    console.log('hellpo', item);

    if (item.role.display_name == 'Guard') {
      this.nav.push('./pages/guard/dashboard');
    } else {
      
    localStorage.setItem('space_id',item.space.id)
    let url = `/pages/user/spaces/details/${item.space.id}`
    this.nav.push(url);
    }
  }


  showDetails() {
    this.nav.push('/pages/user/pass-detail')
  }

  openPage(page: string) {

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
  goToContects() {
    this.nav.push('pages/user/contacts')
  }

  async handleGlobalInput($event: any) {
    let v = $event.target.value;
    const res = await this.modals.present(SpaceSearchComponent, {
      search: v
    }, '', 0.75)

    console.log(res);
    if (res.data && res.data.item) {
      let t = res.data.item;
      console.log(t);
      this.nav.push('/pages/user/spaces/public-space-by-id/' + t.id)
    }

  }


}
