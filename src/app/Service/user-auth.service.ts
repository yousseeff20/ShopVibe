import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceAPIService } from './service-api.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  behaversabuject: BehaviorSubject<boolean>;
  users!: User[];
  root!: User;

  constructor(
    private router: Router,
    private userall: ServiceAPIService,
    private userserv: UserService
  ) {
    const initialLogin = this.isuserlogin;
    this.behaversabuject = new BehaviorSubject<boolean>(initialLogin);
  }

  login(email: string) {
    const token = "123456";
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('userToken', token);
    }
    this.behaversabuject.next(true);
  }

  logout() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.removeItem('userToken');
    }
    this.behaversabuject.next(false);
  }

  get isuserlogin(): boolean {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('userToken');
    }
    return false;
  }

  userlogin() {
    return this.behaversabuject.asObservable();
  }

  doserche(email: string) {
    this.userserv.getOneuser(email).subscribe({
      next: () => {
        this.login(email);
        this.router.navigate(['/home']);
      },
      error: () => {
        this.login(email);
        this.router.navigate(['/home']);
      }
    });
  }
}
