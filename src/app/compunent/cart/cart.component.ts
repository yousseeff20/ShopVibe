import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService, Coupon } from '../../Service/cart.service';
import { OrderService } from '../../Service/order.service';
import { ToastService } from '../../Service/toast.service';
import { CartItem, Order, OrderCustomer } from '../../models/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  promoCode: string = '';
  appliedCoupon: Coupon | null = null;

  // Checkout flow state
  step: 'cart' | 'checkout' | 'success' = 'cart';
  placedOrder: Order | null = null;

  // Customer & Shipping Form
  customer: OrderCustomer = {
    name: 'Mohamed Azoz',
    email: 'm.azoz200445@gmail.com',
    phone: '+20 102 345 6789',
    governorate: 'Cairo',
    city: 'New Cairo',
    address: 'Street 90 North, Villa 42',
    building: 'Building 4B, 3rd Floor'
  };

  selectedPaymentMethod: string = 'Cash on Delivery';

  governorates: string[] = [
    'Cairo', 'Giza', 'Alexandria', 'Dakahlia (Mansoura)', 'Sohag',
    'Assiut', 'Luxor', 'Qena', 'Gharbia (Tanta)', 'Sharqia (Zagazig)',
    'Qalyubia', 'Port Said', 'Suez', 'Ismailia', 'Red Sea (Hurghada)'
  ];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.cartItems = items;
    });

    this.cartService.appliedCoupon$.subscribe(coupon => {
      this.appliedCoupon = coupon;
    });
  }

  increment(productId: number): void {
    this.cartService.increment(productId);
  }

  decrement(productId: number): void {
    this.cartService.decrement(productId);
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  get subtotal(): number {
    return this.cartService.getSubtotal();
  }

  get shipping(): number {
    return this.cartService.getShipping(this.customer.governorate);
  }

  get discount(): number {
    return this.cartService.getDiscount();
  }

  get total(): number {
    return this.cartService.getTotal(this.customer.governorate);
  }

  applyCoupon(): void {
    if (!this.promoCode.trim()) {
      this.toastService.warning('Please enter a coupon code');
      return;
    }
    this.cartService.applyCoupon(this.promoCode);
    this.promoCode = '';
  }

  removeCoupon(): void {
    this.cartService.removeCoupon();
  }

  proceedToCheckout(): void {
    if (this.cartItems.length === 0) {
      this.toastService.warning('Your cart is empty');
      return;
    }
    this.step = 'checkout';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  backToCart(): void {
    this.step = 'cart';
  }

  placeOrder(): void {
    if (!this.customer.name || !this.customer.phone || !this.customer.address) {
      this.toastService.error('Please complete all mandatory delivery fields');
      return;
    }

    const order = this.orderService.createOrder(this.customer, this.selectedPaymentMethod);
    this.placedOrder = order;
    this.step = 'success';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
