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
