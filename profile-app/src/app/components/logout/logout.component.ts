import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})

/**
 * LogoutComponent
 * - This component is responsible for logging the user out of the application.
 * - It calls the UserService logout method to remove the authentication token from local storage.
 * - It then navigates the user back to the login page.
 */
export class LogoutComponent {
  constructor(private router: Router, private userService : UserService) {}

  onSubmit() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
