import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/product.interface';
import { ToastService } from './toast.service';

const CART_STORAGE_KEY = 'shopvibe_cart';
const COUPON_STORAGE_KEY = 'shopvibe_coupon';

export interface Coupon {
  code: string;
  type: 'percent' | 'fixed';
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  private appliedCouponSubject = new BehaviorSubject<Coupon | null>(null);
  appliedCoupon$ = this.appliedCouponSubject.asObservable();

  constructor(private toastService: ToastService) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            this.itemsSubject.next(parsed);
          }
        }
        const savedCoupon = localStorage.getItem(COUPON_STORAGE_KEY);
        if (savedCoupon) {
          this.appliedCouponSubject.next(JSON.parse(savedCoupon));
        }
      } catch (e) {
        console.error('Failed to load cart from storage', e);
      }
    }
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.itemsSubject.getValue()));
        const coupon = this.appliedCouponSubject.getValue();
        if (coupon) {
          localStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
        } else {
          localStorage.removeItem(COUPON_STORAGE_KEY);
        }
      } catch (e) {
        console.error('Failed to save cart to storage', e);
      }
    }
  }

  getItems(): CartItem[] {
    return this.itemsSubject.getValue();
  }

  addToCart(product: Product, quantity: number = 1): void {
    const current = this.itemsSubject.getValue();
    const existingIndex = current.findIndex(item => item.product.id === product.id);

    if (existingIndex > -1) {
      const currentQty = current[existingIndex].quantity;
      const newQty = currentQty + quantity;
      if (newQty > product.stock) {
        this.toastService.warning(`Only ${product.stock} units available in stock`);
        return;
      }
      current[existingIndex].quantity = newQty;
      this.toastService.success(`Updated quantity for ${product.name}`);
    } else {
      current.push({ product, quantity });
      this.toastService.success(`Added ${product.name} to cart`);
    }

    this.itemsSubject.next([...current]);
    this.saveToStorage();
  }

  removeFromCart(productId: number): void {
    const current = this.itemsSubject.getValue();
    const item = current.find(i => i.product.id === productId);
    const updated = current.filter(i => i.product.id !== productId);
    this.itemsSubject.next(updated);
    this.saveToStorage();
    if (item) {
      this.toastService.info(`Removed ${item.product.name} from cart`);
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const current = this.itemsSubject.getValue();
    const item = current.find(i => i.product.id === productId);
    if (item) {
      if (quantity > item.product.stock) {
        this.toastService.warning(`Max available stock is ${item.product.stock}`);
        item.quantity = item.product.stock;
      } else {
        item.quantity = quantity;
      }
      this.itemsSubject.next([...current]);
      this.saveToStorage();
    }
  }

  increment(productId: number): void {
    const current = this.itemsSubject.getValue();
    const item = current.find(i => i.product.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity + 1);
    }
  }

  decrement(productId: number): void {
    const current = this.itemsSubject.getValue();
    const item = current.find(i => i.product.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity - 1);
    }
  }

  clearCart(): void {
    this.itemsSubject.next([]);
    this.appliedCouponSubject.next(null);
    this.saveToStorage();
  }

  getItemCount(): number {
    return this.itemsSubject.getValue().reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal(): number {
    return this.itemsSubject.getValue().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  getShipping(governorate: string = 'Cairo'): number {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    // Free shipping threshold in Egypt is EGP 1,500
    if (subtotal >= 1500) return 0;

    const lowerGov = governorate.toLowerCase();
    if (lowerGov.includes('cairo') || lowerGov.includes('giza')) {
      return 60;
    }
    return 80;
  }

  getDiscount(): number {
    const subtotal = this.getSubtotal();
    const coupon = this.appliedCouponSubject.getValue();
    if (!coupon || subtotal === 0) return 0;

    if (coupon.type === 'percent') {
      return Math.round(subtotal * (coupon.value / 100));
    }
    return Math.min(coupon.value, subtotal);
  }

  getTotal(governorate: string = 'Cairo'): number {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    const shipping = this.getShipping(governorate);
    const discount = this.getDiscount();
    return Math.max(0, subtotal + shipping - discount);
  }

  applyCoupon(code: string): { success: boolean; message: string } {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'VIBE10') {
      const coupon: Coupon = { code: 'VIBE10', type: 'percent', value: 10 };
      this.appliedCouponSubject.next(coupon);
      this.saveToStorage();
      this.toastService.success('Coupon VIBE10 applied! 10% discount added');
      return { success: true, message: '10% discount applied!' };
    } else if (trimmed === 'WELCOME' || trimmed === 'WELCOME150') {
      const coupon: Coupon = { code: 'WELCOME150', type: 'fixed', value: 150 };
      this.appliedCouponSubject.next(coupon);
      this.saveToStorage();
      this.toastService.success('Welcome coupon applied! EGP 150 discount added');
      return { success: true, message: 'EGP 150 discount applied!' };
    } else {
      this.toastService.error('Invalid coupon code. Try VIBE10 or WELCOME');
      return { success: false, message: 'Invalid promo code' };
    }
  }

  removeCoupon(): void {
    this.appliedCouponSubject.next(null);
    this.saveToStorage();
    this.toastService.info('Coupon removed');
  }
}
