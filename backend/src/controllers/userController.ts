import { Request, Response } from "express";
import db, { genId } from "../modules/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
  async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await db.user.create({
        data: {
          id: genId(),
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: "User created", data: user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await db.user.findUnique({
        where: { email },
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful", token });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}
