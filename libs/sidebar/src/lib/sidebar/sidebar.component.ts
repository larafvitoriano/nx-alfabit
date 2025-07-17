import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tce-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarAberta = true;

   grupos = {
    processos: true,
  };


  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }

    


}
