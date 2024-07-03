import { Request, Response } from "express";
import db, { genId } from "../modules/db"; // Ensure this points to your Prisma client

export class ProductController {
  async getAll(req: Request, res: Response) {
    try {
      const products = await db.product.findMany();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const product = await db.product.findUnique({
        where: { id },
      });
      if (!product) {
        res.status(404).json({ message: "Product not found" });
      } else {
        res.json(product);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { title, description, price, quantity, imageUrl } = req.body;

      const product = await db.product.create({
        data: {
          id: genId(),
          title,
          description,
          price,
          quantity,
          imageUrl,
        },
      });
      res.status(201).json({ message: "Product created", data: product });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const { title, description, price, quantity, imageUrl } = req.body;

      const product = await db.product.update({
        where: { id },
        data: { title, description, price, quantity, imageUrl },
      });
      res.json({ message: "Product updated", data: product });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await db.product.delete({
        where: { id },
      });
      res.json({ message: "Product deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
