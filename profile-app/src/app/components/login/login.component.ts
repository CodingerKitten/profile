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

/**
 * LoginComponent
 * - This component is responsible for logging the user into the application.
 * - It retrieves the user's email and password from the form inputs.
 * - It calls the UserService login method to authenticate the user.
 * - If the login is successful, it stores the authentication token in local storage and navigates the user to the profile page.
 * - If the login fails, it logs an error message to the console.
 * - The onSubmit method is called when the form is submitted.
 * - It retrieves the email and password values from the form inputs.
 * - It calls the UserService login method with the email and password values.
 * - It subscribes to the response from the login method.
 * - If the response contains a token, it stores the token in local storage and navigates the user to the profile page.
 * - If the response does not contain a token, it logs an error message to the console.
 * - If an error occurs during the login process, it logs an error message to the console.
  */
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
