import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})

/**
 * ProfileComponent
 * - This component is responsible for displaying the user's profile information.
 * - It retrieves the user's information from the UserService and displays it in the template.
 * - The user's information is displayed in the template using interpolation.
 * - The user's information is retrieved from the UserService using the getUser method.
 * - The user's information is stored in the user property of the component.
 * - The user property is initialized to null, and then updated with the user's information when it is retrieved from the UserService.
 * - The ngOnInit method is used to retrieve the user's information from the UserService when the component is initialized.
 */
export class ProfileComponent implements OnInit {
  user: User | null = null;
  nameControl = new FormControl('');
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (user) => {
        this.user = user;
        this.nameControl.setValue(user.name);
        this.emailControl.setValue(user.email);
      },
      error: (error) => {
        console.error('Failed to get user:', error);
      },
    });
  }

  /**
   * Updates the user's name.
   * - This method sends a PUT request to the API to update the user's name.
   * - It takes the new name as an argument.
   * - It returns an Observable of the response from the API.
   * @param {string} name
   * @returns {Observable<User>}
   * @memberof UserService
   * @method updateName
   */ 
  updateName(){
    if(this.user){
      const nameValue = this.nameControl.value || '';
      this.userService.updateUser({ name : nameValue}).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Failed to update name:', error);
        },
      });
    }
  }

  updateEmail(){
    if(this.user){
      const emailValue = this.emailControl.value || '';
      this.userService.updateUser({ email : emailValue}).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Failed to update email:', error);
        },
      });
    }
  }
}
