import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  isLoading = false;
  obj: any = {
    phone_number: '',
    password: '',
    dial_code: '+92'
  };
  constructor(private users: UserService) {

  }

  ngOnInit() {
    this.initialize();
  }

  async initialize(){
    const u = await this.users.getUser();
    console.log(u);
    this.user = u;
  }
  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }

  result(event: any, type: any) {
    this.obj[type] = event
  }



}
