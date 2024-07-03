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
  quantity: number;
  product: Product;
}

export type CartItemWhereUniqueInput = {
  id?: string;
  productId?: string;
};
