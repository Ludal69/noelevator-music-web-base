import { Request, Response } from "express";
import db, { genId } from "../modules/db"; // Ensure this points to your Prisma client

export class ContactController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, message } = req.body;

      const contactMessage = await db.contactMessage.create({
        data: {
          id: genId(),
          name,
          email,
          message,
        },
      });

      res
        .status(201)
        .json({ message: "Contact message sent", data: contactMessage });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
