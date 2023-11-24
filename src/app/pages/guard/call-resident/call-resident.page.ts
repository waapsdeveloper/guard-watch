import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-call-resident',
  templateUrl: './call-resident.page.html',
  styleUrls: ['./call-resident.page.scss'],
})
export class CallResidentPage extends BasePage implements OnInit {
residentId:any;
user:any;
  constructor(injector: Injector) {
    super(injector)
   }

  ngOnInit() {
    this.residentId = localStorage.getItem('resident_id');
    this.user = this.datum.getUserById(this.residentId);
    console.log('saaaaa',this.user);

  }
  callUser(number:any){
    console.log(number);

  }

}
