import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../Service/product.service';
import { ToastService } from '../../Service/toast.service';
import { Product, Category } from '../../models/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  bestSellers: Product[] = [];
  specialOffers: Product[] = [];
  trendingProducts: Product[] = [];
  loading: boolean = true;
  newsletterEmail: string = '';

  constructor(
    private productService: ProductService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.productService.getCategories().subscribe(cats => {
      this.categories = cats;
    });

    this.productService.getBestSellers().subscribe(products => {
      this.bestSellers = products;
      this.loading = false;
    });

    this.productService.getProducts().subscribe(products => {
      this.specialOffers = products.filter(p => p.discountPercentage && p.discountPercentage >= 14).slice(0, 4);
      this.trendingProducts = products.filter(p => p.rating >= 4.8).slice(0, 8);
    });
  }

  onSubscribeNewsletter(): void {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@')) {
      this.toastService.error('Please enter a valid email address');
      return;
    }
    this.toastService.success('Thanks for subscribing! Use code WELCOME150 for EGP 150 off your first order.');
    this.newsletterEmail = '';
  }
}
