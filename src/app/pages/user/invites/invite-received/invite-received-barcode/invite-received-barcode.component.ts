import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite-received-barcode',
  templateUrl: './invite-received-barcode.component.html',
  styleUrls: ['./invite-received-barcode.component.scss'],
})
export class InviteReceivedBarcodeComponent implements OnInit {
  @Input() item: any
  constructor() { }

  ngOnInit() {
    console.log(this.item,);

  }

}
