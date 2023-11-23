import { Component, OnInit , Input } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-pass-date',
  templateUrl: './pass-date.component.html',
  styleUrls: ['./pass-date.component.scss'],
})
export class PassDateComponent  implements OnInit {
  
  @Input() type: string = "";
  
  constructor() { }

  ngOnInit() {}
}

