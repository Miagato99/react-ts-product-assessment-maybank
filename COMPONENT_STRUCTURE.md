# Component Structure - Atomic Design

This project follows the **Atomic Design** methodology for organizing React components.

## 📁 Directory Structure

```
src/components/
├── atoms/           # Basic building blocks
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   ├── IconButton.tsx
│   ├── Card.tsx
│   └── index.ts
├── molecules/       # Combinations of atoms
│   ├── FormField.tsx
│   ├── QuantityControl.tsx
│   ├── ProductCard.tsx
│   └── index.ts
└── organisms/       # Complex components
    ├── ProductForm.tsx
    ├── ProductList.tsx
    └── index.ts
```

## 🧩 Component Hierarchy

### Atoms (Building Blocks)
Basic UI elements that can't be broken down further:
- **Button**: Reusable button with variants (primary, secondary, danger, success, ghost)
- **Input**: Form input field with label support
- **Badge**: Status badges with color variants
- **IconButton**: Circular icon buttons for actions
- **Card**: Container component with glassmorphism design

### Molecules (Simple Components)
Combinations of atoms that form functional units:
- **FormField**: Label + Input field combination
- **QuantityControl**: Increment/decrement controls with display
- **ProductCard**: Complete product display with actions

### Organisms (Complex Components)
Complex UI sections built from molecules and atoms:
- **ProductForm**: Complete form for adding/editing products
- **ProductList**: List container with multiple product cards

## 💡 Usage Examples

### Import Individual Components
```typescript
import Button from './components/atoms/Button';
import FormField from './components/molecules/FormField';
import ProductForm from './components/organisms/ProductForm';
```

### Import from Index Files
```typescript
import { Button, Badge, Card } from './components/atoms';
import { FormField, QuantityControl } from './components/molecules';
import { ProductForm, ProductList } from './components/organisms';
```

## 🎨 Design Principles

1. **Reusability**: Atoms can be used across the entire application
2. **Composability**: Molecules combine atoms, organisms combine molecules
3. **Separation of Concerns**: Each component has a single responsibility
4. **Props-driven**: All components accept props for customization
5. **Type Safety**: Full TypeScript support with proper interfaces

## 🔄 Component Props

### Button
- `variant`: 'primary' | 'secondary' | 'danger' | 'success' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- Standard HTML button attributes

### Badge
- `variant`: 'success' | 'warning' | 'danger' | 'info' | 'primary'

### FormField
- `label`: Field label text
- `type`: 'text' | 'number'
- `value`: Current field value
- `onChange`: Value change handler

### QuantityControl
- `quantity`: Current quantity value
- `onIncrement`: Increment handler
- `onDecrement`: Decrement handler

### ProductCard
- `product`: Product object
- `onEdit`: Edit handler
- `onDelete`: Delete handler
- `onQuantityChange`: Quantity change handler
