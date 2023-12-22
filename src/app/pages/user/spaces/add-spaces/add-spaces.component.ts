import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/pages/base-page/base-page';
import { ContactService } from 'src/app/services/contact.service';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-add-spaces',
  templateUrl: './add-spaces.component.html',
  styleUrls: ['./add-spaces.component.scss'],
})
export class AddSpacesComponent extends BasePage implements OnInit {
  obj: any = {
    title: '',
    description: '',
    location: '',
  };

  constructor(injector: Injector, public space: SpaceService) {
    super(injector);
  }

  ngOnInit() {}

  async submit() {

    if(!this.validate()){
      this.utility.presentFailureToast('Please fill all the fields');
    }

    const res = await this.space.addSpace(this.obj);

    console.log('resssssss',res);

    this.modals.dismiss(res);
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


  result(event: any, type: any) {
    this.obj[type] = event;
  }

}
