import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@lara/button';
import { LoginPageComponent } from '@lara/login-page';
import { InputFieldComponent } from '@lara/input-field';
import { ModalComponent } from '@lara/modal';
import { HeaderComponent } from '@lara/header';
import { UserInfoComponent } from '@lara/user-info';
import { SidebarComponent } from '@lara/sidebar';
import { BreadcrumbComponent } from '@lara/breadcrumb';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    ButtonComponent,
    LoginPageComponent,
    InputFieldComponent,
    ModalComponent,
    HeaderComponent,
    UserInfoComponent,
    SidebarComponent,
    BreadcrumbComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'alfabit';
}
