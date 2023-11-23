import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.page.html',
  styleUrls: ['./create-pass.page.scss'],
})
export class CreatePassPage implements OnInit {

  
  type: string = ""; 

  constructor() { }

  ngOnInit() {
  }

}
