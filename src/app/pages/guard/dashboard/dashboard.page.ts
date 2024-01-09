import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { ScanResultPage } from '../scan-result/scan-result.page';

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
  constructor(injector: Injector, public actionSheet: ActionSheetController, private alertController: AlertController) {
    super(injector)

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
    console.log('Scan clicked')
    await this.presentAlert();


  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Enter Id',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.handleAlertChoice(data);
          },
        },
      ],
      inputs: [
        {
          label: 'Guard',
          type: 'number',
          value: '',
        },
      ],
    });

    await alert.present();
  }
  handleAlertChoice(choice: any) {
    console.log(choice);
    this.nav.push('/pages/guard/scan-result/'+ choice);
  }
  showPerson() {
    this.showOptions = false;
    console.log('Person clicked');
    this.nav.push('/pages/guard/resident')
  }
}
