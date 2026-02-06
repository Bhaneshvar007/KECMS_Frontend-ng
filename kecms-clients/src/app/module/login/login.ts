import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']  
})
export class Login {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    if (this.email && this.password) {
      const payload = {
        email: this.email,
        password: this.password
      };

      this.authService.login(payload).subscribe({
        next: (res) => {
          console.log('Login Success', res);
          this.router.navigate(['/']);   
        },
        error: (err) => {
          console.error('Login Failed', err);
        }
      });
    } else {
      console.warn('Email and password are required');
    }
  }
}
