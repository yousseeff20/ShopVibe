import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WishlistItem, Product } from '../models/product.interface';
import { CartService } from './cart.service';
import { ToastService } from './toast.service';

const WISHLIST_STORAGE_KEY = 'shopvibe_wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private itemsSubject = new BehaviorSubject<WishlistItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            this.itemsSubject.next(parsed);
          }
        }
      } catch (e) {
        console.error('Failed to load wishlist from storage', e);
      }
    }
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(this.itemsSubject.getValue()));
      } catch (e) {
        console.error('Failed to save wishlist to storage', e);
      }
    }
  }

  getItems(): WishlistItem[] {
    return this.itemsSubject.getValue();
  }

  isInWishlist(productId: number): boolean {
    return this.itemsSubject.getValue().some(item => item.product.id === productId);
  }

  toggle(product: Product): void {
    if (this.isInWishlist(product.id)) {
      this.removeFromWishlist(product.id);
    } else {
      this.addToWishlist(product);
    }
  }

  addToWishlist(product: Product): void {
    const current = this.itemsSubject.getValue();
    if (!this.isInWishlist(product.id)) {
      current.push({
        product,
        addedAt: new Date().toISOString()
      });
      this.itemsSubject.next([...current]);
      this.saveToStorage();
      this.toastService.success(`Added ${product.name} to wishlist`);
    }
  }

  removeFromWishlist(productId: number): void {
    const current = this.itemsSubject.getValue();
    const item = current.find(i => i.product.id === productId);
    const updated = current.filter(i => i.product.id !== productId);
    this.itemsSubject.next(updated);
    this.saveToStorage();
    if (item) {
      this.toastService.info(`Removed ${item.product.name} from wishlist`);
    }
  }

  moveToCart(product: Product): void {
    this.cartService.addToCart(product, 1);
    this.removeFromWishlist(product.id);
  }

  getItemCount(): number {
    return this.itemsSubject.getValue().length;
  }
}
