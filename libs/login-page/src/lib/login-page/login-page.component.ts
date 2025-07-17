import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '@lara/input-field';
import { ButtonComponent } from '@lara/button';

@Component({
  selector: 'ab-login-page',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
