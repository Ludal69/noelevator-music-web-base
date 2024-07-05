import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useAuth } from "./AuthContext";
import { getCartItems } from "../services/cartService";
import { CartItem } from "../types"; // Import the CartItem type

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
  items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
};

// Define the cart reducer
const cartReducer = (state: CartState, action: Action): CartState => {
  let updatedItems;
  switch (action.type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        items: action.payload,
      };
    case "ADD_TO_CART":
      updatedItems = [...state.items, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };
    case "REMOVE_FROM_CART":
      updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
      };
    case "UPDATE_CART_ITEM":
      updatedItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return {
        ...state,
        items: updatedItems,
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
  const { token } = useAuth();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (token) {
          const response = await getCartItems(token);
          dispatch({ type: "SET_CART_ITEMS", payload: response });
        } else {
          dispatch({
            type: "SET_CART_ITEMS",
            payload: JSON.parse(localStorage.getItem("cartItems") || "[]"),
          });
        }
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCartItems();
  }, [token]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
