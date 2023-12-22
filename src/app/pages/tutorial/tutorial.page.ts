import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { SwiperComponent } from 'swiper/angular';

const instructions = require("./../../data/instructions.json")


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage extends BasePage implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  list: any = [];



  constructor(injector: Injector) {
    super(injector);

  }

  ngOnInit() {
    this.list = instructions;
  }

  ionViewWillEnter() {



  }

  openLoginPage(){
    this.nav.push('pages/login');
  }

  next(i: number){
    console.log(i)
    if(i == this.list.length - 1){
      this.openLoginPage();
    } else {
      this.swiper?.swiperRef.slideNext(500);
    }
  }

}
