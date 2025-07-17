import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@lara/button';
import { LoginPageComponent } from '@lara/login-page';
import { InputFieldComponent } from '@lara/input-field';
import { ModalComponent } from '@lara/modal';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, LoginPageComponent, InputFieldComponent, ModalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'alfabit';
}
