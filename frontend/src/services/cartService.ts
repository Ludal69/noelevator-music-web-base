import axios from "axios";

const API_URL = "http://localhost:4000/api/cart";

export const getCartItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addToCart = async (productId: string, quantity: number) => {
  const response = await axios.post(`${API_URL}/add`, { productId, quantity });
  return response.data;
};

export const updateCartItem = async (id: string, quantity: number) => {
  const response = await axios.put(`${API_URL}/${id}`, { quantity });
  return response.data;
};

export const removeFromCart = async (id: string) => {
  const response = await axios.post(`${API_URL}/remove`, { id });
  return response.data;
};
