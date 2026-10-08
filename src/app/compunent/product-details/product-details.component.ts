import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Product, Review } from '../../models/product.interface';
import { ProductService } from '../../Service/product.service';
import { CartService } from '../../Service/cart.service';
import { WishlistService } from '../../Service/wishlist.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductCardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  product?: Product;
  selectedImage: string = '';
  quantity: number = 1;
  loading: boolean = true;
  reviews: Review[] = [];
  relatedProducts: Product[] = [];
  allIds: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('Prdid')) || 1;
      this.loadProductDetails();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    this.productService.getProducts().subscribe(products => {
      this.allIds = products.map(p => p.id);
    });
  }

  loadProductDetails(): void {
    this.loading = true;
    this.quantity = 1;

    this.productService.getProductById(this.id).subscribe(prod => {
      this.product = prod;
      this.loading = false;
      if (prod) {
        this.selectedImage = (prod.images && prod.images.length > 0) ? prod.images[0] : prod.thumbnail;

        // Load reviews
        this.productService.getProductReviews(prod.id).subscribe(revs => {
          this.reviews = revs;
        });

        // Load related products
        this.productService.getRelatedProducts(prod.category, prod.id).subscribe(related => {
          this.relatedProducts = related;
        });
      }
    });
  }

  get isWishlisted(): boolean {
    return this.product ? this.wishlistService.isInWishlist(this.product.id) : false;
  }

  toggleWishlist(): void {
    if (this.product) {
      this.wishlistService.toggle(this.product);
    }
  }

  incrementQuantity(): void {
    if (this.product && this.quantity < this.product.stock) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product && this.product.stock > 0) {
      this.cartService.addToCart(this.product, this.quantity);
    }
  }

  buyNow(): void {
    if (this.product && this.product.stock > 0) {
      this.cartService.addToCart(this.product, this.quantity);
      this.router.navigate(['/cart']);
    }
  }

  get specEntries(): { key: string; value: string }[] {
    if (!this.product || !this.product.specifications) return [];
    return Object.entries(this.product.specifications).map(([key, value]) => ({ key, value }));
  }

  prevProduct(): void {
    const currentIndex = this.allIds.indexOf(this.id);
    if (currentIndex > 0) {
      this.router.navigate(['/ProductDetails', this.allIds[currentIndex - 1]]);
    }
  }

  nextProduct(): void {
    const currentIndex = this.allIds.indexOf(this.id);
    if (currentIndex < this.allIds.length - 1) {
      this.router.navigate(['/ProductDetails', this.allIds[currentIndex + 1]]);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
