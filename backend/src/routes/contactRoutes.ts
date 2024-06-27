import { Router } from "express";
import { ContactController } from "../controllers/contactController";

const router = Router();
const contactController = new ContactController();

router.post("/", contactController.create.bind(contactController));

export default router;
