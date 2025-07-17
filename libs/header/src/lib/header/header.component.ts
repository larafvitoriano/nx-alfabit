import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '@lara/user-info';

@Component({
  selector: 'tce-header',
  standalone: true,
  imports: [CommonModule, UserInfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
