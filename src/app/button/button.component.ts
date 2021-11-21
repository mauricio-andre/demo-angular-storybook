import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button[type]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() primary: boolean = true;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() click: () => void = () => {};
}
