// backend/src/controllers/userController.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db, { genId } from "../../src/modules/db";

const saltRounds = 10;

export class UserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await db.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: "Email not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "An error occurred during login" });
    }
  }

  async checkEmail(req: Request, res: Response) {
    const { email, context } = req.body; // context can be 'login' or 'signup'

    try {
      const user = await db.user.findUnique({ where: { email } });

      if (context === "login") {
        if (!user) {
          return res.status(400).json({ error: "Email not found" });
        }
        res.json({ message: "Email exists" });
      } else if (context === "signup") {
        if (user) {
          return res.status(400).json({ error: "Email already in use" });
        }
        res.json({ message: "Email available" });
      } else {
        res.status(400).json({ error: "Invalid context" });
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred while checking email" });
    }
  }
  // Nouvelle méthode pour créer un utilisateur avec un mot de passe haché
  async createUser(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = await db.user.create({
        data: {
          id: genId(),
          email,
          password: hashedPassword,
        },
      });

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "An error occurred during user creation" });
    }
  }
}
