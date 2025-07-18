import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '@lara/input-field';

@Component({
  selector: 'tce-table',
  standalone: true,
  imports: [CommonModule, InputFieldComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {}
