import { Component, ElementRef, EventEmitter, QueryList, Input, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent  implements OnInit {

  @ViewChild('inputRef')
  inputRef!: ElementRef;

  @ViewChildren('phoneInputRef') phoneInputsArray!: QueryList<ElementRef>;

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

  constructor(private renderer: Renderer2, private el: ElementRef) { }

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
      if (index < 10) {
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

    if(j.length == 11){
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
