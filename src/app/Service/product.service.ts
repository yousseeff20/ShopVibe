import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product, Category, Review } from '../models/product.interface';
import { PRODUCTS_DATA, CATEGORIES_DATA, BRANDS_DATA, REVIEWS_DATA } from '../data/products.data';
import { environment } from '../../environments/environment.development';

export interface ProductFilters {
  category?: string;
  brand?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStockOnly?: boolean;
  sortBy?: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.ApiUrl || 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(filters?: ProductFilters): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
      catchError(() => of([...PRODUCTS_DATA])),
      map(products => {
        let list = [...products];

        if (!filters) return list;

        // Category filter
        if (filters.category && filters.category !== 'all') {
          const catLower = filters.category.toLowerCase();
          list = list.filter(p => p.category.toLowerCase() === catLower || p.category.toLowerCase().includes(catLower));
        }

        // Brand filter
        if (filters.brand && filters.brand !== 'all') {
          list = list.filter(p => p.brand.toLowerCase() === filters.brand?.toLowerCase());
        }

        // Search query
        if (filters.search && filters.search.trim() !== '') {
          const q = filters.search.toLowerCase().trim();
          list = list.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
          );
        }

        // Price range
        if (filters.minPrice !== undefined && filters.minPrice !== null) {
          list = list.filter(p => p.price >= filters.minPrice!);
        }
        if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
          list = list.filter(p => p.price <= filters.maxPrice!);
        }

        // Rating
        if (filters.rating) {
          list = list.filter(p => p.rating >= filters.rating!);
        }

        // In Stock
        if (filters.inStockOnly) {
          list = list.filter(p => p.stock > 0);
        }

        // Sorting
        if (filters.sortBy) {
          switch (filters.sortBy) {
            case 'price-low':
              list.sort((a, b) => a.price - b.price);
              break;
            case 'price-high':
              list.sort((a, b) => b.price - a.price);
              break;
            case 'rating':
              list.sort((a, b) => b.rating - a.rating);
              break;
            case 'newest':
              list.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
              break;
            case 'featured':
            default:
              list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
              break;
          }
        }

        return list;
      })
    );
  }

  getProductById(id: number | string): Observable<Product | undefined> {
    const numId = Number(id);
    return this.http.get<Product>(`${this.apiUrl}/products/${numId}`).pipe(
      catchError(() => {
        const found = PRODUCTS_DATA.find(p => p.id === numId);
        return of(found);
      })
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(p => p.isFeatured).slice(0, 8))
    );
  }

  getBestSellers(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(p => p.isBestSeller).slice(0, 8))
    );
  }

  getNewArrivals(): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(p => p.isNewArrival || p.discountPercentage).slice(0, 8))
    );
  }

  getRelatedProducts(category: string, excludeId: number): Observable<Product[]> {
    return this.getProducts().pipe(
      map(products => products.filter(p => p.category === category && p.id !== excludeId).slice(0, 4))
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`).pipe(
      catchError(() => of([...CATEGORIES_DATA]))
    );
  }

  getBrands(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/brands`).pipe(
      catchError(() => of([...BRANDS_DATA]))
    );
  }

  getProductReviews(productId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/reviews?productId=${productId}`).pipe(
      catchError(() => of(REVIEWS_DATA.filter(r => r.productId === productId)))
    );
  }
}
