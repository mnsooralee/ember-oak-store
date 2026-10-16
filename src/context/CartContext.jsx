import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'ember-oak-cart';

// Each cart line is identified by product id + size, e.g. "kenya-aa-500g"
function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { line } = action;
      const exists = state.find((l) => l.key === line.key);
      if (exists) {
        return state.map((l) => (l.key === line.key ? { ...l, qty: Math.min(l.qty + line.qty, 20) } : l));
      }
      return [...state, line];
    }
    case 'SET_QTY':
      return state.map((l) => (l.key === action.key ? { ...l, qty: Math.max(1, Math.min(action.qty, 20)) } : l));
    case 'REMOVE':
      return state.filter((l) => l.key !== action.key);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const count = items.reduce((n, l) => n + l.qty, 0);
  const subtotal = items.reduce((sum, l) => sum + l.price * l.qty, 0);

  const value = {
    items, count, subtotal,
    addItem: (line) => dispatch({ type: 'ADD', line }),
    setQty: (key, qty) => dispatch({ type: 'SET_QTY', key, qty }),
    removeItem: (key) => dispatch({ type: 'REMOVE', key }),
    clear: () => dispatch({ type: 'CLEAR' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook so components can just call useCart()
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
