import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from '@lara/input-field';
import { ButtonComponent } from '@lara/button';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-login-page',
  standalone: true,
  imports: [CommonModule, InputFieldComponent, ButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  entrar() {
    console.log('Redirecionando...');
    // aqui você pode adicionar validação antes de navegar
    this.router.navigate(['/homepage']);
  }
}
