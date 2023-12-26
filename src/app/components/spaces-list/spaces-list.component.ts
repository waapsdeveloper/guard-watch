import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { SpaceService } from 'src/app/services/space.service';
import { SpacesAddComponent } from './spaces-add/spaces-add.component';

@Component({
  selector: 'app-spaces-list',
  templateUrl: './spaces-list.component.html',
  styleUrls: ['./spaces-list.component.scss'],
})
export class SpacesListComponent implements OnInit {

  list: any[] = [];
  selectedSpace: any = null;
  constructor(private modals: ModalService, private space: SpaceService) { }

  ngOnInit() {
    this.getAllSpace()
  }

  getAllSpace(){
    return new Promise(async (resolve) => {

      const res = await this.space.getAllSpaces() as any[];
      console.log('res',res);
      this.list = res
      resolve(res);

    })
  }

  setItemColor(item: any){

    if(item.selected == true){
      return 'light'
    }else{
      return ''
    }
  }

  async addSpace(){
    console.log('addContact');
    const res = await this.modals.present(SpacesAddComponent);
    console.log('res',res);

    this.getAllSpace()
  }

  addSelectedSpace(){

    let item = this.list.find(x => x.id == this.selectedSpace);
    this.modals.dismiss({list: [item]});
  }

}
