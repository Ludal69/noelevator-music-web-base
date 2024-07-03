import { Router } from "express";
import { CartController } from "../controllers/cartController";

const router = Router();
const cartController = new CartController();

router.post("/add", cartController.addToCart.bind(cartController));
router.post("/remove", cartController.removeFromCart.bind(cartController));
router.get("/", cartController.getCartItems.bind(cartController));

export default router;
