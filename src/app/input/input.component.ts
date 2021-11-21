import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input[type][id]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() type: 'password' | 'text' = 'text';
  @Input() iconName: string = '';
  @Input() placeholder: string = '';
  @Input() hasInputError: boolean = false;
  htmlFor: string = '';

  constructor() {
    this.htmlFor = this.id;
  }

  handleFocus() {
    this.hasInputError = false;
  }

  handleBlur(event: FocusEvent) {
    const element = <HTMLInputElement>event.target;
    if (!element.value) {
      this.hasInputError = true;
    }
  }
}
