import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tce-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  @Input() sidebarAberta = true;

  get leftPosition() {
  return this.sidebarAberta ? '14.5rem' : '3rem';
}
}
