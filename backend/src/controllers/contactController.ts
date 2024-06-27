import { Request, Response } from "express";
import db, { genId } from "../modules/db"; // Ensure this points to your Prisma client
import transporter from "../config/nodemailerConfig";

export class ContactController {
  async create(req: Request, res: Response): Promise<void> {
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

      // Configurer les options de l'email
      const mailOptions = {
        from: email, // L'adresse email de l'expéditeur
        to: process.env.GMAIL_USER, // Remplacez par l'adresse email de destination
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Envoyer l'email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ error: "Failed to send email" });
        }
        console.log("Email sent: " + info.response);
        res
          .status(201)
          .json({ message: "Contact message sent", data: contactMessage });
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
