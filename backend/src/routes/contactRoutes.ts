import { Router } from "express";
import { ContactController } from "../controllers/contactController";
import { check, validationResult } from "express-validator";

const router = Router();
const contactController = new ContactController();

router.post(
  "/",
  [
    check("name").trim().notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("message").trim().notEmpty().withMessage("Message is required"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  contactController.create.bind(contactController)
);

export default router;
