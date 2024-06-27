import axios from "axios";

const API_URL = "http://localhost:4000/api/contact"; // Remplacez par l'URL de votre API

export const sendContactMessage = async (message: any) => {
  const response = await axios.post(API_URL, message);
  return response.data;
};
