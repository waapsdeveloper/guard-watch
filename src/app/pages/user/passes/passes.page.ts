import { Component, OnInit ,Injector } from '@angular/core';
import { BasePage } from '../../base-page/base-page';

@Component({
  selector: 'app-passes',
  templateUrl: './passes.page.html',
  styleUrls: ['./passes.page.scss'],
})
export class PassesPage extends BasePage implements OnInit {

  constructor( injector: Injector) {
    super(injector)
   }

  ngOnInit() {
  }
  goToCreatePass(){
    this.nav.push('/passes/create-pass');
  }
}
