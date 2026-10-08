import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService, ProductFilters } from '../../Service/product.service';
import { Product, Category } from '../../models/product.interface';

@Component({
  selector: 'app-prodicute',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductCardComponent],
  templateUrl: './prodicute.component.html',
  styleUrl: './prodicute.component.css'
})
export class ProdicuteComponent implements OnInit {
  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  categories: Category[] = [];
  brands: string[] = [];

  // Filter state
  selectedCategory: string = 'all';
  selectedBrand: string = 'all';
  searchQuery: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  selectedRating: number = 0;
  inStockOnly: boolean = false;
  dealsOnly: boolean = false;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest' = 'featured';

  // Pagination
  currentPage: number = 1;
  pageSize: number = 12;
  totalPages: number = 1;
  loading: boolean = true;
  mobileFiltersOpen: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe(cats => {
      this.categories = cats;
    });

    this.productService.getBrands().subscribe(b => {
      this.brands = b;
    });

    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selectedCategory = params['category'];
      }
      if (params['brand']) {
        this.selectedBrand = params['brand'];
      }
      if (params['search']) {
        this.searchQuery = params['search'];
      }
      if (params['filter'] === 'deals') {
        this.dealsOnly = true;
      }
      if (params['sort']) {
        if (params['sort'] === 'popular' || params['sort'] === 'rating') {
          this.sortBy = 'rating';
        } else if (params['sort'] === 'price-low') {
          this.sortBy = 'price-low';
        } else if (params['sort'] === 'price-high') {
          this.sortBy = 'price-high';
        }
      }
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.loading = true;
    const filters: ProductFilters = {
      category: this.selectedCategory !== 'all' ? this.selectedCategory : undefined,
      brand: this.selectedBrand !== 'all' ? this.selectedBrand : undefined,
      search: this.searchQuery,
      minPrice: this.minPrice !== null ? this.minPrice : undefined,
      maxPrice: this.maxPrice !== null ? this.maxPrice : undefined,
      rating: this.selectedRating > 0 ? this.selectedRating : undefined,
      inStockOnly: this.inStockOnly,
      sortBy: this.sortBy
    };

    this.productService.getProducts(filters).subscribe(products => {
      let result = products;
      if (this.dealsOnly) {
        result = result.filter(p => p.discountPercentage && p.discountPercentage > 0);
      }
      this.filteredProducts = result;
      this.currentPage = 1;
      this.updatePagination();
      this.loading = false;
    });
  }

  onFilterChange(): void {
    this.loadProducts();
  }

  onSortChange(): void {
    this.loadProducts();
  }

  onSearchSubmit(): void {
    this.loadProducts();
  }

  selectCategory(categorySlug: string): void {
    this.selectedCategory = categorySlug;
    this.loadProducts();
  }

  selectBrand(brand: string): void {
    this.selectedBrand = this.selectedBrand === brand ? 'all' : brand;
    this.loadProducts();
  }

  resetFilters(): void {
    this.selectedCategory = 'all';
    this.selectedBrand = 'all';
    this.searchQuery = '';
    this.minPrice = null;
    this.maxPrice = null;
    this.selectedRating = 0;
    this.inStockOnly = false;
    this.dealsOnly = false;
    this.sortBy = 'featured';
    this.router.navigate(['/products']);
    this.loadProducts();
  }

  updatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.pageSize));
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get activeFiltersCount(): number {
    let count = 0;
    if (this.selectedCategory !== 'all') count++;
    if (this.selectedBrand !== 'all') count++;
    if (this.searchQuery) count++;
    if (this.minPrice !== null || this.maxPrice !== null) count++;
    if (this.selectedRating > 0) count++;
    if (this.inStockOnly) count++;
    if (this.dealsOnly) count++;
    return count;
  }
}
