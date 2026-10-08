import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserAuthService } from '../../Service/user-auth.service';
import { ToastService } from '../../Service/toast.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
    address: 'Cairo, Egypt'
  } as User;

  constructor(
    private router: Router,
    private userAuth: UserAuthService,
    private toastService: ToastService
  ) {}

  onSubmit(): void {
    if (!this.user.name || !this.user.email || !this.user.password) {
      this.toastService.error('Please fill in all required fields');
      return;
    }
    this.userAuth.login(this.user.email);
    this.toastService.success(`Welcome to ShopVibe, ${this.user.name}!`);
    this.router.navigate(['/home']);
  }
}
