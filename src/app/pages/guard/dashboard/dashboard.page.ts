import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ScanResultPage } from '../scan-result/scan-result.page';
import { Capacitor } from '@capacitor/core';
import { InviteService } from 'src/app/services/invite.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage extends BasePage implements OnInit {
  userId: any;
  user: any;
  showOptions = false;
  item: any;
  constructor(injector: Injector, private invite: InviteService) {
    super(injector);
  }

  ngOnInit() {
    this.userId = localStorage.getItem('user_id');
    this.user = this.datum.getUserById(this.userId);
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  async scan() {
    this.showOptions = false;
    console.log('Scan clicked');
    this.initiateBarcodeScan();
    // await this.presentAlert();
    // this.nav.push('/pages/guard/qrcode-reader')
  }

  showPerson() {
    this.showOptions = false;
    console.log('Person clicked');
    this.nav.push('/pages/guard/resident');
  }

  async initiateBarcodeScan() {
    if (Capacitor.getPlatform() == 'web') {
      let array = ['8jenw2GAzbTCTrcgQ9mQ'];
      const randomElement = array[Math.floor(Math.random() * array.length)];
      let obj = {
        qrcode: randomElement,
      };

      const res = (await this.invite.getQrCodeData(obj)) as any;
      console.log('Res Data', res);
      this.modals.present(ScanResultPage, {
        object: res.invite,
      })
      // this.nav.push('/pages/guard/scan-result', {
      //   object: JSON.stringify(res),
      // });

      return;
    }
  }
}
