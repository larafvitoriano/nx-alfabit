import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '@lara/user-info';
import { SidebarComponent } from '@lara/sidebar';

@Component({
  selector: 'tce-header',
  standalone: true,
  imports: [CommonModule, UserInfoComponent, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
