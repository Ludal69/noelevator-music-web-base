import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();
const userController = new UserController();

// router.post("/signup", userController.signup.bind(userController));//TODO:
router.post("/login", userController.login.bind(userController));
router.post("/check-email", userController.checkEmail); // Nouvelle route pour vérifier l'email

export default router;
