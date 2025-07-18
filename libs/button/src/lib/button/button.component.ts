import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type Variant = 'primary' | 'secondary' | 'success' | 'outline-primary' | 'warning' | 'danger';
@Component({
  selector: 'ab-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() variant: Variant = 'primary';
  @Input() disabled = false;
  @Output() click = new EventEmitter<Event>();

  getClasses(): string {
    return `${this.variant}`;
  }
}
