import { Component, ChangeDetectorRef } from '@angular/core';
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
  loginError = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private cd: ChangeDetectorRef    
  ) {}

  login(form: any) {

    this.loginError = '';

    if (form.invalid) {
      this.loginError = 'Please enter email and password';
      this.cd.detectChanges();       
      return;
    }

    const payload = {
      UserID: this.email,
      Password: this.password
    };

    this.authService.login(payload).subscribe({
      next: (res: any) => {

        if (res.success === false) {
          this.loginError = res.message || 'Login failed';
          this.cd.detectChanges();   
          return;
        }

        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.objmodel));
        localStorage.setItem('menus', JSON.stringify(res.menus));

        this.router.navigate(['/']);
      },
      error: () => {
        this.loginError = 'Server error, try again';
        this.cd.detectChanges();     
      }
    });
  }
}
