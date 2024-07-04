import { Response } from "express";
import db, { genId } from "../modules/db";
import { CustomRequest } from "../types";

export class CartController {
  async getCartItems(req: CustomRequest, res: Response) {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const cartItems = await db.cartItem.findMany({
      where: { userId },
      include: { product: true },
    });
    res.json(cartItems);
  }

  async addToCart(req: CustomRequest, res: Response) {
    const { productId, quantity, size } = req.body;
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const existingCartItem = await db.cartItem.findUnique({
      where: { productId_userId_size: { productId, userId, size } },
    });

    if (existingCartItem) {
      const updatedCartItem = await db.cartItem.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
        include: { product: true },
      });
      res.json({ message: "Cart item updated", data: updatedCartItem });
    } else {
      const newCartItem = await db.cartItem.create({
        data: {
          id: genId(),
          productId,
          userId,
          quantity,
          size,
        },
        include: { product: true },
      });
      res.status(201).json({ message: "Cart item created", data: newCartItem });
    }
  }

  async removeFromCart(req: CustomRequest, res: Response) {
    const { id } = req.body;
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      await db.cartItem.delete({ where: { id } });
      res.json({ message: "Cart item deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
