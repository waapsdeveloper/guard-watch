import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent  implements OnInit {

  @ViewChild('inputRef')
  inputRef!: ElementRef;

  private _phone: string = '';

  @Input()
  public get phone(): string {
    return this._phone;
  };
  public set phone(value: string){
    this._phone = value;
    this.setPhoneArray(value)
  }

  @Output() valueChanged = new EventEmitter<string>();

  phoneInputs = [
    {
      index: 0,
      value: 0
    },
    {
      index: 1,
      value: 3
    },
    {
      index: 2,
      value: null
    },
    {
      index: 3,
      value: null
    },
    {
      index: 4,
      value: null
    },
    {
      index: 5,
      value: null
    },
    {
      index: 6,
      value: null
    },
    {
      index: 7,
      value: null
    },
    {
      index: 8,
      value: null
    },
    {
      index: 9,
      value: null
    },
    {
      index: 10,
      value: null
    }
  ]

  constructor() { }

  ngAfterViewInit(): void {
    // Set focus on the third input after the view has been initialized
    this.setFocusOnInput(2); // Note that array index is 2 for the third element
  }

  ngOnInit() {}

  setPhoneArray(value: string){

    if(!value){
      return;
    }

    let ar = value.split('');

    for(var i = 0; i < this.phoneInputs.length; i++){
      this.phoneInputs[i].value = ar[i] ? Number(ar[i]) : null
    }


  }

  checkInput(event: any, index: number): void {
    const inputValue = event.target.value;

    const isBackspace = event.code === 'Backspace';
    if(isBackspace){
      this.doBackSpace()
      return;
    }

    // Check if the entered value is a number
    if (!isNaN(inputValue) && inputValue !== '') {
      // Move to the next input if not the last one
      if (index < 10) {
        const nextIndex = index + 1;
        const nextInput = document.querySelectorAll('input')[nextIndex] as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }

      if(index == 10){

        let j = this.phoneInputs.reduce( (prev, next) => {
          return prev + next.value
        }, '')

        if(j.length == 11){
          this.valueChanged.emit(j);
        }

      }
    }
  }

  doBackSpace(): void {
    // Find the index of the last non-empty input

    let j = this.phoneInputs.reduce( (prev, next) => {
      return prev + (next.value ? next.value : '')
    }, '')

    let lastNonEmptyIndex = j.length;

    console.log(j, lastNonEmptyIndex)

    while (lastNonEmptyIndex >= 0 && (this.phoneInputs[lastNonEmptyIndex].value == null)) {
      lastNonEmptyIndex--;
    }

    // Clear the value of the last non-empty input
    if (lastNonEmptyIndex >= 0) {
      this.phoneInputs[lastNonEmptyIndex].value = null;
    }


    // Focus on the last non-empty input or the first input if all are empty
    const inputToFocus = lastNonEmptyIndex >= 0
      ? document.querySelector(`input[name="phone-input-${lastNonEmptyIndex}"]`) as HTMLInputElement
      : document.querySelector(`input[name="phone-input-0"]`) as HTMLInputElement;

      console.log(inputToFocus, lastNonEmptyIndex)
    if (inputToFocus) {
      inputToFocus.focus();
    }
  }


  private setFocusOnInput(index: number): void {
    const inputElements = document.querySelectorAll('input');
    if (inputElements.length > index) {
      const nextInput = inputElements[index] as HTMLInputElement;
      nextInput.focus();
    }
  }

}
