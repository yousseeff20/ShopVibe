import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order, OrderCustomer } from '../models/product.interface';
import { SAMPLE_ORDERS_DATA } from '../data/products.data';
import { CartService } from './cart.service';
import { ToastService } from './toast.service';

const ORDERS_STORAGE_KEY = 'shopvibe_orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.ordersSubject.next(parsed);
            return;
          }
        }
      } catch (e) {
        console.error('Failed to load orders from storage', e);
      }
    }
    // Initialize with sample orders if empty
    this.ordersSubject.next([...SAMPLE_ORDERS_DATA]);
    this.saveToStorage();
  }

  private saveToStorage(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(this.ordersSubject.getValue()));
      } catch (e) {
        console.error('Failed to save orders to storage', e);
      }
    }
  }

  getOrders(): Order[] {
    return this.ordersSubject.getValue();
  }

  getOrderById(id: string): Order | undefined {
    return this.ordersSubject.getValue().find(o => o.id === id || o.orderNumber === id);
  }

  createOrder(customer: OrderCustomer, paymentMethod: string = 'Cash on Delivery'): Order {
    const cartItems = this.cartService.getItems();
    const subtotal = this.cartService.getSubtotal();
    const shipping = this.cartService.getShipping(customer.governorate);
    const discount = this.cartService.getDiscount();
    const total = this.cartService.getTotal(customer.governorate);

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `SV-${randomNum}`;

    const today = new Date();
    const deliveryMin = new Date(today);
    deliveryMin.setDate(today.getDate() + 2);
    const deliveryMax = new Date(today);
    deliveryMax.setDate(today.getDate() + 4);

    const formatDelivery = `${deliveryMin.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${deliveryMax.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    const order: Order = {
      id: orderNumber,
      orderNumber,
      items: cartItems.map(item => ({
        productId: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        thumbnail: item.product.thumbnail
      })),
      subtotal,
      shipping,
      discount,
      total,
      status: 'processing',
      date: today.toISOString().split('T')[0],
      estimatedDelivery: formatDelivery,
      customer,
      paymentMethod
    };

    const currentOrders = this.ordersSubject.getValue();
    const updated = [order, ...currentOrders];
    this.ordersSubject.next(updated);
    this.saveToStorage();

    // Clear cart after successful order
    this.cartService.clearCart();
    this.toastService.success(`Order ${orderNumber} placed successfully!`);

    return order;
  }
}
