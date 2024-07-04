import axios from "axios";

const API_URL = "http://localhost:4000/api/cart";

export const getCartItems = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addToCart = async (
  token: string,
  productId: string,
  quantity: number,
  size: string
) => {
  const response = await axios.post(
    `${API_URL}/add`,
    {
      productId,
      quantity,
      size,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateCartItem = async (
  token: string,
  id: string,
  quantity: number
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const removeFromCart = async (token: string, id: string) => {
  const response = await axios.post(
    `${API_URL}/remove`,
    { id },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
