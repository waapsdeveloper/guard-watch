import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss'],
})
export class InputBoxComponent implements OnInit {

  @Input('type') type: string = 'text';
  @Input('placeholder') placeholder: string = '';
  @Output() valueChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  onInputChange(event: any) {
    const value = event.target.value;
    this.valueChanged.emit(value);
  }
}
