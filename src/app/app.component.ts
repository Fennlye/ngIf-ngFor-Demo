import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Catalog - ngIf & ngFor Demo';
  
  // Sample products data
  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 89.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.5,
      description: 'High-quality wireless headphones with noise cancellation',
      imageUrl: 'https://via.placeholder.com/200/0000FF/FFFFFF?text=Headphones'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      category: 'Electronics',
      inStock: false,
      rating: 4.8,
      description: 'Advanced smartwatch with health tracking features',
      imageUrl: 'https://via.placeholder.com/200/FF0000/FFFFFF?text=Smart+Watch'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 49.99,
      category: 'Accessories',
      inStock: true,
      rating: 4.2,
      description: 'Durable backpack with multiple compartments',
      imageUrl: 'https://via.placeholder.com/200/00FF00/FFFFFF?text=Backpack'
    },
    {
      id: 4,
      name: 'Mechanical Keyboard',
      price: 129.99,
      category: 'Electronics',
      inStock: true,
      rating: 4.7,
      description: 'RGB mechanical keyboard with customizable keys',
      imageUrl: 'https://via.placeholder.com/200/FFFF00/000000?text=Keyboard'
    },
    {
      id: 5,
      name: 'Water Bottle',
      price: 24.99,
      category: 'Accessories',
      inStock: false,
      rating: 4.0,
      description: 'Insulated stainless steel water bottle',
      imageUrl: 'https://via.placeholder.com/200/FF00FF/FFFFFF?text=Water+Bottle'
    },
    {
      id: 6,
      name: 'Desk Lamp',
      price: 39.99,
      category: 'Home',
      inStock: true,
      rating: 4.3,
      description: 'LED desk lamp with adjustable brightness',
      imageUrl: 'https://via.placeholder.com/200/00FFFF/000000?text=Desk+Lamp'
    }
  ];

  // Selected product for details view (demonstrates ngIf)
  selectedProduct: Product | null = null;

  // Filter settings (demonstrates ngIf with conditions)
  showOnlyInStock = false;
  selectedCategory = 'All';
  minRating = 0;
  
  // UI state
  showFilters = true;
  cartCount = 0;

  // Get unique categories
  get categories(): string[] {
    const cats = ['All', ...new Set(this.products.map(p => p.category))];
    return cats;
  }

  // Filtered products (demonstrates ngFor with computed data)
  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesStock = !this.showOnlyInStock || product.inStock;
      const matchesCategory = this.selectedCategory === 'All' || product.category === this.selectedCategory;
      const matchesRating = product.rating >= this.minRating;
      return matchesStock && matchesCategory && matchesRating;
    });
  }

  // Select a product (demonstrates ngIf toggle)
  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  // Close details view
  closeDetails(): void {
    this.selectedProduct = null;
  }

  // Toggle filters panel
  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  // Add to cart simulation
  addToCart(product: Product): void {
    if (product.inStock) {
      this.cartCount++;
      alert(`${product.name} added to cart!`);
    }
  }

  // Clear all filters
  clearFilters(): void {
    this.showOnlyInStock = false;
    this.selectedCategory = 'All';
    this.minRating = 0;
  }
}
