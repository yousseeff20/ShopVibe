import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.interface';
import { CartService } from '../../Service/cart.service';
import { WishlistService } from '../../Service/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="sv-product-card" *ngIf="product">
      <!-- Badges -->
      <div class="sv-product-card__badges">
        <span class="sv-badge sv-badge-sale" *ngIf="product.discountPercentage && product.discountPercentage > 0">
          -{{ product.discountPercentage }}%
        </span>
        <span class="sv-badge sv-badge-best-seller" *ngIf="product.isBestSeller">
          Best Seller
        </span>
        <span class="sv-badge sv-badge-new" *ngIf="product.isNewArrival && !product.discountPercentage">
          New
        </span>
      </div>

      <!-- Wishlist Toggle -->
      <button
        type="button"
        class="sv-product-card__wishlist"
        [class.active]="isWishlisted"
        (click)="onToggleWishlist($event)"
        [title]="isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'"
        aria-label="Wishlist"
      >
        <i [class]="isWishlisted ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"></i>
      </button>

      <!-- Thumbnail Link -->
      <a [routerLink]="['/ProductDetails', product.id]" class="sv-product-card__image">
        <img [src]="product.thumbnail" [alt]="product.name" loading="lazy" />
      </a>

      <!-- Content -->
      <div class="sv-product-card__body">
        <div class="sv-product-card__brand">{{ product.brand }}</div>
        <h3 class="sv-product-card__name">
          <a [routerLink]="['/ProductDetails', product.id]">{{ product.name }}</a>
        </h3>

        <!-- Rating -->
        <div class="sv-product-card__rating">
          <span class="sv-product-card__rating-stars">
            <i class="fa-solid fa-star"></i>
          </span>
          <span class="sv-product-card__rating-value">{{ product.rating }}</span>
          <span class="sv-product-card__rating-count">({{ product.reviewCount }})</span>
        </div>

        <!-- Price -->
        <div class="sv-product-card__price-row">
          <span class="sv-product-card__price">{{ product.price | currency : 'EGP ' : 'symbol' : '1.0-0' }}</span>
          <span class="sv-product-card__old-price" *ngIf="product.oldPrice">
            {{ product.oldPrice | currency : 'EGP ' : 'symbol' : '1.0-0' }}
          </span>
        </div>

        <!-- Stock Status -->
        <div
          class="sv-product-card__stock"
          [ngClass]="{
            'in-stock': product.stock > 5,
            'low-stock': product.stock > 0 && product.stock <= 5,
            'out-of-stock': product.stock === 0
          }"
        >
          <span *ngIf="product.stock > 5"><i class="fa-solid fa-check me-1"></i> In Stock</span>
          <span *ngIf="product.stock > 0 && product.stock <= 5"><i class="fa-solid fa-triangle-exclamation me-1"></i> Only {{ product.stock }} left</span>
          <span *ngIf="product.stock === 0"><i class="fa-solid fa-xmark me-1"></i> Out of Stock</span>
        </div>

        <!-- Action Buttons -->
        <div class="sv-product-card__actions">
          <button
            type="button"
            class="sv-btn sv-btn-primary w-100"
            [disabled]="product.stock === 0"
            (click)="onAddToCart($event)"
          >
            <i class="fa-solid fa-cart-shopping me-1"></i>
            {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .sv-badge-sale { background: var(--sv-error); color: #fff; }
    .sv-badge-best-seller { background: #1f2937; color: #fff; }
    .sv-badge-new { background: var(--sv-info); color: #fff; }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  get isWishlisted(): boolean {
    return this.product ? this.wishlistService.isInWishlist(this.product.id) : false;
  }

  onToggleWishlist(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.toggle(this.product);
  }

  onAddToCart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    if (this.product.stock > 0) {
      this.cartService.addToCart(this.product, 1);
    }
  }
}
