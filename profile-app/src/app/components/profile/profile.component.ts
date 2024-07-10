import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

/**
 * ProfileComponent
 * - This component is responsible for displaying the user's profile information.
 * - It retrieves the user's information from the UserService and displays it in the template.
 * - The user's information is displayed in the template using interpolation.
 * - The user's information is retrieved from the UserService using the getUser method.
 * - The user's information is stored in the user property of the component.
 * - The user property is of type User | null, which means it can be either a User object or null.
 * - The user property is initialized to null, and then updated with the user's information when it is retrieved from the UserService.
 * - The ngOnInit method is used to retrieve the user's information from the UserService when the component is initialized.
 */
export class ProfileComponent implements OnInit{
  user : User | null = null;

  constructor(private userService : UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (error) => {
        console.error('Failed to get user:', error);
      }
    });
  }
}
