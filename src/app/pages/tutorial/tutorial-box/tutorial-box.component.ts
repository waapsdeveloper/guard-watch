import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tutorial-box',
  templateUrl: './tutorial-box.component.html',
  styleUrls: ['./tutorial-box.component.scss'],
})
export class TutorialBoxComponent  implements OnInit {

  @Input() item: any;
  @Input() index: number = 0;
  @Output() next: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  gotoNext(){
    console.log(this.index)
    this.next.emit(this.index);
  }

}
