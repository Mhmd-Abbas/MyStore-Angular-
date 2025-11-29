# MyStore

To start the development server:

```In the bash run:
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload on file changes.

## Features

- **Products List** - Browse and view products with detailed information
- **Shopping Cart** - Add/remove items from cart with quantity selection
- **Checkout** - Secure checkout form with validation
- **Order Success** - Confirmation page after successful purchase
- **State Management** - Persistent product state across components

## Project Structure

### Components

#### Core Components

- **app.ts** - Root component with routing configuration
- **nav-bar** - Navigation bar with cart badge displaying total items
- **success-page** - Order confirmation page

#### Product Components

- **product-list** - Displays grid of all products (Parent Component)
- **product-card** - Individual product card with add to cart functionality (Child Component)
- **product-details** - Detailed product view with full description

#### Cart Components

- **cart-page** - Main cart page displaying all cart items and total price (Parent Component)
- **cart-item** - Individual cart item display with remove functionality (Child Component)
- **checkout** - Form for collecting customer details (name, address, credit card) (Child Component)

### Services

- **CartService** - Manages shopping cart state and operations (add, remove, clear)
- **GetProducts** - HTTP service to fetch products from data source
- **GetProduct** - HTTP service to fetch single product details
- **ProductState** - Service to maintain product state across navigation

### Models

- **Product** - Product interface with id, name, price, url, and description
- **CartItemModel** - Cart item interface with product and quantity

## Component Communication Pattern

The application follows a **parent-to-child** communication pattern using `@Input` and `@Output` decorators:

```
ProductList (Parent)
└── ProductCard (Child)
    └── Emits: addToCart event

CartPage (Parent)
├── CartItem (Child)
│   └── Emits: removeItemClick event
└── Checkout (Child)
    └── Emits: submitCheckout event
```

This ensures:

- Service logic is centralized in parent components
- Components remain reusable and loosely coupled
- Cleaner dependency injection and testing
- Unidirectional data flow for better maintainability

