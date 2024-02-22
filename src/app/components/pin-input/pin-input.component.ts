import { Component, ElementRef, EventEmitter, QueryList, Input, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-pin-input',
  templateUrl: './pin-input.component.html',
  styleUrls: ['./pin-input.component.scss'],
})
export class PinInputComponent  implements OnInit {

  @ViewChild('inputRef')
  inputRef!: ElementRef;

  @ViewChildren('pinInputRef') phoneInputsArray!: QueryList<ElementRef>;

  private _pin: string = '';

  @Input()
  public get pin(): string {
    return this._pin;
  };
  public set pin(value: string){
    this._pin = value;
    this.setPhoneArray(value)
  }

  private _pinLength: number = 5;

  @Input()
  public get pinLength(): number {
    return this._pinLength;
  };
  public set pinLength(value: number){
    this._pinLength = value;
    this.setPinArray(value)
  }

  @Output() valueChanged = new EventEmitter<string>();

  phoneInputs = [

  ] as any[]

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    // Set focus on the third input after the view has been initialized
    this.setFocusOnInput(2); // Note that array index is 2 for the third element
  }

  ngOnInit() {}

  setPinArray(pl: number){

    this.phoneInputs = [];

    for(var i = 0; i < pl; i++){
      this.phoneInputs.push(
        {
          index: i,
          value: null
        }
      )
    }

  }

  setPhoneArray(value: string){

    if(!value){
      return;
    }

    let ar = value.split('');

    for(var i = 0; i < this.phoneInputs.length; i++){
      this.phoneInputs[i].value = ar[i] as any
    }


  }

  checkInput(event: any, index: number): void {
    const inputValue = event.target.value;

    if(isNaN(inputValue)){
      this.phoneInputs[index].value = null;
      event.target.value = null;
      return;
    }

    event.target.value = event.target.value.charAt(0);

    this.phoneInputs[index].value = event.target.value;

    console.log(index)
    const isBackspace = event.code === 'Backspace';
    if(isBackspace){
      this.valueChanged.emit('');
      this.doBackSpace(index)
      return;
    }

    // Check if the entered value is a number
    if (!isNaN(inputValue) && inputValue !== '') {
      // Move to the next input if not the last one
      if (index < this.pinLength) {
        const nextIndex = index + 1;
        const phoneInput = this.phoneInputsArray.find((input: any) => {
          return input.nativeElement.id === ('phone-input-' + nextIndex)
        });

        console.log(phoneInput, index, nextIndex)
        if (phoneInput) {
          phoneInput.nativeElement.focus();
        }
      }


    }

    let j = this.phoneInputs.reduce( (prev, next) => {
      return prev + next.value
    }, '')

    console.log(j.length, index)

    if(j.length == this.pinLength){
      this.valueChanged.emit(j);
    } else {
      this.valueChanged.emit('');
    }


  }

  doBackSpace(index: number): void {
    // Find the index of the last non-empty input

    const prevIndex = index - 1
    this.phoneInputs[prevIndex].value = null;

    const phoneInput = this.phoneInputsArray.find((input: any) => {
      return input.nativeElement.id === ('phone-input-' + prevIndex)
    });

    console.log(phoneInput, index, prevIndex)
    if (phoneInput) {
      phoneInput.nativeElement.focus();
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
