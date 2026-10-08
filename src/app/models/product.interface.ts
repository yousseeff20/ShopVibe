export interface Product {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  oldPrice: number | null;
  discountPercentage: number | null;
  rating: number;
  reviewCount: number;
  stock: number;
  isFeatured: boolean;
  isBestSeller: boolean;
  isNewArrival: boolean;
  images: string[];
  thumbnail: string;
  description: string;
  shortDescription: string;
  specifications: Record<string, string>;
  tags: string[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  image: string;
  productCount: number;
}

export interface Review {
  id: number;
  productId: number;
  customerName: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  verified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  status: 'processing' | 'shipped' | 'out-for-delivery' | 'delivered';
  date: string;
  estimatedDelivery: string;
  customer: OrderCustomer;
  paymentMethod: string;
}

export interface OrderItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export interface OrderCustomer {
  name: string;
  email: string;
  phone: string;
  governorate: string;
  city: string;
  address: string;
  building: string;
}

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}
