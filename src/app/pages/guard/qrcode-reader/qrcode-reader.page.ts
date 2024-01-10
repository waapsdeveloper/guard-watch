import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Capacitor } from '@capacitor/core';
import { InviteService } from 'src/app/services/invite.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.page.html',
  styleUrls: ['./qrcode-reader.page.scss'],
})
export class QrcodeReaderPage implements OnInit {
  timer: any;
  date: any;
  scannedData: {} | any;
  obj: any = { qrcode: "" }


  constructor(private invite: InviteService, public nav: NavService) {
    this.initialize()
  }

  ngOnInit() {
  }

  async initialize() {
    console.log('scanCodeHere');
    const flag = await this.checkBarcodePermisson()
    console.log("flag", flag);

    this.scanCode();
  }
  checkBarcodePermisson() {
    return new Promise<any>(async (resolve) => {
      const status = await BarcodeScanner.checkPermission({ force: true });
      console.log("status", status);
      BarcodeScanner.hideBackground(); document.body.style.opacity = '0'; document.body.style.background = 'transparent';
      if (status.granted) {
        // the user granted permission
        resolve(true);
      }
      resolve(false);
    })
  }
  async scanCode() {
    console.log('scancodefunction');
    clearInterval(this.timer);
    this.callTimer();
    if (Capacitor.getPlatform() != 'web') {
      BarcodeScanner.startScan().then(async (barcodeData) => {
        this.scannedData = barcodeData.content;
        this.obj.qrcode = this.scannedData
        console.log("testyui", this.scannedData);
        const res = await this.invite.getQrCodeData(this.obj) as any
        console.log("Res Data", res);
        this.nav.push('/pages/guard/scan-result/' + res);
      })
    }
    else {

      let array = ["8jenw2GAzbTCTrcgQ9mQ"];
      const randomElement = array[Math.floor(Math.random() * array.length)];
      this.scannedData = randomElement;
      this.obj.qrcode = this.scannedData;
      console.log(this.scannedData);
      const res = await this.invite.getQrCodeData(this.obj) as any;
      console.log("Res Data", res);
      this.nav.push('/pages/guard/scan-result/' + res);
    }
  }
  callTimer() {
    this.timer = setInterval(() => {
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString();
    }, 1000);
  }
}
