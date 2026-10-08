import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserAuthService } from '../../Service/user-auth.service';
import { CartService } from '../../Service/cart.service';
import { WishlistService } from '../../Service/wishlist.service';
import { ProductService } from '../../Service/product.service';
import { Category } from '../../models/product.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  cartCount: number = 0;
  wishlistCount: number = 0;
  searchQuery: string = '';
  mobileMenuOpen: boolean = false;
  userMenuOpen: boolean = false;
  categories: Category[] = [];

  constructor(
    public userAuth: UserAuthService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userAuth.isuserlogin;
    this.userAuth.userlogin().subscribe(status => {
      this.isLoggedIn = status;
    });

    this.cartService.items$.subscribe(() => {
      this.cartCount = this.cartService.getItemCount();
    });

    this.wishlistService.items$.subscribe(items => {
      this.wishlistCount = items.length;
    });

    this.productService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/products'], {
        queryParams: { search: this.searchQuery.trim() }
      });
      this.mobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  logout(): void {
    this.userAuth.logout();
    this.userMenuOpen = false;
    this.router.navigate(['/home']);
  }
}
