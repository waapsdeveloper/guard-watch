import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent  implements OnInit, AfterViewInit {

@Input() flag = 'C';
_pid: any;

  get pid(): any{
    return this._pid;
  }

  @Input() set pid(value: any) {
    this._pid = value;
  };
  constructor(public popoverCtrl: PopoverController ) { }

  ngOnInit() {}
  selectOption(option: string) {
    // Handle the selected option as needed
    console.log('Selected Option:', option);
  }
  close(param: any) {
    this.popoverCtrl.dismiss({pid: this.pid, param: param });
  }
  ngAfterViewInit(): void {
    this.initialize();
  }
  async initialize(){

    console.log(this.pid);
    // this.loader = true;

    // this.user = JSON.parse(localStorage.getItem('user')) // await this.sqlite.getActiveUser();
    // if(this.user){
    //   // console.log(this.user);
    //   this.can_send_passes = ( this.user["can_send_passes"] == 1 );
    //   this.suspandAccount = (parseInt(this.user['suspand']) == 1);
    }
}
