import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  name = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private userService : UserService) {}

  onSubmit() {
    const nameValue = this.name.value || '';
    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';

    if (!nameValue || !emailValue || !passwordValue) {
      console.error('Name, email, and password are required');
      return;
    }
    
    this.userService.register(nameValue, emailValue, passwordValue).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
    
    console.log('Name:', this.name.value, 'Email:', this.email.value, 'Password:', this.password.value);
  }
}
