import React, { createContext, useState, useContext, ReactNode } from "react";
import axios from "axios";
import { useCart } from "./CartContext";
import {
  getCartItems,
  addToCart as apiAddToCart,
} from "../services/cartService";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  email: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [email, setEmail] = useState<string | null>(
    localStorage.getItem("email")
  );
  const { dispatch } = useCart();

  const mergeCarts = async (
    localCartItems: any[],
    serverCartItems: any[],
    token: string
  ) => {
    const allItems = [...serverCartItems];
    for (const localItem of localCartItems) {
      const matchingItem = serverCartItems.find(
        (item) =>
          item.productId === localItem.productId && item.size === localItem.size
      );
      if (matchingItem) {
        const newQuantity = matchingItem.quantity + localItem.quantity;
        await apiAddToCart(
          token,
          localItem.productId,
          newQuantity,
          localItem.size
        );
        matchingItem.quantity = newQuantity;
      } else {
        await apiAddToCart(
          token,
          localItem.productId,
          localItem.quantity,
          localItem.size
        );
        allItems.push(localItem);
      }
    }
    return allItems;
  };

  const login = async (email: string, password: string) => {
    const response = await axios.post("http://localhost:4000/api/users/login", {
      email,
      password,
    });
    const { token } = response.data;
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);

    const localCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    const serverCartItems = await getCartItems(token);

    const mergedCartItems = await mergeCarts(
      localCartItems,
      serverCartItems,
      token
    );
    dispatch({ type: "SET_CART_ITEMS", payload: mergedCartItems });

    localStorage.removeItem("cartItems"); // Clear local storage cart after merging
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("cartItems"); // Clear local storage cart
    dispatch({ type: "SET_CART_ITEMS", payload: [] }); // Clear cart items
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!token, token, email, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
