# React + TypeScript Product Management System

A modern, full-featured product management application built with React, TypeScript, and Vite. This application allows users to create, update, and manage product inventory with a beautiful, responsive UI and comprehensive validation.

## 🚀 Quick Start for Interviewers

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (v7 or higher)

### Installation & Running

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   
   Navigate to: **`http://localhost:5173/`**

### Other Available Commands

- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Run linter**: `npm run lint`

---

## 📋 How the Application Works

### Two Main Pages

#### 1. **Product List Details Page** (`/products`)
**Default landing page** - Shows all your products in an organized list

**What you can do:**
- ➕ Click **"Add New Product"** to create a new product
- ✏️ Click **"Edit"** to modify an existing product
- ➕➖ Use **+/- buttons** to adjust product quantity
- 🗑️ **Delete** products (only available when quantity reaches 0)
- View all product details: Name, Price, Description, and Stock Quantity

**Visual Indicators:**
- 🟢 Green badge: Good stock (≥ 10 units)
- 🟡 Yellow badge: Low stock (< 10 units)
- 🔴 Red badge: Out of stock (0 units)

#### 2. **Product Maintenance Page** (`/maintenance`)
**Create or Edit Products** - Form with comprehensive validation

**Required Fields:**
- **Product Name** (text, required)
- **Price** (number, must be > 0)
- **Description** (text, required)
- **Quantity** (number, must be > 0)

**How it works:**
1. Fill out all fields in the form
2. Click **"+ Add Product"** (or **"✓ Update Product"** when editing)
3. If validation passes, you're automatically redirected to the Product List
4. If validation fails, error messages appear below each invalid field
5. Click **"Cancel"** to go back to the Product List without saving

---

## 🎯 User Flow Examples

### Creating a New Product

```
1. Start at Product List Details Page (/)
2. Click "➕ Add New Product" button
3. Redirected to Product Maintenance Page
4. Fill in the form:
   - Name: "Laptop"
   - Price: 1299.99
   - Description: "High-performance gaming laptop"
   - Quantity: 25
5. Click "➕ Add Product"
6. Automatically redirected back to Product List
7. New product appears in the list
```

### Editing an Existing Product

```
1. From Product List Details Page
2. Find the product you want to edit
3. Click "✏️ Edit" button
4. Redirected to Product Maintenance Page (form pre-filled)
5. Make your changes
6. Click "✓ Update Product"
7. Redirected back to Product List with updated information
```

### Deleting a Product

```
1. From Product List Details Page
2. Use ➖ button to reduce quantity to 0
3. 🗑️ Delete button appears (with animation)
4. Click "🗑️ Delete"
5. Product is removed from the list
```

---

## 🏗️ Technical Architecture

### Tech Stack

- **React 19.2.0** - UI framework with latest features
- **TypeScript 5.9.3** - Full type safety
- **Vite 7.2.2** - Lightning-fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS 3.4.18** - Utility-first CSS framework

### State Management

- **React Context API** (`ProductContext`) - Global state management
- Product data persists across page navigation
- Centralized CRUD operations
- Custom hooks for modular functionality:
  - `useProducts` - Product CRUD operations
  - `useProductEdit` - Edit state management
  - `useProductId` - Unique ID generation

### Component Architecture (Atomic Design Pattern)

```
src/
├── components/
│   ├── atoms/          # Basic building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── molecules/      # Composite components
│   │   ├── FormField.tsx
│   │   ├── ProductCard.tsx
│   │   └── QuantityControl.tsx
│   └── organisms/      # Complex components
│       ├── ProductForm.tsx
│       └── ProductList.tsx
├── contexts/           # React Context providers
│   └── ProductContext.tsx
├── hooks/              # Custom React hooks
│   ├── useProducts.ts
│   ├── useProductEdit.ts
│   ├── useProductId.ts
│   └── useProductManagement.ts
├── pages/              # Page-level components
│   ├── ProductListDetailsPage.tsx
│   └── ProductMaintenancePage.tsx
├── types/              # TypeScript interfaces
│   └── Product.ts
└── App.tsx             # Main app with routing setup
```

---

## ✅ Form Validation

All fields are validated on form submission with clear, real-time error messages:

| Field | Validation Rule | Error Message |
|-------|----------------|---------------|
| **Name** | Required, non-empty | ⚠️ Product name is required |
| **Price** | Required, must be > 0 | ⚠️ Price must be greater than 0 |
| **Description** | Required, non-empty | ⚠️ Description is required |
| **Quantity** | Required, must be > 0 | ⚠️ Quantity must be greater than 0 |

**Validation Features:**
- Errors appear immediately below each field
- Errors clear when user starts correcting the field
- Form submission is blocked until all validations pass
- Visual warning icons (⚠️) accompany error messages

---

## 🎨 UI/UX Features

- **Dark Theme** - Modern gradient background (slate-900 to slate-800)
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - Proper labels and semantic HTML
- **Visual Feedback** - Loading states and clear action buttons
- **Intuitive Navigation** - Clear page titles and breadcrumbs

---

## 🧪 Testing the Application

### Sample Test Scenario

1. **Start the app** - Opens to Product List (empty state)
2. **Add First Product:**
   - Click "Add New Product"
   - Name: "iPhone 15 Pro"
   - Price: 999.99
   - Description: "Latest iPhone with A17 Pro chip"
   - Quantity: 50
   - Click "Add Product"
3. **Verify:**
   - See product in list with green badge (50 units)
   - Price shows as "$999.99"
4. **Add Second Product:**
   - Name: "AirPods Pro"
   - Price: 249.99
   - Description: "Wireless earbuds with ANC"
   - Quantity: 5
   - See yellow badge (low stock)
5. **Edit Product:**
   - Click Edit on iPhone
   - Change price to 899.99
   - Update and verify changes
6. **Quantity Management:**
   - Use +/- to adjust stock
   - Reduce to 0 to enable delete
7. **Delete Product:**
   - Delete button appears when quantity = 0
   - Click delete to remove

---

## 📝 Code Quality Highlights

✅ **TypeScript** - Full type safety, no `any` types  
✅ **Clean Code** - Well-organized, maintainable structure  
✅ **Reusable Components** - Atomic design pattern  
✅ **Custom Hooks** - Separated business logic  
✅ **Context API** - Proper state management  
✅ **Form Validation** - Comprehensive error handling  
✅ **Routing** - Clean URL structure  
✅ **Responsive** - Mobile-first design approach  

---

## 🔧 Development Tools

- **Vite** - Fast HMR (Hot Module Replacement)
- **ESLint** - Code quality and consistency
- **TypeScript** - Type checking during development
- **PostCSS** - CSS processing with Tailwind
- **React DevTools** - Debugging support

---

**Built for Maybank Technical Assessment** 🏦

---

## Features

### 🔧 Product Maintenance Page
- **Create new products** with comprehensive details:
  - Name (required)
  - Price (required, must be greater than 0)
  - Description (required)
  - Quantity (required, must be greater than 0)
- **Update existing products** with full field validation
- Real-time form validation with helpful error messages
- Auto-navigation to Product List after successful save

### 📋 Product List Details Page
- View all products with complete information:
  - Product name
  - Price (formatted as currency)
  - Description
  - Current stock quantity
- **Quick actions**:
  - Add new product button
  - Edit existing products (redirects to maintenance page)
  - Delete products (when quantity is 0)
  - Increment/decrement quantity controls
- Color-coded stock status badges:
  - 🔴 Red: Out of stock (0 units)
  - 🟡 Yellow: Low stock (< 10 units)
  - 🟢 Green: In stock (≥ 10 units)

## Navigation Flow

1. **Home** → Redirects to Product List Details Page
2. **Product List** → Click "Add New Product" → Product Maintenance Page
3. **Product List** → Click "Edit" on a product → Product Maintenance Page (pre-filled)
4. **Product Maintenance** → Save/Cancel → Returns to Product List Details Page

## Tech Stack

- **React 19.2.0** - UI framework
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.2** - Build tool and dev server
- **Tailwind CSS 3.4.18** - Styling
- **React Router DOM** - Client-side routing

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm preview
```

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI components (Button, Input, Card, Badge)
│   ├── molecules/      # Composite components (FormField, ProductCard, QuantityControl)
│   └── organisms/      # Complex components (ProductForm, ProductList)
├── hooks/              # Custom React hooks for state management
├── pages/              # Page components
│   ├── ProductMaintenancePage.tsx
│   └── ProductListDetailsPage.tsx
├── types/              # TypeScript type definitions
└── App.tsx             # Main app with routing
```

## Validation Rules

The Product Maintenance form enforces the following validation:

- **Name**: Required, cannot be empty or whitespace only
- **Price**: Required, must be a number greater than 0
- **Description**: Required, cannot be empty or whitespace only
- **Quantity**: Required, must be a number greater than 0

All fields show real-time validation errors when invalid.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
