import { Request, Response } from "express";
import db, { genId } from "../modules/db"; // Ensure this points to your Prisma client

export class CartController {
  async getCartItems(req: Request, res: Response) {
    try {
      const cartItems = await db.cartItem.findMany({
        include: { product: true },
      });
      res.json(cartItems);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async addToCart(req: Request, res: Response) {
    try {
      const { productId, quantity } = req.body;

      // Check if the cart item already exists
      const existingCartItem = await db.cartItem.findFirst({
        where: { productId },
      });

      if (existingCartItem) {
        // If it exists, update the quantity
        const updatedCartItem = await db.cartItem.update({
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + quantity },
          include: { product: true },
        });
        res.json({ message: "Cart item updated", data: updatedCartItem });
      } else {
        // If it doesn't exist, create a new cart item
        const newCartItem = await db.cartItem.create({
          data: {
            id: genId(),
            productId,
            quantity,
          },
          include: { product: true },
        });

        res
          .status(201)
          .json({ message: "Cart item created", data: newCartItem });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async removeFromCart(req: Request, res: Response) {
    const { id } = req.body;

    try {
      await db.cartItem.delete({
        where: { id },
      });
      res.json({ message: "Cart item deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
