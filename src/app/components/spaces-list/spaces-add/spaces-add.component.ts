import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { SpaceService } from 'src/app/services/space.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-spaces-add',
  templateUrl: './spaces-add.component.html',
  styleUrls: ['./spaces-add.component.scss'],
})
export class SpacesAddComponent  implements OnInit {

  isLoading: boolean = false;
  obj: any = {
    title: '',
    description: '',
    location: '',
  };
  constructor(private utility: UtilityService, private space: SpaceService, private modals: ModalService) { }

  ngOnInit() {}

  result(event: any, type: any) {
    this.obj[type] = event
  }

  onDialCodeSelected(dialCode: string) {
    this.obj.dial_code = dialCode;
  }

  async save(){
    console.log('save', this.obj);
    if(!this.obj.title || !this.obj.description || !this.obj.location){
      this.utility.presentFailureToast('Please fill in all the required fields.');
      return;
    }

    const res = await this.space.addSpace(this.obj);
    console.log('res',res);
    this.modals.dismiss(this.obj);
  }

  validate() {
    if (
      this.obj.title &&
      this.obj.description &&
      this.obj.location
    ) {
      return true;
    } else {
      return false;
    }
  }

}
