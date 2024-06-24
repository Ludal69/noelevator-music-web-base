import { Request, Response } from "express";
import db, { genId } from "../modules/db"; // Ensure this points to your Prisma client

export class MerchController {
  async getAll(req: Request, res: Response) {
    try {
      const merchProducts = await db.merchProduct.findMany();
      res.json(merchProducts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, price } = req.body;

      const merchProduct = await db.merchProduct.create({
        data: {
          id: genId(),
          name,
          price,
        },
      });
      res
        .status(201)
        .json({ message: "Merchandise product created", data: merchProduct });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const merchProduct = await db.merchProduct.findUnique({
        where: { id },
      });
      if (!merchProduct) {
        res.status(404).json({ message: "Merchandise product not found" });
      } else {
        res.json(merchProduct);
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  async update(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const { name, price } = req.body;

      const merchProduct = await db.merchProduct.update({
        where: { id },
        data: { name, price },
      });
      res.json({ message: "Merchandise product updated", data: merchProduct });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;

    try {
      const merchProduct = await db.merchProduct.delete({
        where: { id },
      });
      res.json({ message: "Merchandise product deleted" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
