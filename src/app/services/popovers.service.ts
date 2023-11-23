import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoversService {

  constructor(public popoverController: PopoverController) { }

  present(ev: any, data = {}, cssClass = 'my-custom-class'): Promise<any> {

    return new Promise( async resolve => {

      const popover = await this.popoverController.create({
        component: PopoverComponent,
        cssClass: cssClass,
        event: ev,
        translucent: true,
        componentProps: data
      });

      popover.onDidDismiss().then( v => {
        resolve(v);
      })

      await popover.present();

    })

  }


}
