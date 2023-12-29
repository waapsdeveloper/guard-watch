import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/basic/modal.service';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-space-search',
  templateUrl: './space-search.component.html',
  styleUrls: ['./space-search.component.scss'],
})
export class SpaceSearchComponent  implements OnInit {


  @Input() search ='';
  list: any[] = [];
  selectedSpace = null;

  constructor(private space: SpaceService, private modals: ModalService) { }

  ngOnInit() {}

  ionViewWillEnter(){
    console.log(this.search);
    this.callApi()
  }

  handleGlobalInput($event: any){
    this.callApi()
  }

  async callApi(){
    let obj = {
      search: this.search
    }
    const res = await this.space.getGlobalSpaces(obj) as any[];
    console.log(res);
    this.list = res;
  }

  backSelection(){

    let item = this.list.find(x => x.id == this.selectedSpace);
    if(item){

      let obj = {
        item: item
      }

      this.modals.dismiss(obj)
    }

  }

}
