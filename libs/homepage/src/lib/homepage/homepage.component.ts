import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '@lara/breadcrumb';

@Component({
  selector: 'tce-homepage',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  constructor() {
    console.log('HomepageComponent carregado');
  }
}
