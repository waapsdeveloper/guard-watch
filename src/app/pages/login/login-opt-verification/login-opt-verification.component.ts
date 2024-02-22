import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';

@Component({
  selector: 'app-login-opt-verification',
  templateUrl: './login-opt-verification.component.html',
  styleUrls: ['./login-opt-verification.component.scss'],
})
export class LoginOptVerificationComponent  implements OnInit {

  isLoading = false;
  obj: any = {
    opt_string: '',
  };
  constructor(private modals: ModalService) { }

  ngOnInit() {}

  verifyOTP(){
    this.isLoading = true;

    setTimeout( () => {
      this.modals.dismiss()
      this.isLoading = false;
    }, 3000)

  }

  result(event: any, type: any) {
    this.obj[type] = event
  }

  disableSubmit(){

    if(this.isLoading){
      return true;
    }

    if(this.obj.opt_string){
      return false;
    }

    return true;
  }

}
