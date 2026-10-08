import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../../Service/user-auth.service';
import { ToastService } from '../../Service/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = 'm.azoz200445@gmail.com';
  password: string = 'password123';

  constructor(
    private router: Router,
    private userAuth: UserAuthService,
    private toastService: ToastService
  ) {}

  onSubmit(): void {
    if (!this.email || !this.email.includes('@')) {
      this.toastService.error('Please enter a valid email address');
      return;
    }
    this.userAuth.login(this.email);
    this.toastService.success('Welcome back to ShopVibe!');
    this.router.navigate(['/home']);
  }

  fillDemo(): void {
    this.email = 'm.azoz200445@gmail.com';
    this.password = 'password123';
    this.onSubmit();
  }
}
