import axios from "axios";

const API_URL = "http://localhost:4000/api/merch"; // Remplacez par l'URL de votre API

export const getMerchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createMerchProduct = async (product: any) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const getMerchProductById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateMerchProduct = async (id: number, product: any) => {
  const response = await axios.put(`${API_URL}/${id}`, product);
  return response.data;
};

export const deleteMerchProduct = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
