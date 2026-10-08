import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../Service/wishlist.service';
import { CartService } from '../../Service/cart.service';
import { OrderService } from '../../Service/order.service';
import { ToastService } from '../../Service/toast.service';
import { WishlistItem, Order, Product } from '../../models/product.interface';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  activeTab: 'orders' | 'wishlist' | 'profile' | 'addresses' = 'orders';

  wishlistItems: WishlistItem[] = [];
  orders: Order[] = [];

  userProfile = {
    name: 'Yousef Ashraf',
    email: 'youseef.ashraf@outloook.com',
    phone: '01097380883',
    city: 'New Cairo',
    governorate: 'Cairo',
    address: 'Street 90 North, Villa 42, 3rd Floor'
  };

  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private orderService: OrderService,
    private toastService: ToastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        const tab = params['tab'];
        if (tab === 'wishlist' || tab === 'orders' || tab === 'profile' || tab === 'addresses') {
          this.activeTab = tab;
        }
      }
    });

    this.wishlistService.items$.subscribe(items => {
      this.wishlistItems = items;
    });

    this.orderService.orders$.subscribe(orders => {
      this.orders = orders;
    });
  }

  setTab(tab: 'orders' | 'wishlist' | 'profile' | 'addresses'): void {
    this.activeTab = tab;
  }

  removeFromWishlist(productId: number): void {
    this.wishlistService.removeFromWishlist(productId);
  }

  moveToCart(product: Product): void {
    this.wishlistService.moveToCart(product);
  }

  saveProfile(): void {
    this.toastService.success('Profile details saved successfully!');
  }
}
