export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  productId: string;
  userId: string;
  quantity: number;
  size: string;
  product: Product;
}

export type CartItemWhereUniqueInput = {
  id?: string;
  productId?: string;
};
