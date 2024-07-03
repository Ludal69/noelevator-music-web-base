import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import {
  addToCart as apiAddToCart,
  getCartItems,
} from "../services/cartService";

// Define the shape of a cart item
interface CartItem {
  id: string;
  title: string;
  price: number;
  size?: string;
  image: string;
  quantity: number;
}

// Define the shape of the cart context state
interface CartState {
  items: CartItem[];
}

// Define action types
type Action =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { id: string } }
  | { type: "SET_CART_ITEMS"; payload: CartItem[] }
  | {
      type: "UPDATE_CART_ITEM";
      payload: { id: string; quantity: number; size?: string };
    };

// Initial state for the cart
const initialState: CartState = {
  items: [],
};

// Define the cart reducer
const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity:
            updatedItems[existingItemIndex].quantity + action.payload.quantity,
        };
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_CART_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };
    default:
      return state;
  }
};

// Create context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

// Define props for the CartProvider component
interface CartProviderProps {
  children: ReactNode;
}

// CartProvider component to provide cart context to the app
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getCartItems();
        dispatch({ type: "SET_CART_ITEMS", payload: response });
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
