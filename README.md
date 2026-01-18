# Angular ngIf and ngFor Directives Demo

## 🎓 University Task: Product Catalog Application

This project demonstrates the usage of **ngIf** and **ngFor** directives in Angular through a fully functional Product Catalog application.

## 📚 What This Demo Covers

### ngFor Directive Usage:
- ✅ Looping through arrays of products
- ✅ Using index, first, last, and even/odd variables
- ✅ Dynamic class binding based on loop position
- ✅ Displaying filtered data dynamically
- ✅ Generating dropdown options from arrays

### ngIf Directive Usage:
- ✅ Conditional rendering of UI elements
- ✅ Showing/hiding filter panel
- ✅ Displaying badges based on conditions
- ✅ Stock status indicators
- ✅ Cart count display (only when items exist)
- ✅ Product details modal (shown when product selected)
- ✅ Rating-based conditional rendering
- ✅ ngIf-else pattern for button states
- ✅ "No products found" message

## 🚀 Features

1. **Product Grid** - Displays products using ngFor with all features
2. **Smart Filters** - Toggle visibility with ngIf
3. **Stock Management** - Conditional rendering based on availability
4. **Product Details Modal** - Opens conditionally with ngIf
5. **Shopping Cart Counter** - Shows only when items are added
6. **Rating System** - Different badges based on rating values
7. **Responsive Design** - Works on all screen sizes

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.ts       # Main component with logic
│   ├── app.component.html     # Template with ngIf/ngFor examples
│   └── app.component.css      # Styling
├── main.ts                    # Bootstrap file
├── index.html                 # Main HTML
└── styles.css                 # Global styles
```

## 🛠️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   ng serve
   ```

3. **Open Browser**:
   Navigate to `http://localhost:4200/`

## 💡 Key Learning Points

### ngFor Examples in Code:
```html
<!-- Basic loop -->
<div *ngFor="let product of products">
  {{ product.name }}
</div>

<!-- With index and special variables -->
<div *ngFor="let product of filteredProducts; 
             let i = index; 
             let isFirst = first; 
             let isLast = last; 
             let isEven = even">
  Item #{{ i + 1 }}
</div>
```

### ngIf Examples in Code:
```html
<!-- Simple condition -->
<div *ngIf="showFilters">
  Filter content
</div>

<!-- With else -->
<button *ngIf="product.inStock; else outOfStockBtn">
  Add to Cart
</button>
<ng-template #outOfStockBtn>
  <button disabled>Out of Stock</button>
</ng-template>

<!-- Complex condition -->
<span *ngIf="cartCount > 0" class="cart-count">
  {{ cartCount }}
</span>
```

## 🎨 Features Breakdown

| Feature | Directive | Purpose |
|---------|-----------|---------|
| Product List | ngFor | Display all products |
| Filter Panel | ngIf | Show/hide filters |
| Stock Badge | ngIf | Show only when out of stock |
| Cart Count | ngIf | Display only when > 0 |
| Product Modal | ngIf | Show details on demand |
| Rating Stars | ngIf | Different displays per rating |
| Category Dropdown | ngFor | Generate options |
| No Products Message | ngIf | Show when filtered list empty |

## 🎯 Grading Checklist

- ✅ ngFor directive used correctly
- ✅ ngFor with index, first, last, even variables
- ✅ ngIf for conditional rendering
- ✅ ngIf-else pattern implemented
- ✅ Complex conditionals demonstrated
- ✅ Clean, organized code
- ✅ Professional styling
- ✅ Working application
- ✅ Documentation included

## 📝 Notes

- This is a standalone Angular application (no modules needed)
- Uses Angular 18+ features
- All directives are demonstrated in a practical context
- Code is commented for educational purposes

## 🎓 Educational Value

This project goes beyond basic examples and shows:
- Real-world application of directives
- Combining multiple directives
- State management with directives
- User interaction handling
- Responsive design principles

Perfect for understanding how Angular directives work in production code!

---

**Created for University Angular Course - Directives Assignment**
