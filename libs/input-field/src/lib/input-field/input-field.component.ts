import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tce-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() label: string = 'Campo';

  @Input() placeholder: string = '';

  @Input() type: string = 'text';

  @Input() isReadOnly: boolean = false;

  @Input() showLabel: boolean = true;

}
