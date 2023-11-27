import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading!: HTMLIonLoadingElement;
  constructor(public loadingController: LoadingController) {}


  async showLoader(message = 'Please wait...') {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message,
    });
    await this.loading.present();

  }

  async hideLoader(){
    this.loading.dismiss();
  }

}
