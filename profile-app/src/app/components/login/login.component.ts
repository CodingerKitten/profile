import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private userService : UserService) {}

  onSubmit() {
    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';

    if (!emailValue || !passwordValue) {
      console.error('Email and password are required');
      return;
    }
    
    this.userService.login(emailValue, passwordValue).subscribe({
      next: (response) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
          console.log('Token:', response.token);
          this.router.navigate(['/profile']);
        } else {
          console.error('Login failed: Invalid credentials');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
    
    console.log('Email:', this.email.value, 'Password:', this.password.value);
  }
}
