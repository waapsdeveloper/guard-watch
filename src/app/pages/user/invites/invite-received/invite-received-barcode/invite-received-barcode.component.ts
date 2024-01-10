import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-received-barcode',
  templateUrl: './invite-received-barcode.component.html',
  styleUrls: ['./invite-received-barcode.component.scss'],
})
export class InviteReceivedBarcodeComponent implements OnInit {
  
  qrcode = '';
  _item: any;
  @Input() 
  public get item(): any{
    return this._item
  };
  public set item(value: any){
    this._item = value;
    this.qrcode = value.qrcode;
  }
  

  screenWidth: number = 256;
  constructor() { 
    this.getScreenSize();
  }

  ngOnInit() {
    console.log(this.item,);

  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

}
